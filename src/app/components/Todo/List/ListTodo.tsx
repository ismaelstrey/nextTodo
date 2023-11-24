
import { ForwardIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import { List, Status, todoListProps } from "@/app/@types/TypesList";
import moment, { Moment } from "moment"
import { color, colorCard } from "@/app/helper/color";


const TodoList: React.FC<todoListProps> = ({ todo, type }) => {
  const { atualizarTodo, handleCliclkOnCard } = useContext(TodoContext)

  const hora = moment().format('h:mm:ss a');


  const filtra = () => todo.filter(f => f.status === type)

  function calculateHoursDifference(startDate: string, endDate: string): number {
    // Parse as datas usando o Moment.js
    const startMoment: Moment = moment(startDate);
    const endMoment: Moment = moment(endDate);

    // Verifique se as datas são válidas
    if (!startMoment.isValid() || !endMoment.isValid()) {
      throw new Error
    }

    // Calcule a diferença em milissegundos
    const differenceInMilliseconds: number = endMoment.diff(startMoment);

    // Converta a diferença para horas
    const differenceInHours: number = moment.duration(differenceInMilliseconds).asHours();


    return differenceInHours;
  }

  const RenderCard: React.FC = () => <div className="flex w-full h-full rounded-md shadow-white">
    <ul className="flex flex-col gap-2">
      {filtra().map((l: List) => {
        const largura = `${l.percentual}%`;
        const restante = `${Math.abs(Number(l.percentual) - 100)}%`;
        return (
          <div key={l.id} className={`flex flex-col shadow-md border-2 border-indigo-500 rounded-b-md ${colorCard(l.status)}`}>
            <div className="flex bg-indigo-700">
              <div
                className="flex content-center items-center text-[10px] bg-gradient-to-r from-yellow-500 via-green-400 to-green-600 h-2.5 border-l-0 rounded-r-md"
                style={{ minWidth: largura }}
              >
                {largura} feito
              </div>
            </div>

            <div className=" flex w-80 min-h-[100px] content-center justify-between flex-col">
              <div className="hover:cursor-pointer" onClick={(() => handleCliclkOnCard(l.id))}>
                <div className="flex justify-between">
                  <div>
                    <span className="bg-yellow-200 rounded-full p-[2px]">config,</span><span className="bg-red-200 rounded-full p-[2px]">urgente,</span>
                    <span className={`text-white text-sm rounded-full p-[2px] ${color(l.status)}`}>{l.status}</span></div>
                  <span className="top-0 right-0">#{l.id}</span>
                </div>
                <div className="flex flex-col p-2">

                  <span> {l.name}</span>
                  <span className="">{l.descricao}</span>
                </div>
                <div className="flex justify-around">
                  <div className='flex'>{moment(l.createdAt).format('DD/MM - HH:M')}</div>
                  <div className='flex'>{hora}</div>

                  <div className='flex'>{
                    //@ts-ignore
                    calculateHoursDifference(l.createdAt.toString(), moment().format()).toFixed(2)
                  }</div>


                </div>

              </div>

              <div className="flex bg-gray-100 justify-around">
                {
                  (l.status !== Status.FAZENDO && l.status !== Status.ABERTO) && <button onClick={() => atualizarTodo({ id: l.id, status: Status.FAZENDO })}>

                    <ForwardIcon className="h-6 w-6 text-red-700 hover:text-red-600 rotate-180" />
                  </button>
                }
                {
                  l.status == Status.ABERTO && <button onClick={() => atualizarTodo({ id: l.id, status: Status.FAZENDO })}>
                    <PlayIcon className="h-6 w-6 text-red-700 hover:text-red-600" />
                  </button>
                }
                {l.status == Status.FAZENDO && <button onClick={() => atualizarTodo({ id: l.id, status: Status.PAUSADO })}>
                  <PauseIcon className="h-6 w-6 text-red-700 hover:text-red-600" />
                </button>}

                {
                  (l.status !== Status.ABERTO && l.status !== Status.CONCLUIDO) && <button onClick={() => atualizarTodo({ id: l.id, status: Status.CONCLUIDO })}>

                    <ForwardIcon className="h-6 w-6 text-red-700 hover:text-red-600" />
                  </button>
                }
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <div
                className="flex content-center items-center text-[10px] bg-gradient-to-r from-green-500 to-indigo-500 h-2.5 border-l-0 rounded-br-[0.2rem] text-right"
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
  return <RenderCard />
};

export default TodoList;
