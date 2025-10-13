import { Pagination } from 'antd'


const CustomPagination = ({total, onChange , current, pageSize}) => {
  return (
    <>
        <div className='flex justify-between mt-20'>
            <Pagination 
                current={current}
                total={total}
                onChange={onChange}
                pageSize={pageSize}
                showSizeChanger={false}
                itemRender={(type, page, originalElement)=>{
                    if(type === "page"){
                        return(
                            <button className={`w-8 h-8 rounded text-sm ${
                                current === page
                                ?
                                "bg-red text-white"
                                :
                                "!text-gray hover:!text-black01 hover:!bg-gray"
                            }`}
                            >
                                {page}
                            </button>
                        )
                    }
                    return originalElement;
                }
                }
                />
        </div>
    </>
  )
}

export default CustomPagination