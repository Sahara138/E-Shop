import { Button } from 'antd'
import React from 'react'

const CommonButton = ({children, disable, onClick, className, loading = false}) => {
  return (
    <Button disabled={disable} onClick={onClick} className={className} loading={loading}>{children}</Button>
  )
}

export default CommonButton
