import React from 'react'
import CommonButton from '../../../../../globalComponents/CommonButton'
import { useTranslation } from 'react-i18next';

const FaqRight = () => {
    const { t } = useTranslation();
  return (
    <div className='self-end'>
      <h4 className='lg:max-w-[306px] font-poppins font-semibold text-2xl lg:text-[36px] leading-[46px] text-black01'>{t("Frequently_Asked_Questions")}</h4>
      <p className='max-w-[400px] lg:max-w-[380px] font-montserrat font-normal text-base lg:text-lg leading-[30px]'>Questions that get asked the most by our clients. Get any burning questions?</p>
        <CommonButton className="!bg-orange !px-10 !py-6 !text-white !font-montserrat !font-bold !text-base lg:!text-md !leading-[30px] !mt-8 !mb-8 lg:!mb-0 lg:!mt-16 !border-none">{t("Ask_A_Question")}</CommonButton>
    </div>
  )
}

export default FaqRight;
