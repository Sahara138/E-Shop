import React from 'react'
import LeftProductComponents from './components/LeftProductComponents'
import RightProductComponents from './components/RightProductComponents'
import Container from '../../globalComponents/Container'
import { Helmet } from 'react-helmet-async'
import { Subscribe } from './components/Subscribe'

const Product = () => {
  return (
    <>
    <Helmet>
      <title>Product</title>
    </Helmet>
    <Container>
      <div className='grid grid-cols-[1fr_3.5fr] items-start gap-x-[26px] mt-16'>
        <LeftProductComponents />
        <RightProductComponents />
      </div>
      <Subscribe />
    </Container>
    </>
  )
}

export default Product
