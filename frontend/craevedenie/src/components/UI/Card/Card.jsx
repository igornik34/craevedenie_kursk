import React from 'react'

function Card({children, className}) {
  const classes = 'bg-slate-400 rounded-[80px] duration-300 hover:shadow-2xl ' + className
  return (
    <div className={classes}>
        {children}
    </div>
  )
}

export default Card