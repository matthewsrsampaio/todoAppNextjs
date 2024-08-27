"use client";
import { ITask } from '@/types/tasks'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from '@/api';

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false); //caixinha de editar
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false); //caixinha de deletar
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text); //dados de EDIT
  
  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  }

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(openModalEdit);
    await editTodo({
        id: task.id,
        text: taskToEdit
    });
    setOpenModalEdit(false);
    router.refresh();
}

  return (
    <tr key={task.id}>
        <td className='w-full'>
          {task.text}
        </td>
        <td className="flex gap-5">
          <FiEdit 
            onClick={() => setOpenModalEdit(true)}
            cursor="pointer" 
            size={25} 
            className="text-blue-500"/>

          <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditTodo}>
                <h3 className="font-bold text-lg text-center">Edit task</h3>
                <div className="modal-action my-5 flex flex-col gap-4">
                    <input 
                        value={taskToEdit}
                        onChange={(e) => setTaskToEdit(e.target.value)}
                        type="text" 
                        placeholder="Type here"
                        className="input input-bordered"
                    />
                </div>
                <div className="modal-action">
                    <button type="submit" className="btn btn-primary">
                      Edit
                    </button>
                </div>
            </form>
          </Modal>

          <FiTrash2
            onClick={() => setOpenModalDeleted(true)}
            cursor="pointer" 
            size={25} 
            className="text-red-500"
          />

          <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
            <h3 className="text-lg">Are you sure you want to delete this task?</h3>
            <div className="modal-action">
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="btn btn-error" 
              >
                Yes, Im sure
              </button>
            </div>
                
          </Modal>
        </td>
    </tr>
  )
}

export default Task