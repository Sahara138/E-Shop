import React from 'react'
import Container from '../../container'
import { Logo } from '../../../assets/svg/logo'
import SearchWithAuth from './SearchWithAuth'

const Navbar = () => {
  return (
    <>
    <Container>
        <div className='flex items-center justify-between py-[24px]'>
            <div><Logo /></div>
            <div><SearchWithAuth /></div>
        </div>
    </Container>
    </>
  )
}

export default Navbar
