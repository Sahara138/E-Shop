import React from "react";
import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ProductCard from "../../../../globalComponents/productCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredProductsData } from "./featuredData";
import NextButton from "../../../../globalComponents/NextButton";
import PrevButton from "../../../../globalComponents/PrevButton";
import { Navigation } from "swiper/modules";

const breakpoints ={
   320:{
     slidesPerView: 1,
   },
   576:{
     slidesPerView: 2,
   },
   768:{
     slidesPerView: 2,
   },
   992:{
     slidesPerView: 3,
   },
   1200:{
     slidesPerView: 4,
   },
   1400:{
     slidesPerView: 5,
   },
};

const FeaturedProducts = () => {
  const { t } = useTranslation();
  return (
    <section className="relative mt-[40px] lg:mt-[80px]">
      <div className="flex items-center justify-between mb-12">
        <h3 className="font-poppins font-semibold text-xl lg:text-[36px] leading-[46px] text-black01">
          {t("Featured_Products")}
        </h3>
        <Link
          to="/product"
          className="group flex items-center gap-x-4 font-montserrat font-bold text-sm lg:text-base leading-[24px] text-orange"
        >
          {t("View_All")}{" "}
          <span className="group-hover:translate-x-2 transition-all duration-300">
            <HiArrowLongRight size={20} />
          </span>
        </Link>
      </div>
      <div className="swiper-button-prev absolute top-2/4 transform -translate-y-2/4 left-0 lg:-left-2 z-30">
        <PrevButton />
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={breakpoints}
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
      <div className="swiper-button-next absolute top-2/4 transform -translate-y-2/4 right-0 lg:-right-2 z-30">
        <NextButton />
      </div>
      
    </section>
  );
};

export default FeaturedProducts;
