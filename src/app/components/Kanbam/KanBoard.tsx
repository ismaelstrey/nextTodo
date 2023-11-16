'use client'
import React, { useState } from 'react';

type KanbanBoard = {
    [key: string]: string[];
};

type Task = {
    title: string;
    description: string;
};

const KanbanComponent: React.FC = () => {
    const [kanban, setKanban] = useState<KanbanBoard>({
        'A fazer': [],
        'Em andamento': [],
        'Concluído': [],
    });

    const adicionarTarefa = (column: string, task: Task) => {
        setKanban(prevKanban => {
            // Verificar se a coluna existe no quadro
            if (!(column in prevKanban)) {
                console.error(`Coluna "${column}" não encontrada no quadro.`);
                return prevKanban;
            }

            // Adicionar a tarefa à coluna especificada
            const updatedKanban = { ...prevKanban };
            updatedKanban[column] = [...prevKanban[column], task.title];

            console.log(`Tarefa "${task.title}" adicionada à coluna "${column}".`);
            return updatedKanban;
        });
    };

    const handleAddTask = () => {
        const newTask: Task = {
            title: 'Nova Tarefa',
            description: 'Descrição da nova tarefa',
        };
        adicionarTarefa('A fazer', newTask);
    };

    return (
        <div>
            <h1>Quadro Kanban</h1>
            {Object.keys(kanban).map(column => (
                <div key={column}>
                    <h2>{column}</h2>
                    <ul>
                        {kanban[column].map(task => (
                            <li key={task}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
        </div>
    );
};

export default KanbanComponent;
