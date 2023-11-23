

export type List = {
    id: string
    name: string;
    descricao: string;
    percentual: number;
    status: Status;
    createdAt?: string;
    updatedAt?: string;
}

export type todoUpdate = {
    id?: string
    todoName: string;
    todoDescricao: string;
    todoPercentual: number;
    todoStatus: Status;
    todoCreatedAt?: string;
    TdodoUpdatedAt?: string;
}
export type Lista = {
    todo: List[];
    dataList: List;
    setDataList: () => void;
    novoTodo?: () => List;
    type: Status;
    atualizarTodo: () => void;
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


export type todoListProps = {
    todo: List[];
    type: Status;
}
export type TodoProps = {
    todo: List[];
}
export type todoTypesProps = {
    type: Status;
}