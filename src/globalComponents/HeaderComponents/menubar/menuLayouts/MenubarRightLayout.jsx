import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MenubarRightLayout = () => {
  const {t} = useTranslation();
  return (
    <div className='flex items-center justify-end gap-x-[80px]'>
      <Link to="/product" className='font-montserrat font-bold text-base leading-[24px] text-white'>{t('LIMITED_SALE')} 👋🏻</Link>
      <Link to="/blog" className='font-montserrat font-bold text-base leading-[24px] text-white'>{t('Best_Seller')}</Link>
      <Link to="/contact" className='font-montserrat font-bold text-base leading-[24px] text-white'>{t('New_Arrival')}</Link>
    </div>
  )
}

export default MenubarRightLayout
