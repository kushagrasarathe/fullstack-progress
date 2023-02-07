import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div>
        <h1>Careers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae distinctio suscipit corporis modi, temporibus facilis deserunt alias nisi atque inventore eveniet quasi dolor amet, neque ex ut quibusdam ducimus.</p>
      <Outlet/>
    </div>
  )
}
