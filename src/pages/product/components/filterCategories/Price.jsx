import { Slider } from "antd"
import React, { useState } from "react";

const Price = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  return (
    <>
      <div className="w-full">
        <h4 className="font-montserrat font-bold text-xl text-black01 mb-[20px]">
          Price
        </h4>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex-1 font-montserrat font-normal text-[16px] text-black01 text-center border border-black100 rounded-[10px] py-[20px] text-black01">
            ${priceRange[0].toLocaleString()}
          </div>
          <div className="flex-1 font-montserrat font-normal text-[16px] text-black01 text-center border border-black100 rounded-[10px] py-[20px] text-black01">
            ${priceRange[1].toLocaleString()}
          </div>
        </div>
        <div className="w-full mt-[30px]">
          <Slider
            range
            min={100}
            max={10000}
            step={50}
            defaultValue={priceRange}
            value={priceRange}
            onChange={(value)=> setPriceRange(value)}
            trackStyle={[{backgroundColor:"#FF624C"}]}
            handleColor={[{Color:"#FF624C"}]}
            railStyle={{
                backgroundColor:"#30303038"
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Price;
