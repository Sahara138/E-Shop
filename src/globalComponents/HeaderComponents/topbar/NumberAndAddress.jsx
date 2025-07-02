import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";

const NumberAndAddress = () => {
  return (
    <div className='flex items-center gap-x-12'>
        <div className='flex items-center gap-x-2'>
            <div >
                <SlLocationPin size={16}/>
            </div>
            <div>
                <p className='font-montserrat font-normal text-sm leading-[20px] text-black01'>123 Main Street, Anytown USA</p>
            </div>

        </div>
        <div className='w-[1px] h-8 bg-black100'></div>
        <div className='flex items-center gap-x-2'>
            <div>
                <IoCallOutline size={16}/>
            </div>
            <div>
                <p className='font-montserrat font-normal text-sm leading-[20px] text-black01'>+1 (555) 123-4567</p>
            </div>

        </div>
      
    </div>
  )
}

export default NumberAndAddress
