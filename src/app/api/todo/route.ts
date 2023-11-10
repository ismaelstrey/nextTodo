import { NextResponse } from "next/server";
import { prisma } from "../../../../services/prisma";

export async function GET(request: Request) {
    const todo = await prisma.todo.findMany({
        select: {
            id: true,
            name: true,
            descricao: true,
            status: true,
            percentual: true,
            createdAt: true,
            updatedAt: true
        }
    })
    return NextResponse.json({ todo })
}

export async function POST(req: Request) {

    const data = await req.json()
    if (data.name === ' ' && data.descricao === '') {
        console.log("vazio")
        throw new Error(" Campos obrigatórios")
    }
    const todo = await prisma.todo.create({
        data
    })
    return NextResponse.json({ todo })
}

