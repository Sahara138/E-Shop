
import { Link } from 'react-router-dom';
import { MdComputer } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaTv } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
import { IoLogoPlaystation } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { FaHome } from 'react-icons/fa';


export const categoriesItems = 
[
  {
    label: <Link to="/product" className="flex items-center gap-x-2 font-monserrat font-normal text-base text-leading-[24px] text-black01 pb-1">
        <MdComputer  color="#FF624C" />Computers & Tablets</Link>,
    key: '0',
  },
  {
    label: <Link to="/product" className="flex items-center gap-x-2  font-monserrat font-normal text-base text-leading-[24px] text-black01 pb-1"><FaMobileScreenButton color="#FF624C" /> Mobile & Accessories</Link>,
    key: '1',
  },
  {
    label: <Link to="/product" className="flex items-center gap-x-2 font-monserrat font-normal text-base text-leading-[24px] text-black01 pb-1"><FaTv color="#FF624C" /> TV & Home Theater</Link>,
    key: '2',
  },
  {
    label: <Link to="/product" className="flex items-center gap-x-2 font-monserrat font-normal text-base text-leading-[24px] text-black01 pb-1"><FaHeadphones color="#FF624C" /> Audio & Headphones</Link>,
    key: '3',
  },
  {
    label: <Link to="/product" className="flex items-center gap-x-2  font-monserrat font-normal text-base text-leading-[24px] text-black01 pb-1"><IoCameraOutline color="#FF624C" /> Cameras & Camcorders</Link>,
    key: '4',
  },
  {
    label: <Link to="/product" className="flex items-center gap-x-2  font-monserrat font-normal text-base text-leading-[24px] text-black01 pb-1"><IoLogoPlaystation color="#FF624C" />Gaming Equipment</Link>,
    key: '5',
  },
  {
    label: <Link to="/product" className="flex items-center gap-x-2 font-monserrat font-normal text-base text-leading-[24px] text-black01 pb-1"><FaHome color="#FF624C" /> Home Appliances</Link>,
    key: '6',
  },
  
];