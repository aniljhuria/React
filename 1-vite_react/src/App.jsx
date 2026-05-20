import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './componet/Card'
import Cards from './componet/Cards'

function App() {

  const jobOpenings = [
      {
        brandLogo: "https://yt3.googleusercontent.com/yqq5boPOuTo3s85oxX-DJjIhkeVN187TIEvYpCekcvuPMA9HepfOQpbWUN5w6Sn8gxlBZzPG=s900-c-k-c0x00ffffff-no-rj",
        companyName: "Google",
        datePosted: "5 days ago",
        post: "Frontend Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$45/hr",
        location: "Bangalore, India"
      },
      {
        brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
        companyName: "Meta",
        datePosted: "2 weeks ago",
        post: "React Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$70/hr",
        location: "Mumbai, India"
      },
      {
        brandLogo: "https://thumbs.dreamstime.com/z/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
        companyName: "Amazon",
        datePosted: "3 days ago",
        post: "Backend Engineer",
        tag1: "Part Time",
        tag2: "Mid Level",
        pay: "$50/hr",
        location: "Hyderabad, India"
      },
      {
        brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdEdZutLGhFalA274yXkte5G2gFp2ShGrOw&shttps://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        companyName: "Apple",
        datePosted: "1 week ago",
        post: "iOS Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$85/hr",
        location: "Pune, India"
      },
      {
        brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
        companyName: "Netflix",
        datePosted: "4 days ago",
        post: "UI Engineer",
        tag1: "Remote",
        tag2: "Senior Level",
        pay: "$95/hr",
        location: "Delhi, India"
      },
      {
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        companyName: "Microsoft",
        datePosted: "3 weeks ago",
        post: "Cloud Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$55/hr",
        location: "Noida, India"
      },
      {
        brandLogo: "https://pbs.twimg.com/profile_images/1982812857570836480/PpMZQXvi_400x400.jpg",
        companyName: "Adobe",
        datePosted: "6 days ago",
        post: "JavaScript Developer",
        tag1: "Hybrid",
        tag2: "Mid Level",
        pay: "$60/hr",
        location: "Gurgaon, India"
      },
      {
        brandLogo: "https://e7.pngegg.com/pngimages/456/74/png-clipart-nvidia-grid-logo-business-nvidia-electronics-text-thumbnail.png",
        companyName: "NVIDIA",
        datePosted: "2 days ago",
        post: "AI Software Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$100/hr",
        location: "Bangalore, India"
      },
      {
        brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
        companyName: "Uber",
        datePosted: "5 hours ago",
        post: "Data Engineer",
        tag1: "Contract",
        tag2: "Mid Level",
        pay: "$65/hr",
        location: "Chennai, India"
      },
      {
        brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqHVlZCysQgFgn7wr2q1n9at618AvEjhpaw&s",
        companyName: "Tesla",
        datePosted: "1 month ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$75/hr",
        location: "Remote"
      }
    ];

  return (
    <>
      <div className='parent'>


        {/* <Card name="Anil jhuria" age={20} desc="i am a laravel developer" img="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" />
        <Card name="Amit Kumar" age={18} desc="i am a react developer" img="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
        <Card name="Mohit Kumar" age={23} desc="i am a frentend developer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" />
        <Card name="Raj Kumar" age={28} desc="i am a node developer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3o2PvqxOMHgdrpj_YRItsLBjxyTeNZu_Q&s" /> */}
        
      </div>
      <div className='parents'>
         
          { jobOpenings.map(function(elem,id){
              return  <Cards  key={id} job={elem}/> 
            })
          }
      </div>
    </>
  )
}

export default App
