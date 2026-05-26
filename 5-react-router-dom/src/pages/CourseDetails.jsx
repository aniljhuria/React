import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

  const params=useParams()
  return (
    <div>
        <h1>{params.id} Product Details </h1>
    </div>
  )
}

export default CourseDetails
