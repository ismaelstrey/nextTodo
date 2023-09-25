import NovoTodo from "./components/NovoTodo"
import Todo from "./components/Todo"

const getTodo = async () => {

  const data = await fetch(`http://localhost:3000/api/todo`, {
    cache: "force-cache",
  })
  return data.json()
}

export default async function Home() {

  const data = await getTodo()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Todo todo={data.todo} />
      <NovoTodo />
    </main>
  )
}
