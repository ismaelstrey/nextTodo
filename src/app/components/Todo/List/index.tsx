import { Lista } from "@/types/todos";
import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";

const TodoList = ({ todo }: Lista) => {
  console.log(todo);
  const deleteLista = async (id: number | undefined | string) => {
    try {
      const response = await fetch(`/api/todo/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Faça alguma coisa após a exclusão bem-sucedida, se necessário.
        console.log(response);
      } else {
        // Lidar com erros, se necessário.
      }
    } catch (error) {
      // Lidar com erros, se necessário.
    }
  };
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {todo.map((l) => {
          const largura = `${l.percentual}%`;

          return (
            <div key={l.id} className="flex flex-col">
              <div className="flex bg-indigo-700">
                <div
                  className="flex content-center items-center text-[10px] bg-gradient-to-r from-yellow-500 via-green-400 to-green-600 h-2.5 border-l-0 rounded-r-full"
                  style={{ width: largura }}
                >
                  {largura}
                </div>
              </div>

              <div className=" flex w-80 h h-full bg-green-300 content-center justify-between">
                {l.name}
                <span className="">{l.descricao}</span> 
                <button onClick={() => deleteLista(l.id)}>
                <BeakerIcon className="h-6 w-6 text-red-700 hover:text-red-600" />
              </button>
              </div>
             
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
