'use client'
import { TodoContext } from '../context/todoContext'
import { useContext } from 'react'
import TodoList from './List'

function Todo() {
    const { todo } = useContext(TodoContext)
    return (
        <div className='gap-2 flex flex-col'>
            {todo && <TodoList todo={todo.todo} />}
        </div>
    )
}

export default Todo