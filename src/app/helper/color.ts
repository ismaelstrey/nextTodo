export const color = (cor: string) => {
  switch (cor) {
    case 'ABERTO': return 'bg-green-500'
      break;
    case 'FAZENDO': return 'bg-blue-500'
      break;
    case 'PAUSADO': return 'bg-indigo-500'
      break;
    case 'CANCELADO': return 'bg-red-500'
      break;
    case 'CONCLUIDO': return 'bg-purple-500'
      break;

    default:
      break;
  }
}
export const colorCard = (cor: string) => {
  switch (cor) {
    case 'ABERTO': return 'bg-green-100'
      break;
    case 'FAZENDO': return 'bg-blue-100'
      break;
    case 'PAUSADO': return 'bg-indigo-100'
      break;
    case 'CANCELADO': return 'bg-red-100'
      break;
    case 'CONCLUIDO': return 'bg-purple-100'
      break;

    default:
      break;
  }
}