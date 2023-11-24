
import Main from "./components/main/Main"
import KanbamBoard from "./components/Kanbam/BanbarBoard"
import NovoTodo from "./components/Todo/NovoTodo"
import TodoProvider from './components/context/todoContext'
export default function Home() {
  return (
    <TodoProvider>
      <Main>
        <KanbamBoard />
        <NovoTodo />
      </Main>
    </TodoProvider>
  )
}
