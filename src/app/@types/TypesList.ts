export type List = {
    id?: string
    name: string;
    descricao: string;
    percentual?: number;
    status?:Status;
    createdAt: string;
    updatedAt?: string;
}
export type Lista = {
    todo: List[];
    novoTodo?: () => List;
}
enum Status {
    ATIVO,
    DESATIVADO,
    FAZENDO,
    PAUSADO,
    CANCELADO,
    ABERTO
  }