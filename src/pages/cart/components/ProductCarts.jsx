import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoShareSocialOutline, IoTrashOutline } from "react-icons/io5";
import { removeFromCart, updateQty } from "../../../service/redux/feature/cartSlice";

const ProductCarts = ({ id, image, pCategory,price, pName, variants, qty }) => {
  const dispatch = useDispatch();

  const handleQuantity = (id,newQty)=>{
    if(newQty >= 1){
       dispatch(updateQty({id, qty: newQty }));
    }
  }
  const handleRemove = (id)=>{
    dispatch(removeFromCart(id));
  }
  return (
    <>
      <div className="relative group px-[36px] py-[24px] mt-8 border border-transparent hover:border hover:border-black100 rounded-[10px]">
        <div className="grid grid-cols-[2.5fr_1fr_1fr_1.5fr] items-center gap-x-4">
          <div className="flex items-center gap-x-4">
            <div className="w-[237px] h-[214px] rounded-md bg-white01 overflow-hidden">
              <img src={image} alt="" className="w-full h-full object-cover"/>
            </div>
            <div>
              <h6 className="font-montserrat font-normal text-sm leading-[20px] uppercase tracking-normal lg:tracking-[5px] text-black01 mt-4">
                {pCategory}
              </h6>
              <h4 className="font-montserrat font-semibold text-xl leading-[30px] text-black01 mb-[46px] mt-4">
                {pName}
              </h4>
              <span className="font-monserrat text-base">
                <b className="mr-1">Variants:</b>{variants[0]}
              </span>
            </div>
          </div>
          <div>
            <h6 className="font-montserrat font-bold text-base uppercase">
              ${price}
            </h6>
          </div>
          <div>
            <div className="w-[50%] flex justify-between items-center">
              <button
                className=" cursor-pointer"
                onClick={() => handleQuantity(id, qty - 1)}
              >
                <AiOutlineMinus size={16} />
              </button>
              <div className="w-[40px] h-[40px] bg-white02 rounded-full flex items-center justify-center font-poppins font-semibold text-[16px] text-black01">
                {qty}
              </div>
              <button
                className="cursor-pointer"
                onClick={() => handleQuantity(id, qty + 1)}
              >
                <AiOutlinePlus size={16} />
              </button>
            </div>
          </div>
          <div>
            <h6 className="font-montserrat font-bold text-base uppercase">
              ${(qty*price).toFixed(2)}
            </h6>
          </div>
        </div>

        <div className="">

            <div onClick={()=>handleRemove(id)} className="absolute top-[30%] translate-y-[-30%] right-12 w-[64px] h-[64px] rounded-full text-orange hover:bg-orange flex justify-center items-center hover:text-white text-[24px] border border-orange pointer opacity-0 group-hover:opacity-100 pointer">
                <IoTrashOutline />
            </div>
            <div className="absolute top-[70%] translate-y-[-70%] right-12 w-[64px] h-[64px] rounded-full text-orange hover:bg-orange flex justify-center items-center hover:text-white text-[24px] border border-orange pointer opacity-0 group-hover:opacity-100 pointer">
                <IoShareSocialOutline />
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductCarts;
