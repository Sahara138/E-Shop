import React from "react";
import { Select } from "antd";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
import i18n from "../../../service/i18n";

const SocialswithLang = () => {
  const currencyoptions = [
    { value: "USD", label: "USD" },
    { value: "TAKA", label: "TAKA" },
    { value: "AUD", label: "AUD" },
    { value: "EUR", label: "EUR" },
    { value: "JPY", label: "JPY" },
    { value: "GBP", label: "GBP" },
    { value: "INR", label: "INR" },
    { value: "CNY", label: "CNY" },
    { value: "BRL", label: "BRL" },
    { value: "RUB", label: "RUB" },
  ];
  const languagewithFlag = [
    {
      value: "us",
      language: "en",
      label: (
        <div className="flex items-center gap-x-2">
          <img
            src="https://flagcdn.com/us.svg"
            alt="US"
            className="w-[27px] h-[16px]"
          />
          <span>English</span>
        </div>
      ),
    },
    {
      value: "bd",
      language: "bd",
      label: (
        <div className="flex items-center gap-x-2">
          <img
            src="https://flagcdn.com/bd.svg"
            alt="BD"
            className="w-[27px] h-[16px]"
          />
          <span>Bangla</span>
        </div>
      ),
    },
  ];

  const handleLanguageChange = (value) => {
    const findLanguage = languagewithFlag.find((language) => language.value === value);
    if (findLanguage){
        i18n.changeLanguage(findLanguage.language || "en");
    }
  };
  return (
    <div className="flex items-center justify-end gap-x-12">
        <div>
            <Select
                defaultValue={currencyoptions[0].value}
                style={{ width: 80 }}
                onChange={(value) => console.log(`selected ${value}`)}
                options={currencyoptions}
                className="custom-select"
            />
        </div>
      <div className="w-[1px] h-8 bg-black100"></div>
        <div>
        <Select
            defaultValue={languagewithFlag[0].value}
            style={{ width: 120 }}
            onChange={handleLanguageChange}
            options={languagewithFlag}
            className="custom-select"
        />
        </div>
      <div className="w-[1px] h-8 bg-black100"></div>

      <div className="flex items-center gap-x-6">
        <Link to="https://www.facebook.com/" target="_blank">
          <FaFacebookF color="#303030"/>
        </Link>
        <Link to="https://twitter.com/" target="_blank">
          <FaTwitter color="#303030"/>
        </Link>
        <Link to="https://www.instagram.com/" target="_blank">
          <IoLogoInstagram  color="#303030"/>
        </Link>
      </div>
    </div>
  );
};

export default SocialswithLang;
