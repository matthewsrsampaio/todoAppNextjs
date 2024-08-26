import { ITask } from '@/types/tasks'
import React from 'react'
import Task from './Task'

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto mt-4 w-full">
        <table className="table mx-auto">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
               {tasks.map((task) => 
                (<Task key={task.id} task={task}/>))}
            </tbody>
        </table>
    </div>
  )
}

export default TodoList