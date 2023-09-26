export type List = {
    id?:string
    name: string;
    description: string;
    createdAt?:Date;
    updatedAt?:Date;
}
export type Lista = {
    todo: List[];
}