import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {
    let navigate = useNavigate()

  const btnClcik =()=>{
    navigate('/')
  }
  return (
    <div className='mt-2text-white z-20  start-0'>
        <button 
        onClick={btnClcik} 
        className='font-medium bg-black text-white px-5 py-2 rounded m-2 cursor-pointer '>
        Return to Home Page
      </button>

      <button 
        onClick={()=>{
          navigate(-1)
        }} 
        className='font-medium bg-black text-white px-5 py-2 rounded m-2 cursor-pointer '>
        Back
      </button>
      <button 
        onClick={()=>{
          navigate(+1)
        }} 
        className='font-medium bg-black text-white px-5 py-2 rounded m-2 cursor-pointer '>
        Next
      </button>
    </div>
  )
}

export default Navbar2
