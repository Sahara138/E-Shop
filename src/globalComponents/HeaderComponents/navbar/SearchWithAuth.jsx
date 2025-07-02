import React from 'react'
import { useTranslation } from 'react-i18next';
import { IoMdSearch } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

const SearchWithAuth = () => {
    const {t} = useTranslation();
  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-between max-w-[332px] h-[56px] border-1 border-black100 rounded-[10px] px-5 py-[18px]'>
        <input type="text" placeholder={t('Search_Products_...')} className=' border-none outline-none placeholder:text-black01 placeholder:font-montserrat placeholder:text-sm placeholder:leading-[20px]' />
        <IoMdSearch size={20} color='#303030'/>
      </div>
      <div className='flex items-center gap-x-6 ml-[48px]'>
        <div className='relative'>
            <FaOpencart size={25} />
            <div className='absolute top-[-5px] right-0 w-[6px] h-[6px] bg-orange rounded-full'></div>
        </div>
        <div>
            <p className='font-montserrat font-normal text-base leading-[24px]'>{t('Cart')}</p>
            <span className='font-montserrat font-bold text-base leading-[24px]'>$ 150,00</span>
        </div>
      </div>
    <div className="w-[1px] h-8 bg-black100 ml-[40px]"></div>
    <div className='flex items-center gap-x-6 ml-[49px]'>
        <div >
            <LuUserRound size={25} />
        </div>
        <div>
            <p className='font-montserrat font-normal text-base leading-[24px]'>{t('User')}</p>
            <span className='font-montserrat font-bold text-base leading-[24px]'>{t('Account')}</span>
        </div>
      </div>
    </div>
  )
}

export default SearchWithAuth

