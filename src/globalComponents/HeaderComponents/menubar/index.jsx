import React from 'react'
import MenubarLeftLayout from './menuLayouts/MenubarLeftLayout'
import MenubarRightLayout from './menuLayouts/MenubarRightLayout'
import Container from '../../Container'

const Menubar = () => {
  return (
    <div className='bg-orange py-6'>
        <Container>
            <div className='grid grid-cols-2 justify-between items-center'>
                <div><MenubarLeftLayout /></div>
                <div><MenubarRightLayout /></div>
            </div>
        </Container>
    </div>
  )
}

export default Menubar
