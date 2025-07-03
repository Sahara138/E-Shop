import { useTranslation } from 'react-i18next';
import { FaBars } from "react-icons/fa6";
import { Dropdown, Space } from 'antd';
import { categoriesItems } from './categoriesItems';
import { MdKeyboardArrowDown } from 'react-icons/md';

const AllCategoryMenu = ({isMenu,icons, className}) => {
  const {t} = useTranslation();
  
  return (
    <>
      <Dropdown menu={{ items: categoriesItems }} trigger={['click']}>
        <Space>
          {
            isMenu &&
            <div>
              <FaBars color='#fff'/>
            </div>
          }
          <div>
            <p className={className}>{t('All_Categories')}</p>
          </div>
          {
            icons &&
            <MdKeyboardArrowDown size={25} className='text-black01 cursor-pointer ml-[100px]'/>
          }
        </Space>
    </Dropdown>
    </>
  )
}

export default AllCategoryMenu
