import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./MyNavLink.module.css"
function MyNavLink({route, onSetOpen}) {
    return (
      <NavLink onClick={() => {
        onSetOpen ? onSetOpen() : ''
      }} className={classes.link} to={route.path}>{route.name}</NavLink>
    )
}

export default MyNavLink