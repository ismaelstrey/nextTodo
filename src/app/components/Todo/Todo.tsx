import { Lista } from '@/types/todos'
import React from 'react'
import TodoList from './List'

const Todo = ({ todo }: Lista) => {
  
    return (
        <div>
            <div>Todo</div>
          <TodoList todo={todo}/>
        </div>
    )
}

export default Todo