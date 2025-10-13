import React from 'react'

const ProductDescription = ({description}) => {
  return (
    <div>
        <h5 className='font-poppins font-semibold text-2xl text-black01 mb-[20px]'>Description</h5>
        <p className='font-montserrat font-normal text-[20px] leading-[30px] text-black200'>{description}</p>
    </div>
  )
}

export default ProductDescription