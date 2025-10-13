import React from 'react'
import FeaturedProducts from '../featuredProducts'
import PromoBanner from '../../../../assets/images/promo-banner.jpg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import Container from '../../../../globalComponents/Container';
import { featuredProductsData } from '../featuredProducts/featuredData';
import ProductCard from '../../../../globalComponents/productCards';
const BestSeller = () => {
  const { t } = useTranslation();
  return (
    <section className='mt-20'>
      <Container>
        <div className='grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-x-[74px]'> 
          <div className=''>
            <div className="flex items-center justify-between mb-12">
                <h3 className="font-poppins font-semibold text-xl lg:text-[36px] leading-[46px] text-black01">
                  {t("Best_Seller")}
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
              {featuredProductsData?.slice(0,6).map((product) => (
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
              ))}
            </div>
          </div>
          <div className=' overflow-hidden mx-auto xl:justify-end justify-center'>
            <img src={PromoBanner} alt="" className='object-cover' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BestSeller
