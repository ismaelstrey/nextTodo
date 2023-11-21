export type List = {
    id?: string
    name: string;
    descricao: string;
    percentual?: number;
    status?: Status;
    createdAt: string;
    updatedAt?: string;
}
export type Lista = {
    todo?: List[];
    novoTodo?: () => List;
    type?: Status | string;
    filtra?: () => List[];
}
export enum Status {
    ATIVO,
    DESATIVADO,
    FAZENDO,
    PAUSADO,
    CANCELADO,
    ABERTO,
    CONCLUIDO

}