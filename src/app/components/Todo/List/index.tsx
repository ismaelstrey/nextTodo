import { Lista } from "@/types/todos";
import { BeakerIcon, ForwardIcon, ArrowDownLeftIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
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
    <div className="flex w-full h-full rounded-md">
      <ul className="flex flex-col gap-2">
        {todo.map((l) => {
          const largura = `${l.percentual}%`;
          const restante = `${Math.abs(Number(l.percentual) - 100)}%`;

          return (
            <div key={l.id} className="flex flex-col shadow-md p-1 rounded-md bg-white">
              <div className="flex bg-indigo-700">
                <div
                  className="flex content-center items-center text-[10px] bg-gradient-to-r from-yellow-500 via-green-400 to-green-600 h-2.5 border-l-0 rounded-r-full"
                  style={{ minWidth: largura }}
                >
                  {largura} feito
                </div>
              </div>

              <div className=" flex w-80 min-h-[100px] content-center justify-between flex-col">
                <span> {l.name}</span>
                <span className="">{l.descricao}</span>
                <div className="flex bg-gray-100 justify-around">
                  <button onClick={() => deleteLista(l.id)}>

                    <ForwardIcon className="h-6 w-6 text-red-700 hover:text-red-600 rotate-180" />
                  </button>
                  <button onClick={() => deleteLista(l.id)}>
                    <PlayIcon className="h-6 w-6 text-red-700 hover:text-red-600" />
                  </button>
                  <button onClick={() => deleteLista(l.id)}>
                    <PauseIcon className="h-6 w-6 text-red-700 hover:text-red-600" />
                  </button>

                  <button onClick={() => deleteLista(l.id)}>

                    <ForwardIcon className="h-6 w-6 text-red-700 hover:text-red-600" />
                  </button>
                </div>
              </div>
              <div className="flex flex-row-reverse bg-indigo-700">
                <div
                  className="flex content-center items-center text-[10px] bg-gradient-to-r from-yellow-500 via-green-400 to-green-600 h-2.5 border-l-0 rounded-r-full text-right"
                  style={{ minWidth: restante }}
                >
                  {restante} restante
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
