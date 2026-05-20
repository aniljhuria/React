import React from 'react'
import { ArrowBigRight  } from 'lucide-react'


const RightCard = (props) => {  
    const key_value= props.id +1;

  return (
    <div className='h-full  shrink-0 w-80 overflow-hidden relative rounded-4xl p-4'>
        <img className='h-full w-full  object-cover rounded-4xl' src={props.user.img}/>
        <div className='absolute top-0 left-0 p-10 flex flec-col justify-between h-full w-full flex-col'>
            <h2 className='bg-white text-xl font-bold rounded-full h-10 w-10 flex justify-center items-center' >{key_value}</h2>
            <div>
                
                <p className='text-shadow-amber-200 text-lg leading-normal mb-10 text-white'>{props.user.intro}</p>
                <div className='flex justify-between'> 
                    <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>{props.user.tag}                       
                    </button>
                    <button  className='bg-blue-600 text-white font-medium px-2 py-2 rounded-full'>
                        <ArrowBigRight  />   
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard
