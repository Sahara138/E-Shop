import React from 'react'
import { SupportData } from './supportData'

const SupportSection = () => {
  return (
    <section className='flex items-center justify-between mt-10 lg:mt-20'>
        {
            SupportData?.slice(0,4).map((item, index) =>{ 
                const Icon = item?.icon;
                return(
                <div key={index} className='flex flex-wrap items-center gap-x-6'>
                    <span className='text-black01' >
                        <Icon />
                    </span>
                    <div>
                        <h5 className='font-montserrat font-bold text-sm md:text-base leading-[24px] text-black01'>{item?.title}</h5>
                        <p className='font-montserrat font-normal text-xs md:text-sm leading-[20px] text-black01'>{item?.subtitle}</p>
                    </div>
                </div>
            )})
        }
      <div className='flex items-center gap-x-6'>
        

      </div>
    </section>
  )
}

export default SupportSection;
