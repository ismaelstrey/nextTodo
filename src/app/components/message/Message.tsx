import React from "react";
import iconAlert from "./icons/alert.svg";
import Image from "next/image";
type messageProps = {
  messagem: string;
  tipo: Tipo;
};
enum Tipo {
  SUCCESS = "success",
  INFO = "info",
  ALERT = "alert",
  DANGER = "danger",
}

const Message = ({ messagem, tipo }: messageProps) => {
  return (
    <div className="flex min-w-[350px] fixed top-4 bg-green-400/50 p-4 rounded-xl border-2 border-green-800 animate-[bounce_2s_ease-in-out_infinite]">
      <span className="flex flex-col w-full">
        <span>{tipo}</span>
        <strong>{messagem}</strong>
      </span>
      <Image src={iconAlert} alt="icon" height={40} />
    </div>
  );
};

export default Message;
