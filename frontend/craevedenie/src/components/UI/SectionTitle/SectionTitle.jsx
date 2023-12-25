import React from 'react'

function SectionTitle({children, className}) {
  return (
    <h2 className={'relative text-3xl md:text-5xl font mb-10 text-blue underline decoration-2 ' + className}>{children}</h2>
  )
}

export default SectionTitle