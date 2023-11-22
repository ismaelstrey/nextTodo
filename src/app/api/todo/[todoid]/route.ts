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
  try {
    const idTodo = Number(params.todoid)
    const body = await req.json()
    console.log(body)
    const result = await prisma.todo.update({
      where: {
        id: idTodo,
      },
      data: body,
    })
    // console.log(result)
    return NextResponse.json({ result })
  } catch (error: any) {
    if (error.code === "P2025") {
      let error_response = {
        status: "fail",
        message: "No Feedback with the Provided ID Found",
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}