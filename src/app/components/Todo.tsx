import React from 'react'
type List = {
    name: string;
    description: string;
}
type Lista = {
    todo: List[];

}

const Todo = ({ todo }: Lista) => {
    const RenderLista = () => todo.map((lista => <div>{lista.name}</div>))
    return (
        <div>
            <div>Todo</div>
            <RenderLista />
        </div>
    )
}

export default Todo