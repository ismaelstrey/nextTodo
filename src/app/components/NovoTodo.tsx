"use client"
import React, { useState } from 'react'


const NovoTodo = () => {

    const [name, setName] = useState('')
    const [descricao, setDescricao] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, descricao }),
            });

            if (response.ok) {
                console.log('Todo criado com sucesso!');
                // Você pode redirecionar ou realizar outra ação após a criação bem-sucedida.
            } else {
                console.error('Ocorreu um erro ao criar o Todo.');
            }
        } catch (error) {
            console.error('Ocorreu um erro ao criar o Todo:', error);
        }
    }
    return (

        <div className='flex w-screen h-full flex-col bg-lime-600'>
            <h3>Nome: {name}</h3>
            <h3>Descrição: {descricao}</h3>
            <form onSubmit={(e) => handleSubmit(e)} className=' flex w-screen flex-col gap-8 p-9'>
                <input type="text" value={name} name="name" id="" className='h-16' onChange={(e) => setName(e.target.value)} />
                <textarea name='descricao' rows={5} onChange={(e) => setDescricao(e.target.value)} ></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default NovoTodo
