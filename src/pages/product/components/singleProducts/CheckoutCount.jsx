import React from "react";
import { SupportData } from "../../../home/components/support/supportData";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CommonButton from "../../../../globalComponents/CommonButton";
import { FaOpencart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCountDec, setCountInc } from "../../../../service/redux/feature/counterSlice";
import { Link, useNavigate } from "react-router-dom";
import { addCart } from "../../../../service/redux/feature/cartSlice";
const CheckoutCount = ({singleProduct}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const countValue = useSelector((count)=> count.count.count);
  const disableWhenLessThanOne = countValue === 1;

  const handleAddToCartAndRedirect = () =>{
    dispatch(addCart({product:singleProduct, qty:countValue}));
    navigate("/cart")
  }
  return (
    <>
      <div className="grid grid-cols-[1.2fr_1fr] items-center gap-x-[130px]">
        <div className="flex justify-between items-center">
          {SupportData?.slice(4, 8).map((item, index) => {
            const Icon = item?.icon;
            return (
              <div key={index} className="flex items-center gap-x-6">
                <span className="text-black01">
                  <Icon />
                </span>
                <div>
                  <h5 className="font-montserrat font-bold text-sm md:text-base leading-[24px] text-black01">
                    {item?.title}
                  </h5>
                  <p className="font-montserrat font-normal text-xs md:text-sm leading-[20px] text-black01">
                    {item?.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center w-[50%]">
            <button className="w-[56px] h-[56px] hover:bg-white02 rounded-full flex items-center justify-center cursor-pointer" onClick={()=> dispatch(setCountDec())}
                disabled={disableWhenLessThanOne}>
              <AiOutlineMinus size={24} />
            </button>
            <div className="font-poppins font-semibold text-[36px] text-black01">
             {countValue}
            </div>
            <button className="w-[56px] h-[56px] hover:bg-white02 rounded-full flex items-center justify-center cursor-pointer" onClick={()=> dispatch(setCountInc())}>
              <AiOutlinePlus size={24} />
            </button>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <CommonButton className="!bg-orange !px-10 !py-6 !text-white !font-montserrat !font-bold !text-base lg:!text-lg !leading-[30px] !mb-12 lg:!mb-0 !border-none">
              Buy Now
            </CommonButton>
            <button onClick={()=>handleAddToCartAndRedirect()} className="w-[50px] h-[50px] bg-white rounded-lg flex justify-center items-center text-orange border border-orange cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-all duration-300">
              <FaOpencart size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCount;
