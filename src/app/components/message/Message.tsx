'use client'
import { Toaster, toast } from 'sonner'
import { TipoMessageProps } from "@/app/@types/TypesList";
const Message = ({ messagem, tipo }: TipoMessageProps) => <div>
  {toast.success(<div>{messagem}<span>{tipo}</span></div>)}
  <Toaster richColors />
</div>

export default Message;
