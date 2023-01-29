import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className=' text-justify px-4'>
        <h2 className=' text-center font-semibold text-xl my-3'> Website Help</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iure?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum adipisci dolore voluptatibus delectus optio sed. Fuga perferendis cupiditate, aliquid ea veritatis, accusantium, recusandae consequuntur unde modi adipisci quidem rem?
        </p>

        <nav className=' mb-3 mt-6'>
            <NavLink className={ ' mr-2 bg-blue-500 px-3 py-2'} to={'faq'}>View the FAQ's</NavLink>
            <NavLink className={ ' mx-2 bg-blue-500 px-3 py-2'} to={'contact'}>Contact Us</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}
