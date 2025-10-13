import React from 'react'
import Brands from './filterCategories/Brands'
import Categories from './filterCategories/Categories'
import Price from './filterCategories/Price'

const LeftProductComponents = () => {
  return (
    <div className='bg-white02 p-[48px] rounded-[45px] h-fit'>
        <Categories />
        <hr className='w-full text-black100 h-[1px] my-10'></hr>
        <Brands />
        <hr className='w-full text-black100 h-[1px] my-10'></hr>
        <Price />
    </div>
  )
}

export default LeftProductComponents