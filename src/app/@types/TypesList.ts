

export type List = {
    id?: string
    name: string;
    descricao: string;
    percentual?: number;
    status: Status;
    createdAt?: string;
    updatedAt?: string;

}
type FilterProps = {
    filter: () => List;
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
    todo?: List[];
    dataList: List;
    setDataList: () => void;
    novoTodo?: () => List;
    type?: Status;
    filtra?: () => List[];
    atualizarTodo?:  () => List;
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