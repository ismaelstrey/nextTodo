'use client'
import { useState, useEffect } from 'react'
import NovoTodo from "./components/Todo/NovoTodo"
import Todo from "./components/Todo/Todo"
import { Lista } from '@/types/todos'



export default function Home() {
  const [data, setData] = useState<Lista>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/todo', {
      cache: 'no-store'
    })
      .then((res) => res.json())
      .then((list) => {
        setData(list)

        setLoading(false)
      })

  }, [])
  // data ? console.log(data ) : ''

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row gap-2">
        {data ? <Todo todo={data.todo} /> : ''}
        {data ? <Todo todo={data.todo} /> : ''}
        {data ? <Todo todo={data.todo} /> : ''}
        {data ? <Todo todo={data.todo} /> : ''}
      </div>
      <NovoTodo />
    </main>
  )
}

// export async function getStaticProps(){

//   const data = await fetch(`http://localhost:3000/api/todo`, {
//     cache: "no-store",
//   })
//   return {
//     props:{
//       data,
//     }
//   }
// }
