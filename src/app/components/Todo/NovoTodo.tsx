"use client"
import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/todoContext'
const NovoTodo = () => {

    const [name, setName] = useState('')
    const [mostar, setMostar] = useState(false)
    const [descricao, setDescricao] = useState('')
    const { novoTodo } = useContext(TodoContext)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        novoTodo({ name, descricao })
        setMostar(false)

    }

    return (
        <div>
            {mostar && <div className={`flex w-screen h-full flex-col bg-lime-600 fixed left-0 top-0`}>

                <form onSubmit={(e) => handleSubmit(e)} className=' flex w-screen flex-col gap-8 p-9'>
                    <input type="text" value={name} name="name" id="" className='h-16' onChange={(e) => setName(e.target.value)} />
                    <textarea name='descricao' rows={5} onChange={(e) => setDescricao(e.target.value)} ></textarea>
                    <input type="submit" value="Enviar" className='bg-white hover:bg-slate-300 cursor-pointer' />
                </form>
                {name && <h3>Nome: {name}</h3>}
                {descricao && <h3>Descrição: {descricao}</h3>}
            </div>}
           
            <span className='fixed bottom-2 right-2 bg-slate-950 text-white rounded-full w-20 h-20 flex justify-center hover:bg-slate-900 hover:border-solid hover:border-yellow-300 hover:border-8' onClick={() => setMostar(!mostar)}><button>Mostrar</button></span>
        </div>
    )
}
export default NovoTodo