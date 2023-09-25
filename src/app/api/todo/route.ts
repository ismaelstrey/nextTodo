import { NextResponse } from "next/server";
import { prisma } from "../../../../services/prisma";

export async function GET(request: Request) {
    const todo = await prisma.todo.findMany({
        select: {
            name: true,
            descricao: true,
            status: true
        }
    })
    return NextResponse.json({ todo })
}

export async function POST(req: Request) {
    const data = await req.json()
    const todo = await prisma.todo.create({
        data
    })
    return NextResponse.json({ todo })
}