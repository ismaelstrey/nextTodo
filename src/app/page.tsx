
import Main from "./components/main/Main"
import KanbamBoard from "./components/Kanbam/BanbarBoard"
import NovoTodo from "./components/Todo/NovoTodo"
import Todo from "./components/Todo/Todo"
import TodoProvider from './components/context/todoContext'
export default function Home() {
  return (
    <TodoProvider>
      <Main>
        <KanbamBoard>
          <Todo />
        </KanbamBoard>
        <NovoTodo />
      </Main>
    </TodoProvider>
  )
}
