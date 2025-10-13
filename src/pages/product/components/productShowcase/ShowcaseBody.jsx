import React, { useEffect, useState } from 'react'
import { featuredProductsData } from '../../../home/components/featuredProducts/featuredData'
import ProductCard from '../../../../globalComponents/productCards'
import ProductCardList from '../../../../globalComponents/ProductCardList'
import CustomPagination from '../../../../globalComponents/customPagination'
import { useDispatch, useSelector } from 'react-redux'
import { setRange } from '../../../../service/redux/feature/paginationSlice'


const ShowcaseBody = () => {
  const dispatch = useDispatch()
  const viewMode = useSelector((state)=> state.view.mode)
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const StartIndex = (page - 1) * pageSize;
  const EndIndex = StartIndex + pageSize;
  const paginatedProducts = featuredProductsData.slice(StartIndex, EndIndex)

  useEffect(()=>{
    dispatch(
      setRange({
          from: StartIndex + 1,
          to: Math.min(EndIndex, featuredProductsData.length),
          // to: EndIndex,
          total: featuredProductsData.length
    }))
  },[page,dispatch])
  return (
    <div className='mt-[48px]'>
      <div>
        {
          viewMode == "grid"
              ?
              (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 mt-12">
                {paginatedProducts?.map((product) => (
                  <ProductCard
                    key={product?.id}
                    id={product?.id}
                    image={product?.image}
                    pCategory={product?.pCategory}
                    pName={product?.pName}
                    ratings={product?.ratings}
                    totalRatings={product?.totalRatings}
                    price={product?.price}
                    discount={product?.discount}
                  />
                ))}
              </div>)
              :
              (<div className='mt-12'>
                {paginatedProducts?.map((product) => (
                    <ProductCardList
                      key={product?.id}
                      id={product?.id}
                      image={product?.image}
                      pCategory={product?.pCategory}
                      pName={product?.pName}
                      ratings={product?.ratings}
                      totalRatings={product?.totalRatings}
                      price={product?.price}
                      discount={product?.discount}
                    />
                  ))}
              </div>)
        }
      </div>
      {
        featuredProductsData.length > pageSize &&
        (
          <div className='flex justify-center'>
          <CustomPagination current={page} total={featuredProductsData.length} onChange={setPage} pageSize={pageSize}/>
          </div>

        )
      }

    </div>
  )
}

export default ShowcaseBody