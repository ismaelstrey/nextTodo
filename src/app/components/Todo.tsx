import React from 'react'
type List = {
    id?:string
    name: string;
    description: string;
}
type Lista = {
    todo: List[];
}

const Todo = ({ todo }: Lista) => {
    const RenderLista = () => todo.map((lista => <div key={lista.id}>{lista.name}</div>))
    return (
        <div>
            <div>Todo</div>
            <RenderLista />
        </div>
    )
}

export default Todo