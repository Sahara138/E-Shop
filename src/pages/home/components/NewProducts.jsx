import { useTranslation } from "react-i18next";
import AllCategoryMenu from "../../../globalComponents/HeaderComponents/menubar/AllCategories";
import { featuredProductsData } from "./featuredProducts/featuredData";
import ProductCard from "../../../globalComponents/productCards";
import { Button } from "antd";
import { useState } from "react";
import { categoriesItems } from "../../../globalComponents/HeaderComponents/menubar/AllCategories/categoriesItems";


const NewProducts = () => {
  const [initialState, setInitialState] = useState(5);
  const { t } = useTranslation();

  const loadMore = () => {
    setInitialState((prev) => prev + 5);
  };
  return (
    <section className="relative mt-15 lg:mt-[80px]">
      <div className="flex items-center justify-between mb-12">
        <h3 className="font-poppins font-semibold text-xl lg:text-[36px] leading-[46px] text-black01">
          {t("New_Products")}
        </h3>
        <div className="flex items-center gap-x-2">
          <span className="font-montserrat font-normal text-sm lg:text-base leading-[24px] text-black01">
            {t("Sort_By")}:
          </span>
          <AllCategoryMenu
            icons={true}

            className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-6 gap-y-10 mt-12">
        {featuredProductsData?.slice(0, initialState).map((product) => (
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
      <div className="flex items-center justify-center">
        {initialState < featuredProductsData?.length && (
          <Button
            onClick={loadMore}
            className="!bg-white !py-4 !px-8 !border !border-orange !font-montserrat !font-bold !text-base !leading-[24px] !text-orange mt-10 lg:mt-16"
          >
            {t("Load_More")}
          </Button>
        )}
      </div>
    </section>
  );
};

export default NewProducts;
