import React from "react";
import { getStars } from "../../../../utils/GenerateRatings";
import { GetDiscountPrice } from "../../../../utils/GetDiscountPrice";
import ReactImageMagnify from "react-image-magnify";

const ProductDetails = ({
  image,
  ratings,
  totalRatings,
  pName,
  price,
  discount,
  brand,
  size,
  weight,
  delivery,
  variants,
}) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-[2fr_1.5fr] gap-x-14 mt-12">
          <div className="relative w-full h-[500px] border border-black100 rounded-[25px] overflow-visible flex justify-center items-center">
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: false,
                    width:450,
                    height:450,
                    src: image
                },
                largeImage: {
                    src: image,
                    width: 1200,
                    height: 1800
                },
                enlargedImageContainerStyle: {
                  zIndex:1000,
                },
                isHintEnabled: true,
                enlargedImagePosition: "beside",
                shouldUsePositiveSpaceLens:true,

            }} />
            {/* <img src={image} alt="" className="mx-auto" /> */}
          </div>
          <div>
            <div>
              {getStars(ratings) && (
                <div className="flex items-center gap-x-2 mt-1">
                  <div className="flex items-center gap-x-1">
                    {getStars(ratings)}
                  </div>
                  <span className="font-montserrat font-normal text-base leading-[24px] text-black01">
                    ({totalRatings})
                  </span>
                </div>
              )}
            </div>
            <h1 className="font-poppins font-semibold text-[36px] text-black01 ">
              {pName}
            </h1>
            <hr className="text-black100 my-6"/>
            <div className="flex items-end gap-x-2 mt-6">
              <span className="font-poppins font-semibold text-[56px] text-orange leading-[0.8] ">
                ${GetDiscountPrice(price, discount)}
              </span>
              {discount > 0 && (
                <span className="font-poppins font-normal text-[20px] text-black200 line-through">
                  ${price}
                </span>
              )}
            </div>
            <div className="mt-[48px]">
              <ul className="w-full">
                <li className="grid grid-cols-[1fr_2fr] mb-4">
                  <p className="font-poppins font-semibold text-xl">Brand</p>
                  <span className="font-montserrat font-normal text-xl">{brand}</span>
                </li>
                <li className="grid grid-cols-[1fr_2fr]  mb-4">
                  <p className="font-poppins font-semibold text-xl">Size</p>
                  <span className="font-montserrat font-normal text-xl">{size}</span>
                </li>
                <li className="grid grid-cols-[1fr_2fr]  mb-4">
                  <p className="font-poppins font-semibold text-xl">Weight</p>
                  <span className="font-montserrat font-normal text-xl">{weight}</span>
                </li>
                <li className="grid grid-cols-[1fr_2fr] mb-4">
                  <p className="font-poppins font-semibold text-xl">Delivery</p>
                  <span className="font-montserrat font-normal text-xl">{delivery}</span>
                </li>
                <li className="grid grid-cols-[1fr_2fr]  mb-4">
                  <p className="font-poppins font-semibold text-xl">Variant</p>
                  <div className="font-montserrat font-normal text-xl flex items-center gap-x-2">{variants.map((v,i)=>(
                      <div key={i} className="py-3 px-8 border border-black100 rounded-md hover:border-orange hover:text-orange">
                          <span className="font-montserrat font-bold capitalize text-base">{v}</span>
                      </div>
                    
                  ))}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
