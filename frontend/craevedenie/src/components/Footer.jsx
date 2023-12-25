import React from 'react'

function Footer() {
  return (
    <div className='bg-[#222] py-14'>
        <div className='max-w-4xl text-white flex items-center justify-between uppercase mx-auto text-center'>
            <div>
                <p>Пономарев С.П.</p>
                <p><i>Контент-Менеджер</i></p>
            </div>
            <div>
                <p>Никитин И.А.</p>
                <p><i>Разработчик</i></p>
            </div>
            <div>
                <p>Шмалюк Н.М.</p>
                <p><i>Аналитик данных</i></p>
            </div>
        </div>
    </div>
  )
}

export default Footer