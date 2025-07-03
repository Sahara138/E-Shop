import React from "react";
import { Tooltip } from "antd";
import { getStars } from "../../utils/GenerateRatings";
import { Link } from "react-router-dom";
import { GetDiscountPrice } from "../../utils/GetDiscountPrice";
import { FaOpencart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
const ProductCard = ({
  image,
  pCategory,
  pName,
  ratings,
  totalRatings,
  price,
discount,
}) => {
    console.log(discount);
    console.log(GetDiscountPrice(price, discount));
  return (
    <div className="relative group border border-transparent hover:border-black100 p-6 w-[285px] rounded-[10px] ">
      <div className="w-full h-[214px] rounded-[10px] overflow-hidden">
        <img
          src={image}
          alt="Product Image"
          className="w-full h-full object-cover"
        />
      </div>
        <div className="absolute top-[40%] left-2/4 transform -translate-x-2/4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-x-3">
                <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center text-black01 border border-black01 cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-all duration-300'>
                    <FaOpencart size={20}/>
                </div>
                <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center text-black01 border border-black01 cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-all duration-300'>
                    <FiHeart size={20}/>
                </div><div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center text-black01 border border-black01 cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-all duration-300'>
                    <IoShareSocialOutline size={20}/>
                </div>

            </div>
        </div>
      <div>
        {discount>0 && (
            <div className="absolute top-3 right-3 bg-orange w-fit py-[7px] px-5 rounded-[5px]">
                <span className="font-montserrat font-bold text-base leading-[24px] text-white">
                    {discount}%
                </span>
            </div>
        )}
      </div>
      <div>
        <h6 className="font-montserrat font-normal text-sm leading-[20px] uppercase tracking-[5px] text-black01 mt-4">
          {pCategory}
        </h6>
        {
            pName?.length > 14 ? (
              <Tooltip
                placement="top"
                color="white"
                title={
                  <h4 className="font-montserrat font-semibold text-xl leading-[30px] text-black01 ">
                    {pName}
                  </h4>
                }
              >
                <Link to="/product" className="truncate block min-w-0 font-montserrat font-semibold text-xl leading-[30px] group-hover:text-orange group-hover:underline group-hover:transition-all group-hover:duration-300">
                  {pName}
                </Link>
              </Tooltip>
            ) : (
              <Link to="/product" className="font-montserrat font-semibold text-xl leading-[30px] group-hover:text-orange group-hover:underline">
                {pName}
              </Link>
            )
        }
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
        {
            
            <div className="flex items-end gap-x-2 mt-6">

                <span className="font-montserrat font-semibold text-2xl leading-[30px] text-black01 group-hover:text-orange group-hover:transition-all group-hover:duration-300 ">${GetDiscountPrice(price, discount)}</span>
                {
                    discount > 0 && (
                        <span className="font-montserrat font-normal text-md leading-[24px] text-black01 line-through">${price}</span>
                    )
                }
            </div>
        }
      </div>
    </div>
  );
};

export default ProductCard;
