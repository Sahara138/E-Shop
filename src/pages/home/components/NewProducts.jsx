import { useTranslation } from 'react-i18next';
import AllCategoryMenu from '../../../globalComponents/HeaderComponents/menubar/AllCategories';
import { featuredProductsData } from './featuredProducts/featuredData';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../../globalComponents/productCards';
import NextButton from './featuredProducts/NextButton';
import PrevButton from './featuredProducts/PrevButton';
import { Navigation } from "swiper/modules";

const NewProducts = () => {
  const { t } = useTranslation();
  return (
    <section className="relative mt-[80px]">
      <div className="flex items-center justify-between mb-12">
        <h3 className="font-montserrat font-semibold text-[36px] leading-[46px] text-black01">
          {t("New_Products")}
        </h3>
        <div className='flex items-center gap-x-2'>
            <span className='font-montserrat font-normal text-base leading-[24px] text-black01'>{t("Sort_By")}:</span>
            <AllCategoryMenu icons={true} className='font-montserrat font-bold text-base text-orange cursor-pointer'/>
        </div>
      </div>
      <div className="swiper-button-prev absolute top-2/4 transform -translate-y-2/4 -left-5 z-30">
        <PrevButton />
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}    
      >
        {featuredProductsData?.map((product) => (
          <SwiperSlide>
            <ProductCard
              key={product?.id}
              image={product?.image}
              pCategory={product?.pCategory}
              pName={product?.pName}
              ratings={product?.ratings}
              totalRatings={product?.totalRatings}
              price={product?.price}
              discount={product?.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next absolute top-2/4 transform -translate-y-2/4 -right-5 z-30">
        <NextButton />
      </div>
      
    </section>
  );
}

export default NewProducts
