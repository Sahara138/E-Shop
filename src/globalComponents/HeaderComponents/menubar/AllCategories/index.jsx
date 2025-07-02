import { useTranslation } from 'react-i18next';
import { FaBars } from "react-icons/fa6";
import { Dropdown, Space } from 'antd';
import { categoriesItems } from './categoriesItems';

const AllCategoryMenu = () => {
  const {t} = useTranslation();
  
  return (
    <>
      <Dropdown menu={{ items: categoriesItems }} trigger={['click']}>
      <a onClick={e => e.preventDefault()}>
        <Space>
          <div>
            <FaBars color='#fff'/>
          </div>
          <div>
            <p className='font-montserrat font-bold text-base leading-[24px] text-white'>{t('All_Categories')}</p>
          </div>
        </Space>
      </a>
    </Dropdown>
    </>
  )
}

export default AllCategoryMenu
