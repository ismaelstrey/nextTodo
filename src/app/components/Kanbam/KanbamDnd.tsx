'use client'
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

type Task = {
    id: number;
    title: string;
    description: string;
    column: string;
};

type KanbanBoard = {
    [key: string]: Task[];
};

const TaskItem: React.FC<{
    task: Task;
    index: number;
    columnIndex: string;
    moveTask: (fromColumn: string, fromIndex: number, toColumn: string, toIndex: number) => void;
}> = ({ task, index, columnIndex, moveTask }) => {
    const [, ref] = useDrag({
        type: 'TASK',
        item: { type: 'TASK', columnIndex, index },
    });

    const [, drop] = useDrop({
        accept: 'TASK',
        hover: (item: { type: string; columnIndex: string; index: number }) => {
            if (item.columnIndex !== columnIndex) {
                const fromIndex = item.index;
                const toIndex = index;
                const fromColumn = item.columnIndex;
                const toColumn = columnIndex;
                console.log(fromColumn)
                console.log(fromIndex)
                console.log(toColumn)

                // Permitir movimento entre colunas
                if (Math.abs(fromIndex - toIndex) === 1 && fromColumn === toColumn) {
                    moveTask(fromColumn, fromIndex, toColumn, toIndex);
                    item.columnIndex = toColumn;
                    item.index = toIndex;
                }
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px' }}>
            {task.title}

        </div>
    );
};

const KanbanWithDnD: React.FC = () => {
    const [kanban, setKanban] = useState<KanbanBoard>({
        'aberto': [
            { id: 1, title: 'Tarefa 1', description: 'Descrição da Tarefa 1', column: 'aberto' },
            { id: 2, title: 'Tarefa 2', description: 'Descrição da Tarefa 2', column: 'aberto' },
        ],
        'fazendo': [
            { id: 3, title: 'Tarefa 3', description: 'Descrição da Tarefa 1', column: 'fazendo' },
            { id: 4, title: 'Tarefa 4', description: 'Descrição da Tarefa 2', column: 'fazendo' },
        ],
        'concluido': [
            { id: 5, title: 'Tarefa 5', description: 'Descrição da Tarefa 1', column: 'fazendo' },
            { id: 6, title: 'Tarefa 6', description: 'Descrição da Tarefa 2', column: 'concluido' },
        ],
    });

    const moveTask = (fromColumn: string, fromIndex: number, toColumn: string, toIndex: number) => {
        const updatedKanban = { ...kanban };
        const [movedTask] = updatedKanban[fromColumn].splice(fromIndex, 1);
        movedTask.column = toColumn;
        updatedKanban[toColumn].splice(toIndex, 0, movedTask);
        setKanban(updatedKanban);
    };
    const filtraAberto = (item: string) => kanban[item].filter(f => f.column === item)
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                {Object.keys(kanban).map((column) => (
                    <div key={column} style={{ width: '200px', float: 'left', marginRight: '20px' }}>
                        <h2>{column}</h2>
                        <div>


                            {kanban[column].map((task, index) => (
                                <TaskItem key={task.id} task={task} index={index} columnIndex={column} moveTask={moveTask} />
                            ))}
                        </div>
                        <div>
                            {filtraAberto(column).map(lista => <div key={lista.id}>{lista.title}</div>)}
                        </div>
                    </div>
                ))}
            </div>
        </DndProvider>
    );
};

export default KanbanWithDnD;

