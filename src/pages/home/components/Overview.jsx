import React from 'react'
import overviewImage1 from "../../../assets/images/overview-1.png"
import overviewImage2 from "../../../assets/images/overview-2.png"

const Overview = () => {
  return (
    <section className='mt-20'>
      <div className='grid grid-cols-[auto_auto] gap-x'>
        <img src={overviewImage1} alt="Overview Image" className='object-cover' />
        <img src={overviewImage2} alt="Overview Image" className='object-cover' />
      </div>
    </section>
  )
}

export default Overview
