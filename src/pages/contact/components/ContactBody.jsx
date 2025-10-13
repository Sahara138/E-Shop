import React from 'react'
import ContactForm from './ContactForm'
import { Link, useLocation } from 'react-router-dom'

const ContactBody = () => {
    const {pathname} = useLocation();
    const pageName = pathname.split("/").slice(1)[0];
    console.log(pageName)
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-x-5'>
        <div>
            <h1 className='font-montserrat text-[16px] text-black01 my-[64px]'>
            <Link to="/">Home</Link> | <span className='font-bold capitalize '>{pageName}</span></h1>
            <div><ContactForm /></div>
        </div>
        <div>contact</div>
    </div>
  )
}

export default ContactBody