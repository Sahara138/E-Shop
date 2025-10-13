import React from 'react'
import Topbar from './topbar'
import Navbar from './navbar'
import Menubar from './menubar'
import MobileNavber from './mobileNavber'


const HeaderComponents = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <Topbar />
        <Navbar />
        <Menubar />
      </div>
      <div className='lg:hidden'>
        <MobileNavber />
      </div>
    </>
  )
}

export default HeaderComponents
