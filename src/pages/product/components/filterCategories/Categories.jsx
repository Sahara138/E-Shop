import { Checkbox } from 'antd'
import React from 'react'

const Categories = () => {
  return (
    <>
        <div className='w-full'>
            <h4 className='font-montserrat font-bold text-xl text-black01 mb-[20px]'>Categories</h4>
            <div>
                <ul>
                    <li className='mb-3'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Computers & Tablets</Checkbox>
                    </li>
                    <li className='mb-3'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Mobile & Accessories</Checkbox>
                    </li>
                    <li className='mb-3'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>TV & Home Theater</Checkbox>
                    </li>
                    <li className='mb-3'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Audio & Headphones</Checkbox>
                    </li>
                    <li className='mb-3'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Cameras & Camcorders</Checkbox>
                    </li>
                    <li className='mb-3'>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Gaming Equipment</Checkbox>
                    </li>
                    <li className=''>
                        <Checkbox className='!font-montserrat !font-normal !text-[16px] !text-black01'>Home Appliances</Checkbox>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Categories