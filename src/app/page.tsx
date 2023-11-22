
import Main from "./components/main/Main"
import KanbamBoard from "./components/Kanbam/BanbarBoard"
import NovoTodo from "./components/Todo/NovoTodo"
import Todo from "./components/Todo/Todo"
import TodoProvider from './components/context/todoContext'
import TodoDetalhes from "./components/Todo/TodoDetalhes/TodoDetalhes"
import { Status } from "./@types/TypesList"
export default function Home() {
  return (
    <TodoProvider>
      <Main>
        {/* <TodoDetalhes descricao="Limpar casa" name="Limpar" status={Status.ABERTO} id="36" percentual={80} updatedAt="2023-11-22" createdAt="2023-11-22" /> */}
        <KanbamBoard />
        <NovoTodo />
      </Main>
    </TodoProvider>
  )
}
