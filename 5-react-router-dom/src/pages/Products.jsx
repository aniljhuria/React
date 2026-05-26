import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
          <div className='flex justify-center gap-10'>
            <Link className='text-xl font-semibold' to='/product/men' >Men</Link>
            <Link className='text-xl font-semibold' to='/product/women' >Woman</Link>
          </div>
        <Outlet />
    </div>
  )
}

export default Products
