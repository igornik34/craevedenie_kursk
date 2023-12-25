import React from 'react'
import Card from './UI/Card/Card'
import { Link } from 'react-router-dom'

function CardCategory({image, title, description, url}) {
  return (
    <Card className={'relative mx-auto'}>
        <Link to={url} className='flex gap-x-10 max-sm:flex-col'>
            <div className='sm:w-1/3 w-full relative'>
                <img className='w-full rounded-tl-[80px] sm:rounded-bl-[80px] max-sm:rounded-tr-[80px] max-h[200px] aspect-[2/1.5] sm:h-full' src={image} alt="" />
            </div>
            <div className='sm:w-2/3 max-sm:text-center flex flex-col max-sm:pl-4 w-full pt-4 pr-4 pb-4'>
                <p className='text-4xl font-bold'>{title}</p>
                <p className='md:text-3xl text-xl mt-4'>{description}</p>
            </div>
        </Link>
    </Card>
  )
}

export default CardCategory