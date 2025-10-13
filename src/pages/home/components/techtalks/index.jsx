import React from "react";
import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { TechTalksData } from "./TechTalksData";
import BlogCard from "../../../../globalComponents/blogCards";
import Container from "../../../../globalComponents/Container";

const TechTalks = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <section className="mt-10 lg:mt-20">
      <Container>
        <div>
          <div className="flex justify-between items-center mb-12">
            <div className="w-[70%] lg:w-fit">
                <h3 className="font-poppins font-semibold text-xl lg:text-[36px] leading-[46px] text-black01">
                {t("Tech_Talk")}
                </h3>
                <p className="font-montserrat font-normal text-xs lg:text-xl leading-[24px] lg:leading-[30px] mt-1 lg:mt-6 ">
                    Stay up to date with the latest trends, reviews, and insights from our experts.
                </p>
            </div>
            <Link
              to="/product"
              className="group flex items-center gap-x-4 font-montserrat font-bold text-xs lg:text-base leading-[24px] text-orange self-end"
            >
              {t("View_All")}{" "}
              <span className="group-hover:translate-x-2 transition-all duration-300">
                <HiArrowLongRight size={20} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0  gap-x-10 mt-12">
            {
                TechTalksData?.slice(0,3).map((blog) => (
                  // <BlogCard pathname={pathname} key={blog?.id} image={blog?.image} title={blog?.title}></BlogCard>
                  <BlogCard pathname={pathname} {...blog}></BlogCard> 
                ))
            }
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechTalks;

