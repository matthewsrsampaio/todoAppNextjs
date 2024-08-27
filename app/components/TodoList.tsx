import { ITask } from '@/types/tasks'
import React from 'react'
import Task from './Task'

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto mt-4 w-full">
        <table className="table w-full mx-auto border-collapse">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Task to do</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
               {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task}/>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default TodoList