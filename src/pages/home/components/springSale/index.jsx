import React from 'react'
import SpringLeft from './SpringLeft'
import SpringRight from './SpringRight'
import Container from '../../../../globalComponents/Container'

const SpringSale = () => {
  return (
    <section className='bg-white02 py-16 px-4 mt-20'>
        <Container>
            <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-5 w-full'>
                <div className='w-full md:w-[60%] 2xl:w-[35%]'>
                    <SpringLeft />
                </div>
                <div className='w-full md:w-[100%] lg:w-[47%] 2xl:w-[65%]'>
                    <SpringRight />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default SpringSale
