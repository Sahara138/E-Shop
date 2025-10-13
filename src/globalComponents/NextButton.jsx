import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const NextButton = () => {
  return (
    <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center text-black01 border border-black01 cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-all duration-300'>
      <IoIosArrowForward />
    </div>
  )
}

export default NextButton
