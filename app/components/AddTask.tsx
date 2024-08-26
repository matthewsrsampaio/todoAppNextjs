"use client"; //Depois de ajustar o Modal faverá um erro por conta do useState. Isso conserta esse erro

import { FormEventHandler, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
    const router = useRouter(); //this needs to be imported from next;
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');
    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        console.log(newTaskValue);
        await addTodo({
            id: uuidv4(),
            text: newTaskValue
        })
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }
    
    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                ADD NEW TASK <AiOutlinePlus className="ml-2" size={18}/>
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className="font-bold text-lg text-center">Add new task</h3>
                    <div className="modal-action my-5 flex flex-col gap-4">
                        <input 
                            value={newTaskValue}
                            onChange={(e) => setNewTaskValue(e.target.value)}
                            type="text" 
                            placeholder="Type here"
                            className="input input-bordered w-full" />
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTask;