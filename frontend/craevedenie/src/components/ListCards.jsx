import React from 'react'
import Card from './UI/Card/Card'
import CardCategory from './CardCategory'
import Wrapper from './UI/Wrapper/Wrapper'
import SectionTitle from './UI/SectionTitle/SectionTitle'

function ListCards({cards}) {
  return (
    <Wrapper className={'max-w-5xl'}>
      <SectionTitle>#Наши Секции</SectionTitle>
      <div className='flex flex-col gap-16'>
      {
        cards.map(card => <CardCategory key={card.url} url={card.url} image={card.image} title={card.title} description={card.description}/>)
      }
      </div>
    </Wrapper>
  )
}

export default ListCards