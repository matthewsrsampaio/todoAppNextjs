import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3002";

//READ
export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {cache: 'no-store'}); //{cache: 'no-store'} works as dynamic fetching
    const todos = await res.json();
    return todos;
}

//CREATE
export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}

//UPDATE
export const editTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updateTodo = await res.json();
    return updateTodo;
}

//DELETE
export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE'
    })
}