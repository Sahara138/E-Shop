
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from "react-icons/hi2";
import { featuredProductsData } from '../../../home/components/featuredProducts/featuredData';
import ProductCard from '../../../../globalComponents/productCards';


const RelatedProducts = ({relatedProducts}) => {
    const {t} = useTranslation()
  return (
    <>
    <div className=''>
        <div className="flex items-center justify-between mb-12">
            <h3 className="font-poppins font-semibold text-xl lg:text-[36px] leading-[46px] text-black01">
            {t("Related_Products")}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-6 gap-y-10 mt-12">
            {relatedProducts?.slice(0, 5).map((product) => (
            <ProductCard
                key={product?.id}
                id={product?.id}
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
    </>
  )
}

export default RelatedProducts