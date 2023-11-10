"use client"

import { Lista, List } from "@/app/@types/TypesList";
import React, { useEffect, useState } from "react";



export const TodoContext = React.createContext<Lista | any>([]);

function TodoProvider(props: { children: React.ReactNode }) {
    const [todo, setTodo] = useState<List>();




    const gravar = (todo: Lista) => {
        console.log(todo)
    };
    const getTodo = () => fetch('/api/todo', {
        cache: 'no-store'
    })
        .then((res) => res.json())
        .then((list) => {
            setTodo(list)
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
        console.log({ name, descricao })
        fetch(`/api/todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, descricao }),
        });
    }



    useEffect(() => {
        getTodo()

    }, [todo])

    return (
        <TodoContext.Provider value={{ todo, setTodo, gravar, deleteLista, novoTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider