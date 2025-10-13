import React, { Children, useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
const CustomDrawer = ({children,open,setOpen,placement,closable,rootClassName='',title}) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        width={500}
        onClose={onClose}
        closable={closable}
        open={open}
        key={placement}
        rootClassName={rootClassName}
      >
        {children}
      </Drawer>
    </>
  );
};
export default CustomDrawer;