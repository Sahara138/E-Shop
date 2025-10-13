import { Logo } from "../../assets/svg/logo";
import { Link } from "react-router-dom";
import Container from "../Container";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { footerLinkList } from "./data";
import visa from "../../../src/assets/images/visa.png";
import masterCard from "../../assets/images/mastercard.png";
import applePay from "../../assets/images/applepay.png";
import paypal from "../../assets/images/paypal.png";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <footer className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-2 h-full">
          <div className="flex flex-col justify-between">
            <Link to="/">
              <Logo />
            </Link>
            <div className="mt-5 lg:mt-0">
              <ul>
                <li className="flex items-center gap-x-2 font-montserrat  font-normal text-sm lg:text-[16px] text-black01 mb-3">
                  <FaPhoneAlt color="#828282" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-x-2 font-montserrat font-normal text-sm lg:text-[16px] text-black01 mb-3">
                  <BsEnvelopeFill color="#828282" />
                  <span>information@eshop.com</span>
                </li>
                <li className="flex items-center gap-x-2 font-montserrat font-normal text-sm lg:text-[16px] text-black01">
                  <FaMapMarkerAlt color="#828282" />
                  <span>123 Main Street, Suite 105, Anytown USA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 mt-6 lg:mt-0">
            {footerLinkList.map((item, index) => {
              const linkLists = item.linkTitle;
              return (
                <div key={index} className="">
                  <h4 className="font-poppins font-semibold text-lg lg:text-[20px] text-black01 mb-4 lg:mb-6">
                    {t(item.title)}
                  </h4>
                  {linkLists.map((data, index) => {
                    return (
                      <div className="mt-3" key={index}>
                        <ul>
                          <li>
                            <Link
                              to={data.to}
                              className="font-montserrat font-normal text-black200 hover:text-orange
                                                        transition-all ease-linear duration-75 text-sm lg:text-[16px] leading-[30px]"
                              key={index}
                            >
                              {t(data.linkTopic)}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div>
              <h4 className="font-poppins font-semibold text-lg lg:text-[20px] text-black01 mb-6">
                Payments
              </h4>
              <div className="flex items-center justify-between gap-x-2">
                <img src={visa} alt="visa" />
                <img src={masterCard} alt="masterCard" />
                <img src={applePay} alt="applePay" />
                <img src={paypal} alt="paypal" />
              </div>
                <div className="mt-[73px]">
                <h4 className="font-poppins font-semibold text-lg lg:text-[20px] text-black01 mb-6">
                    Follow Us
                </h4>
                <div className="mt-3">
                    <ul>
                    <li>
                        <Link
                        to="/"
                        className="font-montserrat font-normal text-black200 hover:text-orange transition-all ease-linear duration-75 text-sm lg:text-[16px] leading-[30px]">
                        Twitter
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/"
                        className="font-montserrat font-normal text-black200 hover:text-orange transition-all ease-linear duration-75 text-sm lg:text-[16px] leading-[30px]">
                        Instagram
                        </Link>
                    </li><li>
                        <Link
                        to="/"
                        className="font-montserrat font-normal text-black200 hover:text-orange transition-all ease-linear duration-75 text-sm lg:text-[16px] leading-[30px]">
                        Facebook
                        </Link>
                    </li>
                    </ul>
                </div>
                <div></div>
                </div>  
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-t-black100 flex flex-wrap items-center justify-center md:justify-between py-2">
            <span className="font-montserrat font-normal text-xs lg:text-sm text-black200">Copyright © 2023 E-Shop. All Rights Reserved.</span>
            <div className="flex items-center gap-x-3 text-black200 mt-1 lg:mt-0">
                <Link to="#" className="font-montserrat font-normal text-xs lg:text-sm text-black200">Privacy Policy</Link>
                |<Link to="#" className="font-montserrat font-normal text-xs lg:text-sm text-black200">Terms & Condition</Link>
                |<Link to="#" className="font-montserrat font-normal text-xs lg:text-sm text-black200">Sitemap</Link>
                
            </div>

        </div>
      </footer>
    </Container>
  );
};
