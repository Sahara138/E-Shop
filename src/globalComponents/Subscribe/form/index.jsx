import { Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import CommonButton from '../../CommonButton'

export const SubscribeForm = () => {
    const {t} = useTranslation()
  return (
    <div>
        <h3 className='font-poppins font-bold text-3xl lg:text-[56px] text-black01 mb-3 lg:mb-0'>{t("Get Our Updates")}</h3>
        <p className='font-montserrat font-normal text-md lg:text-xl text-black200 leading-[24px] lg:leading-[30px] mb-8'>{t("Browse our wide selection of electronics and find the perfect promo for you from newsletter.")}</p>
        <Input placeholder={t("Enter your email address ...")} className="h-14 !px-6 !font-montserrat !font-normal !text-[14px] lg:!text-[16px] !text-black100 !outline-none" />
        <CommonButton className="!bg-orange !px-10 !py-6 !text-white !font-montserrat !font-bold !text-sm lg:!text-lg !leading-[30px] !mt-[16px] !border-none">{t("Subscribe")}</CommonButton>
    </div>
  )
}
