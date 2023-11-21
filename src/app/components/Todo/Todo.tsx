'use client'
import { TodoContext } from '../context/todoContext'
import { useContext } from 'react'
import TodoList from './List'
import { Lista } from '@/app/@types/TypesList'

function Todo({ type }: Lista) {
    const { todo } = useContext(TodoContext)
    return (
        <div className='gap-2 flex'>
            {todo && <TodoList todo={todo.todo} type={type} />}
        </div>
    )
}

export default Todo