"use client"
import { Lista, List, TodoProps, TipoMessage } from "@/app/@types/TypesList";
import React, { useEffect, useState } from "react";
export const TodoContext = React.createContext<Lista | any>([]);
import { toast } from 'sonner';
import Message from "../message/Message";

function TodoProvider(props: { children: React.ReactNode }) {
    const [todo, setTodo] = useState<TodoProps[]>();
    const [openFormulario, setOpenFormulario] = useState<boolean>(true)
    const [todoLista, setTodoLista] = useState<List>()

    const gravar = (todo: Lista) => {
        console.log(todo)
    };
    const getTodo = (): Promise<void> => fetch('/api/todo', {
        cache: 'no-store'
    })
        .then((res) => res.json())
        .then((list: { todo: Lista[] }) => {
            setTodo(list.todo)
        })
        .catch(e => console.log(e))


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

    const atualizarTodo = async ({ id, status, descricao, name, percentual }: List) => {
        try {
            await fetch(`/api/todo/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status, descricao, name, percentual }),
            });
            setOpenFormulario(!openFormulario)
            getTodo()
            toast.custom(() => <Message messagem="Tocket Atualizado com sucesso" tipo={TipoMessage.SUCCESS} />)
        } catch (error) {

        }
    }

    const filtraById = (id: number): List =>
        //@ts-ignore
        todo?.filter(f => f.id === id)[0]
    const handleCliclkOnCard = (id: number) => {
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