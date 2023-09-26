"use client"
import { useState, useEffect } from 'react'
import NovoTodo from "./components/NovoTodo"
import Todo from "./components/Todo"
import { Lista } from '@/types/todos'



export default function Home() { 
  const [data, setData] = useState<Lista>()
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/api/todo')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Todo todo={data.todo} />
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
