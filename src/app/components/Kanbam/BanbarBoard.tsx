'use client'
import React, { useContext, useState } from 'react';
import Kanbam from './Kanbam';
import { List, Status } from '@/app/@types/TypesList';
import { TodoContext } from '../context/todoContext';
import TodoDetalhes from '../Todo/TodoDetalhes/TodoDetalhes';




const KanbamBoard: React.FC = () => {
    const { openFormulario, todoLista } = useContext(TodoContext)
    return (
        openFormulario ? <div className="flex flex-row gap-2 bg-blue-950 w-full min-h-screen justify-center">
            <Kanbam type={Status.ABERTO}></Kanbam>
            <Kanbam type={Status.FAZENDO}></Kanbam>
            <Kanbam type={Status.PAUSADO}></Kanbam>
            <Kanbam type={Status.CONCLUIDO}></Kanbam>
        </div>
            :
            <TodoDetalhes descricao={todoLista.descricao} name={todoLista.name} status={todoLista.status} percentual={todoLista.percentual} id={todoLista.id} />
    )
};
export default KanbamBoard;

