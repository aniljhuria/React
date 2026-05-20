import React from 'react'
import RightCard from './RightCard'



const RightText = (props) => {
    
  return (
    <div id="right" className='h-full w-2/3 rounded-4xl flex p-2 flex-nowrap  overflow-x-auto'>
       
       {props.users.map(function(elem,idx){
            return <RightCard user={elem} key={idx} id={idx}/>
       })}
        
    </div>
  )
}

export default RightText
