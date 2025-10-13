import { useTranslation } from "react-i18next";
import RenderCountDown from "./RenderCountDown";
import Countdown from "react-countdown";
import CommonButton from "../../../../globalComponents/CommonButton";

const SpringLeft = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="font-poppins font-bold text-3xl lg:text-[56px] leading-[68px] text-black01">
        {t("Spring_Sale")}
      </h3>
      <div className="mt-5 lg:mt-10">
        <Countdown renderer={RenderCountDown} date={Date.now() + 500000000} />
      </div>
      <CommonButton className="!bg-orange !px-10 !py-6 !text-white !font-montserrat !font-bold !text-base lg:!text-lg !leading-[30px] !mt-12 lg:!mt-[72px] !mb-12 lg:!mb-0 !border-none">{t("Shop_Now")}</CommonButton>
    </div>
  );
};

export default SpringLeft;
