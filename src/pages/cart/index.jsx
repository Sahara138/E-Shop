import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../../globalComponents/Container';
import CartBody from './components/CartBody';

const Cart = () => {
  const {pathname} = useLocation();
  const pageName = pathname.split("/").slice(1)[0];
  return (
    <>
    <Container>
      <div>
        <h1 className='font-montserrat text-[16px] text-black01 mt-16 mb-12'>
          <Link to="/">Home</Link> | <span className='font-bold capitalize '>{pageName}</span>
        </h1>
        <h2 className='font-poppins font-bold text-[56px] text-black01'>
          Your Cart
        </h2>
        <div className='mt-7'>
          <CartBody />
        </div>
      </div>
    </Container>
    </>
  )
}

export default Cart
