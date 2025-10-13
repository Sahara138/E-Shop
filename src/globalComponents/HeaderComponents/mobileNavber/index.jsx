import { Link } from "react-router-dom"
import { Logo } from "../../../assets/svg/logo"
import Container from "../../container"
import { useTranslation } from "react-i18next"
import { IoMdSearch } from "react-icons/io"
import { IoIosMenu } from "react-icons/io";
import CustomDrawer from "../../drawer"
import { useEffect, useState } from "react"
import SocialswithLang from "../topbar/SocialswithLang"
import NavListItems from "./NavListItems"



const MobileNavber = () => {
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);

    useEffect(()=>{
      const handleResize = ()=>{
        if(window.innerWidth > 991){
          setOpen(false)
        }
      }
      window.addEventListener("resize",handleResize)

      return () => window.removeEventListener("resize",handleResize)
    },[])
  return (
    <>
    <div className="border-b-1 border-b-black100">
    <Container>
        <div className='flex gap-x-3 justify-between items-center py-[24px]'>
            <Link to="/"><Logo width={80}/></Link>
            
            <div className='flex items-center justify-between  h-[46px] border-1 border-black100 rounded-[10px] px-[10px] py-[8px] w-[60%]'>
                <input type="text" placeholder={t('Search_Products_...')} className=' border-none outline-none placeholder:text-black01 placeholder:font-montserrat placeholder:text-sm placeholder:leading-[20px]' />
                <IoMdSearch size={20} color='#303030'/>
            </div>
            <div className="w-[15%] flex justify-end cursor-pointer" onClick={()=>setOpen(true)}><IoIosMenu size={25}/></div>
        </div>
    </Container>
    </div>
    <CustomDrawer 
      open={open} 
      setOpen={setOpen} 
      placement="left" 
      closable={true} 
      rootClassName="custom_drawer"
      title={
        <div>
            <SocialswithLang />
          </div>
      }>
      <NavListItems />
    </CustomDrawer>
    
    </>
  )
}

export default MobileNavber
