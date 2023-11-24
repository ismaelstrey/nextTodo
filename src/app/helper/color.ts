import { Status } from "../@types/TypesList";

export const color = (cor: Status) => {
  switch (cor) {
    case Status.ABERTO: return 'bg-green-500'
      break;
    case Status.FAZENDO: return 'bg-blue-500'
      break;
    case Status.PAUSADO: return 'bg-indigo-500'
      break;
    case Status.CANCELADO: return 'bg-red-500'
      break;
    case Status.CONCLUIDO: return 'bg-purple-500'
      break;

    default:
      break;
  }
}
export const colorCard = (cor: Status) => {
  switch (cor) {
    case Status.ABERTO: return 'bg-green-100'
      break;
    case Status.FAZENDO: return 'bg-blue-100'
      break;
    case Status.PAUSADO: return 'bg-indigo-100'
      break;
    case Status.CANCELADO: return 'bg-red-100'
      break;
    case Status.CONCLUIDO: return 'bg-purple-100'
      break;

    default:
      break;
  }
}