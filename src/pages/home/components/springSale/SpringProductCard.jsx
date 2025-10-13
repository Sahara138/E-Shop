import { Progress, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { GetDiscountPrice } from "../../../../utils/GetDiscountPrice";
import { getStars } from "../../../../utils/GenerateRatings";
import { useStockStatus } from "../../hooks/useStockStatus";

const SpringProductCard = ({
  image,
  pCategory,
  pName,
  ratings,
  totalRatings,
  price,
  discount,
  stock,
  sold,
}) => {
  const { color, status, percentage } = useStockStatus(stock, sold);
  console.log(percentage);
  console.log(status);
  console.log(color);
  return (
    <div className="relative group bg-[#eaeaea] hover:bg-white p-8 w-[340px] md:w-[330px] xl:w-[420px] 3xl:w-[463px] rounded-[10px] justify-center mx-auto 2xl:mx-0">
      <div className="relative w-full h-[345px] overflow-hidden">
        <img
          src={image}
          alt="Product Image"
          className="w-full h-full object-cover"
        />

        <div>
          {discount > 0 && (
            <div className="absolute top-0 right-0 bg-orange w-[100px] h-[100px] rounded-full flex justify-center items-center ">
              <span className="font-montserrat font-semibold text-2xl leading-[30px] text-white">
                {discount}%
              </span>
            </div>
          )}
        </div>
      </div>
      <div>
        <h6 className="font-montserrat font-normal text-sm leading-[20px] uppercase tracking-[5px] text-black01 mt-4">
          {pCategory}
        </h6>
        {pName?.length > 14 ? (
          <Tooltip
            placement="top"
            color="white"
            title={
              <h4 className="font-montserrat font-semibold text-xl leading-[30px] text-black01 ">
                {pName}
              </h4>
            }
          >
            <Link
              to="/product"
              className="truncate block min-w-0 font-montserrat font-semibold text-xl leading-[30px] group-hover:text-orange group-hover:underline group-hover:transition-all group-hover:duration-300"
            >
              {pName}
            </Link>
          </Tooltip>
        ) : (
          <Link
            to="/product"
            className="font-montserrat font-semibold text-xl leading-[30px] group-hover:text-orange group-hover:underline"
          >
            {pName}
          </Link>
        )}
        {getStars(ratings) && (
          <div className="flex items-center gap-x-2 mt-2">
            <div className="flex items-center gap-x-1">{getStars(ratings)}</div>
            <span className="font-montserrat font-normal text-base leading-[24px] text-black01">
              ({totalRatings})
            </span>
          </div>
        )}
        {
          <div className="flex items-end gap-x-2 mt-6">
            <span className="font-montserrat font-semibold text-2xl leading-[30px] text-black01 group-hover:text-orange group-hover:transition-all group-hover:duration-300 ">
              ${GetDiscountPrice(price, discount)}
            </span>
            {discount > 0 && (
              <span className="font-montserrat font-normal text-md leading-[24px] text-black01 line-through">
                ${price}
              </span>
            )}
          </div>
        }
      </div>
      <div className="relative w-full h-[30px] bg-[#e0e0e0] rounded-[25px] mt-8">
        <div
          style={{ 
            width: `${percentage}%` ,
            backgroundColor: `${color}`,
          }}
          className="absolute top-0 left-0 h-full rounded-[25px] "
        ></div>
        <div className="absolute top-0 left-0 w-full flex justify-center font-montserrat font-bold text-base leading-[24px] text-white py-1 z-30">
          {status}
        </div>
      </div>
    </div>
  );
};

export default SpringProductCard;
