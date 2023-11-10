

import NovoTodo from "./components/Todo/NovoTodo"
import Todo from "./components/Todo/Todo"
import TodoProvider from './components/context/todoContext'



export default function Home() {




  return (
    <TodoProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-row gap-2">
          <Todo />
        </div>
        <NovoTodo />
      </main>
    </TodoProvider>
  )
}
