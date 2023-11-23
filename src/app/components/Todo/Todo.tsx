'use client'
import { TodoContext } from '../context/todoContext'
import { useContext } from 'react'
import TodoList from './List'
import { todoTypesProps } from '@/app/@types/TypesList'

const Todo: React.FC<todoTypesProps> = ({ type }) => {
    const { todo } = useContext(TodoContext)
    return (
        <div className='gap-2 flex'>
            {todo && <TodoList todo={todo} type={type} />}
        </div>
    )
}

export default Todo