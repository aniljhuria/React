import React from 'react'
import { Bookmark } from 'lucide-react'

const Cards = (props) => {   
  return (
    <div className='cards'>
          <div>
            <div className="top">
            <img src={props.job.brandLogo} alt="" />
            <button>Save <Bookmark size={10} /></button>
          </div>
          <div className='center'>
            <h3>{props.job.companyName} <span>{props.job.datePosted}</span></h3>
            <h2>{props.job.post}</h2>
            <div className='tag'>
              <h4>{props.job.tag1}</h4>
              <h4>{props.job.tag2}</h4>  
            </div>
          </div>
          </div>

          <div className='bottom'>
              <div>                  
                <h3>{props.job.pay}</h3>
                <p>{props.job.location}</p>                  
              </div>
            <button>Apply Now</button>
          </div>

        </div>
  )
}

export default Cards
