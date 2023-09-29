import { Lista } from '@/types/todos';
import React from 'react';

const TodoList = ({todo}:Lista) => {

    const deleteLista = async (id: number |undefined | string) => {
        try {
          const response = await fetch(`/api/todo/${id}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            // Faça alguma coisa após a exclusão bem-sucedida, se necessário.
            console.log(response)
          } else {
            // Lidar com erros, se necessário.
          }
        } catch (error) {
          // Lidar com erros, se necessário.
        }
      };
  return (<div>
    <ul className='flex flex-col gap-3'>
        {todo.map(l=> <div  key={l.id} className='flex'><span>V</span><li className=' flex w-full h h-full bg-green-300 justify-center content-center'>{l.name}</li><button onClick={()=>deleteLista(l.id)}>X-{l.id}</button></div>)}
    </ul>
  </div>)
}

export default TodoList;