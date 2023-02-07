import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {

    const { id } = useParams()
    const career = useLoaderData()

    return (
        <div className=' mt-10 bg-purple-900 py-8 px-10 rounded-md bg-opacity-25'>
            <h1 className=' text-2xl font-semibold '>Carrer Details for {career.title}</h1>
            <p className=' mt-3'>Starting Salary: {career.salary}</p>
            <p className=' mt-3'>Location: {career.location}</p>
            <div className=' mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis, neque molestias ab nobis atque nam, repudiandae impedit illo, temporibus qui. Consequuntur repudiandae totam necessitatibus.</div>
        </div>
    )
}


export const carrerDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/careers/' + id)
    return res.json()
}   