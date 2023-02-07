import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

export default function Careers() {
    const carrers = useLoaderData()


  return (
    <div>
      {carrers.map( carrer => (
        <Link  to={carrer.id.toString()} key={carrer.id}>
            <div className=' mt-5 w-full bg-purple-900 bg-opacity-25 py-4 px-6 ' >

            <p className=' hover:text-purple-300 underline'>{carrer.title}</p>
            <p>Based in: {carrer.location}</p>
            </div>
        </Link>
      ))}
    </div>
  )
}


// loader function 
export const carrersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')
    return res.json()
}