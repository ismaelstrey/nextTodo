export type List = {
    id?: string
    name: string;
    descricao: string;
    percentual?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export type Lista = {
    todo: List[];
    novoTodo?: () => List;
}