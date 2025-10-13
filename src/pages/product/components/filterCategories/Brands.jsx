import { Checkbox } from 'antd'
import React from 'react'

const Brands = () => {
  return (
    <>
         <div className='w-full'>
            <h4 className='font-montserrat font-bold text-xl text-black01 mb-[20px]'>Brands</h4>
            <div>
                <ul>
                    <li className='flex justify-between items-center mb-3'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Apple</Checkbox>
                        <span className='!font-montserrat !font-normal !text-[16px] !text-black01'>(255)</span>
                    </li>
                    <li className='mb-3 flex justify-between items-center'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Samsung</Checkbox>
                        <span className='!font-montserrat !font-normal !text-[16px] !text-black01'>(428)</span>
                    </li>
                    <li className='mb-3 flex justify-between items-center'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>ASUS</Checkbox>
                        <span className='!font-montserrat !font-normal !text-[16px] !text-black01'>(323)</span>
                    </li>
                    <li className='mb-3 flex justify-between items-center'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Dell</Checkbox>
                        <span className='!font-montserrat !font-normal !text-[16px] !text-black01'>(298)</span>
                    </li>
                    <li className='mb-3 flex justify-between items-center'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Lenovo</Checkbox>
                        <span className='!font-montserrat !font-normal !text-[16px] !text-black01'>(180)</span>
                    </li>
                    <li className='mb-3 flex justify-between items-center'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>HP</Checkbox>
                        <span className='!font-montserrat !font-normal !text-[16px] !text-black01'>(98)</span>
                    </li>
                    <li className='flex justify-between items-center'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Panasonic</Checkbox>
                        <span className='!font-montserrat !font-normal !text-[16px] !text-black01'>(17)</span>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Brands