import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { featuredProductsData } from "../../../home/components/featuredProducts/featuredData";
import Container from "../../../../globalComponents/Container";
import ProductDetails from "./ProductDetails";
import CheckoutCount from "./CheckoutCount";
import ProductDescription from "./ProductDescription";
import RelatedProducts from "./RelatedProducts";
import SingleProductCta from "./SingleProductCta";
import { useDispatch, useSelector } from "react-redux";
import { setCountReset, setCountValue } from "../../../../service/redux/feature/counterSlice";

const SingleProducts = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(1)[1];
  console.log(id);

  const singleProduct = featuredProductsData.find((p) => p.id == id);
  const {
    pCategory,
    brand,
    pName,
    image,
    ratings,
    totalRatings,
    price,
    discount,
    size,
    weight,
    delivery,
    variants,
    description
  } = singleProduct;

  const dispatch = useDispatch();
  const cart = useSelector((state)=> state.cart.items)
  
  useEffect(()=>{
    const cartItems = cart.find((item)=> item.id === singleProduct.id )
    if(cartItems){
      dispatch(setCountValue(cartItems.qty))
    }else{
      dispatch(setCountReset())
    }
  },[dispatch,singleProduct.id])

  const relatedProducts = featuredProductsData.filter(
    (product) =>
      product.pCategory === singleProduct.pCategory && 
      product.id !== singleProduct.id
  );
  console.log(relatedProducts)
  console.log(pName);
  return (
    <>
      <Container>
        <div className="mt-16 mb-12">
          <div className="flex items-center gap-x-4 text-base font-montserrat font-noraml text-black01">
            <Link to="/">Home</Link>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span>{pCategory}</span>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span>{brand}</span>
            <div className="w-[1px] h-[20px] bg-black100"></div>
            <span className=" font-bold">{pName}</span>
          </div>
          <ProductDetails
            image={image}
            pName={pName}
            ratings={ratings}
            totalRatings={totalRatings}
            price={price}
            discount={discount}
            brand={brand}
            size={size}
            weight={weight}
            variants={variants}
            delivery={delivery}
          />
        </div>
        <div className="mt-12">
          <CheckoutCount singleProduct={singleProduct} />
        </div>
        <div className="mt-12">
          <ProductDescription description={description} />
        </div>
        <hr className="text-black100 mt-20"/>
         <div className="mt-16">
          <RelatedProducts relatedProducts ={relatedProducts}/>
        </div>
        <div className="mt-16">
          <SingleProductCta />
        </div>
      </Container>
    </>
  );
};

export default SingleProducts;
