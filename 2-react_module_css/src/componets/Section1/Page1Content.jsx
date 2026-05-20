import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {   
  return (
    <div className='pb-16 pt-6 px-18 flex items-center gap-3 h-[90vh]'>
      <LeftText />
      <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content
