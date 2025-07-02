import React from 'react'
import { useTranslation } from 'react-i18next';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const {t} = useTranslation();
  return (
    <div className='mt-[80px]'>
        <div className='flex items-center justify-between'>
            <h3 className='font-montserrat font-semibold text-[36px] leading-[46px] text-black01'>{t('Featured_Products')}</h3>
            <Link to="/product" className='group flex items-center gap-x-4 font-montserrat font-bold text-base leading-[24px] text-orange'>
            {t('View_All')} <span className='group-hover:translate-x-2 transition-all duration-300'><HiArrowLongRight size={20}/></span></Link>
        </div>
    </div>
  )
}

export default FeaturedProducts
