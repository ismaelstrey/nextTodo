export const color = (cor:string) => {
    switch (cor) {
      case 'ATIVO': return 'bg-green-500'                
        break;
      case 'FAZENDO': return 'bg-blue-500'                
        break;
      case 'PAUSADO': return 'bg-gray-500'                
        break;
      case 'CANCELADO': return 'bg-red-500'                
        break;
    
      default:
        break;
    }
  }