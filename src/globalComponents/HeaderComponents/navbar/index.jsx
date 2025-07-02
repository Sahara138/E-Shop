import React from 'react'
import Container from '../../container'
import { Logo } from '../../../assets/svg/logo'
import SearchWithAuth from './SearchWithAuth'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Container>
        <div className='flex items-center justify-between py-[24px]'>
            <Link to="/"><Logo /></Link>
            <div><SearchWithAuth /></div>
        </div>
    </Container>
    </>
  )
}

export default Navbar
