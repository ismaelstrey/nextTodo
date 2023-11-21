import { NextResponse } from "next/server"
import { prisma } from "../../../../../services/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }) {
  console.log("Chegou aqui get")
  const id = params.id
  return NextResponse.json({ id })
}


export async function DELETE(
  request: Request,
  { params }: { params: { todoid: number } }) {

  const idTodo = Number(params.todoid)


  const deletTodo = await prisma.todo.delete({
    where: {
      id: idTodo,
    },
  })
  return NextResponse.json({ deletTodo })


}
export async function PATCH(req: Request, { params }: { params: { todoid: number } }) {
  const idTodo = Number(params.todoid)
  const body = await req.json()
  const result = await prisma.todo.update({
    where: {
      id: idTodo,
    },
    data: body,
  })
  console.log(result)
  return NextResponse.json({ result })
}