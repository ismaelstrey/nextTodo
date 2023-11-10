import {  Lista } from '@/types/todos'
import TodoList from './List'

const Todo = ({ todo }: Lista) => {  
    return (
        <div className='gap-2 flex flex-col'>
            <div>Todo</div>
          <TodoList todo={todo}/>
        </div>
    )
}

export default Todo