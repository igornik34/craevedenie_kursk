import React from 'react'
import QrcodeImg from '../images/qrcode.svg'
import Wrapper from '../components/UI/Wrapper/Wrapper'
import Card from '../components/UI/Card/Card'

function Qrcode() {
  return (
    <Wrapper className={'min-h-[100vh] pt-28 flex items-center justify-center'}>
        <Card className='max-w-xl mx-auto p-7'>
            <h1 className='text-center text-5xl mb-5'>заходи, не стесняйся :)</h1>
            <div className='max-w-md mx-auto'>
                <img src={QrcodeImg} alt="" className='w-full h-auto' />
            </div>
        </Card>
    </Wrapper>
  )
}

export default Qrcode