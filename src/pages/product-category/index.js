import { Pagination } from 'antd';
import { useState, useEffect } from 'react'
import { CommonLayout } from '../../layouts/common'

export const ProductCategory = ({ match }) => {
 const [pageName, setpageName] = useState('processors');

 useEffect(() => {
  if (Object.keys(match.params).length === 0 && match.params.constructor === Object) {
   setpageName('')
  } else {
   setpageName(match.params.category)
  }
 }, [match.params])

 return (
  <CommonLayout>
   <h1 className='text-gray-700 text-4xl mt-8'>
    {pageName !== '' ? 'Product Category : ' + pageName.toUpperCase() : 'Product Category'}
   </h1>
   <div className='mt-8'>
    <Pagination
     total={85}
     showSizeChanger
     showTotal={total => `Total ${total} items`}
    />
   </div>
  </CommonLayout>
 )
}