import React from 'react'

const RenderCountDown = ({ days, hours, minutes, seconds }) => {
    // Render a countdown
    return (
        <div className='flex gap-x-8'>
            <div className='text-center'>
                <h4 className='font-poppins font-semibold text-2xl lg:text-4xl leading-[46px] text-orange'>{days}</h4>
                <span className='font-montserrat font-normal text-xs lg:text-base leading-[24px] text-black01'>Days</span>
            </div>
            <span className='font-poppins font-semibold text-2xl lg:text-4xl leading-[46px] text-orange'>:</span>
            <div className='text-center'>
                <h4 className='font-poppins font-semibold text-2xl lg:text-4xl leading-[46px] text-orange'>{hours}</h4>
                <span className='font-montserrat font-normal text-xs lg:text-base leading-[24px] text-black01'>Hours</span>
            </div>
            <span className='font-poppins font-semibold text-2xl lg:text-4xl leading-[46px] text-orange'>:</span>
            <div className='text-center'>
                <h4 className='font-poppins font-semibold text-2xl lg:text-4xl leading-[46px] text-orange'>{minutes}</h4>
                <span className='font-montserrat font-normal text-xs lg:text-base leading-[24px] text-black01'>Minutes</span>
            </div>
            <span className='font-poppins font-semibold text-2xl lg:text-4xl leading-[46px] text-orange'>:</span>
            <div className='text-center'>
                <h4 className='font-poppins font-semibold text-2xl lg:text-4xl leading-[46px] text-orange'>{seconds}</h4>
                <span className='font-montserrat font-normal text-xs lg:text-base leading-[24px] text-black01'>Seconds</span>
            </div>

        </div>
    )
        
}

export default RenderCountDown
