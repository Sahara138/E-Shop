import React from 'react'
import Header from '../../globalComponents/commonLayout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../globalComponents/commonLayout/Footer'


const RootLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default RootLayout
