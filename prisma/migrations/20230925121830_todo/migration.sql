-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ATIVO', 'DESATIVADO', 'FAZENDO', 'PAUSADO', 'CANCELADO', 'ABERTO');

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descricao" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ABERTO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
