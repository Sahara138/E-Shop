import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaOpencart } from 'react-icons/fa';
import { LuUserRound } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const NavListItems = () => {
  const {t} = useTranslation();
  return (
    <div>
      <ul className="flex flex-col gap-4">
        <li className="">
          <Link to="/product" className='font-montserrat font-bold text-base leading-[24px] !text-black hover:!text-orange" >'>{t('Products')}</Link>
        </li>
        <li className="">
          <Link to="/blog" className='font-montserrat font-bold text-base leading-[24px] !text-black hover:!text-orange" >'>{t('Blog')}</Link>
        </li>
        <li className="">
          <Link to="/contact" className='font-montserrat font-bold text-base leading-[24px] !text-black hover:!text-orange" >'>{t('Contact')}</Link>
        </li>
        <li>
          <Link to="/product" className='font-montserrat font-bold text-base leading-[24px] !text-black hover:!text-orange" >'>{t('LIMITED_SALE')} 👋🏻</Link>
        </li>
        <li>
          <Link to="/blog" className='font-montserrat font-bold text-base leading-[24px] !text-black hover:!text-orange" >'>{t('Best_Seller')}</Link>
        </li>
        <li>
          <Link to="/contact" className='font-montserrat font-bold text-base leading-[24px] !text-black hover:!text-orange" >'>{t('New_Arrival')}</Link>
        </li>
      </ul>
      <div className='flex items-center mt-20'>
            <div className='flex items-center gap-x-6 '>
              <div className='relative'>
                  <FaOpencart size={20} />
                  <div className='absolute top-[-5px] right-0 w-[6px] h-[6px] bg-orange rounded-full'></div>
              </div>
              <div>
                  <p className='font-montserrat font-normal text-sm leading-[24px]'>{t('Cart')}</p>
                  <span className='font-montserrat font-bold text-sm leading-[24px]'>$ 150,00</span>
              </div>
            </div>
          <div className="w-[1px] h-8 bg-black100 ml-[40px]"></div>
          <div className='flex items-center gap-x-6 ml-[49px]' >
              <div >
                  <LuUserRound size={20} />
              </div>
              <div>
                  <p className='font-montserrat font-normal text-sm leading-[24px]'>{t('User')}</p>
                  <span className='font-montserrat font-bold text-sm leading-[24px]'>{t('Account')}</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default NavListItems