export type List = {
    id?: string
    name: string;
    descricao: string;
    percentual?: number;
    status: Status;
    createdAt: string;
    updatedAt?: string;
}
export type Lista = {
    todo?: List[];
    novoTodo?: () => List;
    type?: Status;
    filtra?: () => List[];
}
export enum Status {
    ATIVO = "ATIVO",
    DESATIVADO = "DESATIVADO",
    FAZENDO = "FAZENDO",
    PAUSADO = "PAUSADO",
    CANCELADO = "CANCELADO",
    ABERTO = "ABERTO",
    CONCLUIDO = "CONCLUIDO"

}