import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const PrevButton = () => {
  return (
    <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center text-black01 border border-black01 cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-all duration-300'>
        <IoIosArrowBack />
    </div>
  )
}

export default PrevButton
