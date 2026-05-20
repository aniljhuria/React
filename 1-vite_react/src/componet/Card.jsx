import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} />
        <h2>{props.name },{props.age}</h2>
        <p>{props.desc}</p>
        <button>View Profile </button>            
    </div>
  )
}

export default Card
