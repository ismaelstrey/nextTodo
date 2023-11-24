'use client'
import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import { List, Status } from "@/app/@types/TypesList";


const TodoDetalhes = ({ name, descricao, status, id, percentual, createdAt, updatedAt }: List) => {
    const { atualizarTodo } = useContext(TodoContext)
    const [todoName, setTodoName] = useState<string>(name)
    const [todoDescricao, setTodoDescricao] = useState<string>(descricao)
    const [todoStatus, setTodoStatus] = useState<Status>(status)
    const [todoPercentual, setTodoPercentual] = useState<number>(Number(percentual))
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>): any => e.target.value

    const data: List = { "id": id, "name": todoName, "descricao": todoDescricao, "status": todoStatus, "percentual": Number(todoPercentual), }
    const atualiza = (data: List) => atualizarTodo(data)
    return (
        <div className="flex w-screen h-screen justify-center items-center content-center justify-items-center flex-col bg-black/90">
            <div className="flex h-[80%] rounded-lg flex-col w-3/4 justify-center items-center content-center justify-items-center bg-black shadow-xl shadow-amber-500 stroke-fuchsia-300 hover:shadow-green-500 translate-x-5">
                <div className="flex w-3/4 rounded-md flex-col gap-2 ">
                    <input type="text" name="id" defaultValue={id} disabled />
                    <input type="text" name="nome" defaultValue={todoName} onChange={(e) => setTodoName(handleOnchange(e))} />
                    <textarea name="descricao" defaultValue={descricao} onChange={(e) => setTodoDescricao(handleOnchange(e))}></textarea>
                    <div className="flex flex-row ">
                        <span className="flex flex-col w-60">
                            <label htmlFor="status">Status</label>
                            <select id="status" className="b-1" onChange={(e) => setTodoStatus(handleOnchange(e))}>
                                <option value={Status[status]} defaultValue={Status[status]}>{Status[status]}</option>
                                {Status[status] !== Status.ABERTO && <option value={Status.ABERTO}>{Status.ABERTO}</option>}
                                {Status[status] !== Status.CONCLUIDO && <option value={Status.CONCLUIDO}>{Status.CONCLUIDO}</option>}
                                {Status[status] !== Status.FAZENDO && <option value={Status.FAZENDO}>{Status.FAZENDO}</option>}
                                {Status[status] !== Status.PAUSADO && <option value={Status.PAUSADO}>{Status.PAUSADO}</option>}
                                {Status[status] !== Status.CANCELADO && <option value={Status.CANCELADO}>{Status.CANCELADO}</option>}
                            </select>
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="createdAt">Data de criação</label>
                            <input id="createdAt" type="date" disabled defaultValue={createdAt} />
                        </span>
                        <span className="flex flex-col">
                            <label htmlFor="updatedAt">Data de atualização</label>
                            <input id="updatedAt" type="date" disabled defaultValue={updatedAt} />
                        </span>
                    </div>
                    <input type="range" id="percentual" name="percentual" defaultValue={percentual} onChange={(e) => setTodoPercentual(handleOnchange(e))} />
                </div>
                <div className="flex w-3/4 justify-end items-end mt-10 mr-10">
                    <button onClick={() => atualiza(data)} className="flex rounded-md text-center items-center justify-center w-60 h-10 bg-blue-500 text-white" type="button">Atualizar</button>
                </div>
            </div>
        </div>
    );
};

export default TodoDetalhes;
