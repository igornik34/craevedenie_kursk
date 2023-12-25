import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
function MyNavLink({route, onSetOpen}) {
    return (
      <NavLink onClick={() => {
        onSetOpen ? onSetOpen() : ''
      }} className='text-white duration-300 underline decoration-transparent hover:decoration-white' to={route.path}>{route.name}</NavLink>
    )
}

export default MyNavLink