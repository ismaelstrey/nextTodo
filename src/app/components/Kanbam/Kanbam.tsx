'use client'
import React, { useState, DragEvent } from 'react';

interface Task {
    id: number;
    text: string;
}

interface TaskList {
    todo: Task[];
    inProgress: Task[];
    done: Task[];
}

const KanbanBoard: React.FC = () => {
    const [tasks, setTasks] = useState<TaskList>({
        todo: [
            { id: 1, text: 'Tarefa 1' },
            { id: 2, text: 'Tarefa 2' },
        ],
        inProgress: [
            { id: 3, text: 'Tarefa 3' },
            { id: 4, text: 'Tarefa 4' },
        ],
        done: [
            { id: 5, text: 'Tarefa 5' },
            { id: 6, text: 'Tarefa 6' },
        ],
    });

    const handleDragStart = (e: DragEvent<HTMLDivElement>, taskId: number) =>
        e.dataTransfer.setData('text/plain', taskId.toString());


    const handleDrop = (e: DragEvent<HTMLDivElement>, targetColumn: string) => {
        e.preventDefault();
        const taskId = parseInt(e.dataTransfer.getData('text/plain'), 10);
        const updatedTasks: TaskList = { ...tasks };
        const taskToMove = null; // Encontre a tarefa com base no ID

        // Mova a tarefa para a coluna de destino
        // updatedTasks[targetColumn] = [...updatedTasks[targetColumn], taskToMove];
        // const teste = [...updatedTasks[targetColumn], taskToMove];
        // Remova a tarefa da coluna de origem
        console.log(targetColumn)
        console.log(taskId)
        updatedTasks['todo'] = updatedTasks['inProgress'].filter(
            task => task.id !== taskId
        );

        setTasks(updatedTasks);
    };

    const allowDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className="flex">
            <div
                className="flex flex-col w-80"
                onDrop={e => handleDrop(e, 'todo')}
                onDragOver={allowDrop}
            >
                <h2 className='flex h-10'>A Fazer</h2>
                {tasks.todo.map(task => (
                    <div
                        key={task.id}
                        draggable
                        onDragStart={e => handleDragStart(e, task.id)}
                    >
                        {task.text}
                    </div>
                ))}
            </div>

            <div
                className="flex flex-col w-80"
                onDrop={e => handleDrop(e, 'inProgress')}
                onDragOver={allowDrop}
            >
                <h2 className='flex h-10'>Em Progresso</h2>
                {tasks.inProgress.map(task => (
                    <div
                        key={task.id}
                        draggable
                        onDragStart={e => handleDragStart(e, task.id)}
                    >
                        {task.text}
                    </div>
                ))}
            </div>

            <div
                className="flex flex-col w-80"
                onDrop={e => handleDrop(e, 'done')}
                onDragOver={allowDrop}
            >
                <h2 className='flex h-10'>Concluído</h2>
                {tasks.done.map(task => (
                    <div
                        key={task.id}
                        draggable
                        onDragStart={e => handleDragStart(e, task.id)}
                    >
                        {task.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanBoard;
