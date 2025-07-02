import React from 'react'
import { SupportData } from './supportData'

const SupportSection = () => {
  return (
    <div className='flex items-center justify-between gap-x-[80px] mt-20'>
        {
            SupportData?.map((item, index) =>{ 
                const Icon = item?.icon;
                return(
                <div key={index} className='flex items-center gap-x-6'>
                    <span className='text-black01' >
                        <Icon />
                    </span>
                    <div>
                        <h5 className='font-montserrat font-bold text-base leading-[24px] text-black01'>{item?.title}</h5>
                        <p className='font-montserrat font-normal text-sm leading-[20px] text-black01'>{item?.subtitle}</p>
                    </div>
                </div>
            )})
        }
      <div className='flex items-center gap-x-6'>
        

      </div>
    </div>
  )
}

export default SupportSection
