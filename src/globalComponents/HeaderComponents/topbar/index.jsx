import React from 'react'
import Container from '../../container'
import NumberAndAddress from './NumberAndAddress'
import SocialswithLang from './SocialswithLang'

const Topbar = () => {
  return (
    <>
    <div className='border-b-2 border-black100 py-[22px]'>
      <Container>
        <div className='grid grid-cols-2 justify-between'>
          <div>
            <NumberAndAddress />
          </div>
          <div>
            <SocialswithLang />
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Topbar
