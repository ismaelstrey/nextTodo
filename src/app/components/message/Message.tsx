'use client'
import { TipoMessageProps } from "@/app/@types/TypesList";
const Message = ({ messagem, tipo }: TipoMessageProps) =>
  <div className="flex rounded-lg bg-white/80 border-2 border-green-700 min-h-[60px] min-w-[600px] justify-center items-center ">
    <strong className="text-green-500">
      {tipo}
    </strong>
    <br />
    <span>
      {messagem}
    </span>

  </div>

export default Message;
