import React from "react";
import { useTranslation } from "react-i18next";
import CommonButton from "../../../globalComponents/CommonButton";

const ContactCta = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="mt-20">
        <div className=" rounded-[25px] lg:grid lg:grid-cols-[2fr_3fr] overflow-hidden">
          <div className=" bg-linear-to-r from-white02 to-gray py-[60px] lg:py-[114px] lg:pl-[100px] px-[40px]">
            <div>
              <h3 className="w-[400px] font-poppins font-semibold text-3xl lg:text-[36px] leading-[46px] text-black01 mb-3 lg:mb-6">
                Get Up-to-Date Gadget Technology
              </h3>
              <p className="w-[480px] font-montserrat font-normal text-md lg:text-[20px] text-black200 leading-[24px] lg:leading-[30px]">
                {t(
                  "Browse our wide selection of electronics and find the perfect promo for you from newsletter."
                )}
              </p>
              <CommonButton className="!bg-orange !px-10 !py-6 !text-white !font-montserrat !font-bold !text-sm lg:!text-lg !leading-[30px] !mt-12 !border-none">
                {t("Shop_Now")}
              </CommonButton>
            </div>
          </div>
          <div className="bg-gray lg:flex items-center justify-center h-full hidden"></div>
        </div>
      </section>
    </>
  );
};

export default ContactCta;
