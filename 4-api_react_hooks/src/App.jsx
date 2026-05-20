import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {

  const [userData ,SetUserData] =useState([]);

  const [index,SetIndex]=useState(1)

  const [limit,SetLimit] =useState(20)  

  const loadingRef = useRef(false);

  const getData =async ()=>{
      const {data} =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=${limit}`)
      SetUserData(data); 
      loadingRef.current = false;
    
  }

  useEffect(function(){
    getData()
  },[limit]) //page wise show data than (index ) or scroll wise than (limit)
 

  useEffect(() => {
    function handleScroll() { 
      if (loadingRef.current) return;

      if (       
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {        

        loadingRef.current = true;
        SetLimit(limit => limit + 5);
      }

    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [loadingRef]);

  let printUserData=<h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading ....</h3>
  if(userData.length > 0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
            <a href={elem.url} target="_blank">
                  <div className='h-50 w-60 overflow-hidden bg-white rounded-xl'>
                    <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
                </div>
                <h2 className='font-bold text-lg'>{elem.author}</h2>
            </a>
      </div>
    })
  }

  return (
    <>
      <div className='min-h-screen bg-black text-white'>

        {/* <button 
          onClick={getData}
          className='bg-green-600 px-3 active:scale-95 py-2 rounded text-white m-4'>
          Get Data 
        </button> */}

        <div className='flex min-h-[82vh] flex-wrap gap-5 mx-7 my-auto pt-10'>
            {printUserData}          
        </div>

        <div className='flex justify-center gap-4 items-center p-4'>
          <button 
            style={{opacity :index ==1 ? 0.5 : 1}}
            className='bg-amber-400 text-black rounded py-2 px-4 font-semibold text-sm cursor-pointer active:scale-95 ml-2 '
            onClick={()=>{
              if(index > 1){
                SetIndex(index-1)
                SetUserData([])
              }
            }}
          >Prev</button>
          <h4> Page : {index} </h4>
          <button className='bg-amber-400 text-black rounded py-2 px-4 font-semibold text-sm cursor-pointer active:scale-95 ml-2 '
            onClick={()=>{
              SetIndex(index+1)
              SetUserData([])
            }}
          >Next</button>
        </div>


      </div>
    </>
  )
}

export default App
