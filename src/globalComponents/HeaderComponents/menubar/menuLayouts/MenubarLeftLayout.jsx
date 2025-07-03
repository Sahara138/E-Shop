import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import AllCategoryMenu from '../AllCategories';


const MenubarLeftLayout = () => {
    const {t} = useTranslation();
  return (
    <div className='flex items-center gap-x-[80px]'>
      <div><AllCategoryMenu isMenu={true} icons={false} className='font-montserrat font-bold text-base leading-[24px] text-white cursor-pointer'/></div>
      <Link to="/product" className='font-montserrat font-bold text-base leading-[24px] text-white'>{t('Products')}</Link>
      <Link to="/blog" className='font-montserrat font-bold text-base leading-[24px] text-white'>{t('Blog')}</Link>
      <Link to="/contact" className='font-montserrat font-bold text-base leading-[24px] text-white'>{t('Contact')}</Link>
    </div>
  )
}

export default MenubarLeftLayout
