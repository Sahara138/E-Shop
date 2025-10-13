import React from "react";
import { useTranslation } from "react-i18next";
import { BsGrid } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import AllCategoryMenu from "../../../../globalComponents/HeaderComponents/menubar/AllCategories";
import { useDispatch, useSelector } from "react-redux";
import { setGridView, setListView } from "../../../../service/redux/feature/viewSlice";

const ShowcaseHeader = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.view.mode);
  const {from, to, total} = useSelector((state)=> state.pagination)
  return (
    <div className="ml-6">
      <h1 className="font-montserrat font-semibold text-[36px] text-black01 leading-[56px]">
        Products
      </h1>
      <div className="flex justify-between items-center mt-6">
        <p className="font-montserrat font-normal text-[16px] text-black01">
          Showing {from} - {to} of {total} results.
        </p>
        <div>
          <div className="flex  items-center gap-x-2">
            <span className="font-montserrat font-normal text-sm lg:text-base leading-[24px] text-black01">
              {t("Sort_By")}:
            </span>
            <div className="flex items-center gap-3">
              <AllCategoryMenu
                icons={true}
                className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer"
              />
              <div className="w-[1px] h-[32px] bg-black100 mx-3"></div>
              <AllCategoryMenu
                icons={true}
                className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer"
              />
              <div className="w-[1px] h-[32px] bg-black100 mx-3"></div>
              <div className="flex gap-3 items-start">
                <span
                  className={`cursor-pointer text-black100 hover:text-orange ${
                    viewMode == "grid" ? "text-orange" : ""
                  }`}
                  onClick={()=> dispatch(setGridView())}
                >
                  <BsGrid size={24} />
                </span>
                 <span
                  className={`cursor-pointer text-black100 hover:text-orange ${
                    viewMode == "list" ? "text-orange" : ""
                  }`}
                  onClick={()=> dispatch(setListView())}
                >
                  <FaBars
                    size={24}
                    // color="#30303038"
                    className="-mt-[2px] hover:text-orange"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseHeader;
