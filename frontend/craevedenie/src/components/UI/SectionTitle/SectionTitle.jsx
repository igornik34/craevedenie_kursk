import React from 'react'
import classes from "./SectionTitle.module.css"

function SectionTitle({children, className}) {
  return (
    <h2 className={`${classes.title} ${className}`}>{children}</h2>
  )
}

export default SectionTitle