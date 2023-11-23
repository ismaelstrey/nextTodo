"use client"

import { Lista, List, Status } from "@/app/@types/TypesList";
import React, { useEffect, useState } from "react";



export const TodoContext = React.createContext<Lista | any>([]);

function TodoProvider(props: { children: React.ReactNode }) {
    const [todo, setTodo] = useState<Lista>();
    const [openFormulario, setOpenFormulario] = useState<boolean>(true)
    const [todoLista, setTodoLista] = useState<List>()




    const gravar = (todo: Lista) => {
        console.log(todo)
    };
    const getTodo = () => fetch('/api/todo', {
        cache: 'no-store'
    })
        .then((res) => res.json())
        .then((list) => {
            setTodo({ ...list })
        })


    const deleteLista = async (id: number | undefined | string) => {
        try {
            const response = await fetch(`/api/todo/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                // Faça alguma coisa após a exclusão bem-sucedida, se necessário.
                getTodo()
            } else {
                // Lidar com erros, se necessário.
            }
        } catch (error) {
            // Lidar com erros, se necessário.
        }
    };

    const novoTodo = ({ name, descricao }: List) => {
        try {
            console.log({ name, descricao })
            fetch(`/api/todo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, descricao }),
            });
        } catch (error) {
            console.log(error)
        }
    }
    interface atualizaProps {
        id: string;
        status: string;
    }
    const atualizarTodo: Lista = async ({ id, status, descricao, name, percentual }: List) => {

        try {
            console.log(id, status)
            await fetch(`/api/todo/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status, descricao, name, percentual }),
            });
            setOpenFormulario(!openFormulario)
        } catch (error) {

        }
    }

    console.log(todo?.filtra)
    const filtraById = (id: List): List => todo['todo'].filter(f => f.id === id)[0]
    const handleCliclkOnCard = (id: List) => {
        setTodoLista(filtraById(id))
        setOpenFormulario(!openFormulario)

    }



    useEffect(() => {
        getTodo()

    }, [])

    return (
        <TodoContext.Provider value={{ todo, setTodo, gravar, deleteLista, novoTodo, atualizarTodo, handleCliclkOnCard, openFormulario, todoLista }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider