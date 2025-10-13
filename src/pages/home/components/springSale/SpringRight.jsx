import React from 'react'
import { SpringSaleData } from './SpringSaleData'
import { Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import SpringProductCard from './SpringProductCard'
import PrevButton from '../../../../globalComponents/PrevButton'
import NextButton from '../../../../globalComponents/NextButton'

const breakpoints ={
   320:{
     slidesPerView: 1,
   },
   576:{
     slidesPerView: 1,
   },
   768:{
     slidesPerView: 2,
   },
   992:{
     slidesPerView: 1,
   },
   1200:{
     slidesPerView: 1,
   },
   1400:{
     slidesPerView: 2,
   },
};

const SpringRight = () => {
  return (
    <div className='relative'>
      <div className="swiper-button-prev-spring absolute top-2/4 transform -translate-y-2/4 left-0 md:-left-3 2xl:-left-5 z-30">
        <PrevButton />
      </div>
      <div className="swiper-button-next-spring absolute top-2/4 transform -translate-y-2/4 right-0 md:-right-3 2xl:!-right-5 3xl:!-right-1 z-30">
        <NextButton />
      </div>
      <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={breakpoints}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next-spring",
                prevEl: ".swiper-button-prev-spring",
              }}   
            >
              {SpringSaleData?.map((product) => (
                <SwiperSlide>
                  <SpringProductCard
                    key={product?.id}
                    image={product?.image}
                    pCategory={product?.pCategory}
                    pName={product?.pName}
                    ratings={product?.ratings}
                    totalRatings={product?.totalRatings}
                    price={product?.price}
                    discount={product?.discount}
                    stock={product?.stock}
                    sold={product?.sold}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
      
    </div>
  )
}

export default SpringRight
