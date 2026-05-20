import { useEffect, useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useFormStatus } from 'react-dom'
import axios from 'axios'

function App() {

  /*const [a, setA] = useState(22);
  const [b, setUser] = useState("Raj");

  function changeNum() {
    setA(30);
    setUser('anil');
  }

  const [num, setNum] = useState(2);

  function Inc() {
    setNum(num + 1);
  }

  function Dec() {
    setNum(num - 1);
  }

  function jump() {
    setNum(num + 5);
  }
  const BtnC = () => {
    setA(a + 5)
  }

  const [c, setC] = useState({ user: 'Anil', age: '20' });

  const userdata = () => {
    setC({ user: 'Ram', age: '30' })
    console.log(c.user, c.age);
  }

  const [d, setD] = useState({ user: "Nidhi", age: 8 });

  const ObjectData = () => {
    const newD = { ...d };
    newD.user = "Anil";
    console.log(newD);
    setD(newD);
  }

  const [arr, setArr] = useState([10, 20, 30]);

  const Arr = () => {

    setArr(prev => [40, ...prev.slice(1)]);

     setArr(arr.map((item, index) =>
        index === 0 ? 40 : item
    ));    

    console.log(arr[0]);
     const newArr = [...arr]; // copy array
    newArr[0] = 40;
    setArr(newArr);

  } */

  //batch update ka matlab hai multiple state updates ko React ek saath combine karke single re-render kar deta hai.
  // const [f, setF] = useState(10);

  // const countBatch = () => {
  //   setF(a => a + 1);
  //   setF(a => a + 1);
  //   setF(a => a + 1);
  // }


  // Form Handel 
  /*const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()    
    setTitle('');
  }

  const [note,setNote]=useState('');
  const [desc,setDesc]=useState('');

  const [task,setTask]=useState([]);

  const formHandler = (e) => {
    e.preventDefault()
    const copyTask=[...task];

    copyTask.push({note,desc});

    setTask(copyTask);    
    
    setNote('');
    setDesc('');
  }


  const deleteNote =(idx)=>{
        const copyTask2=[...task];      
        
        copyTask2.splice(idx,1);

        setTask(copyTask2);
  } */

  //lOCAL Storage 
  /*
    localStorage.setItem('age',36)

     const aa=localStorage.getItem('user');
     console.log(aa);

     localStorage.removeItem('ager');
     localStorage.clear();


     const user ={
        user:'anil',
        age:20,
        city:'jaipur'
     };

      localStorage.setItem('user',JSON.stringify(user));

      localStorage.removeItem('user');
      localStorage.clear();

      const obje=localStorage.getItem(JSON.parse('user'))
      console.log(obje);

      */
    
    
    //
  
  //Fatch api Response by fatch method 
  /*
  async function  getData(){
      const response =await fetch('https://jsonplaceholder.typicode.com/users');
      console.log(await response.json());    
  }

  */

  // now axios to fatch api 

    const [data,setData] =useState([]);

   /* const getData = async () =>{
      //First way
        // const response =await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(response.data);

        //second way data restructure (data direct get )

        const {data} =await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(data);
    }*/


    //useEffect  (mounting)

    const [num,setNum] =useState(0)
    const [num2,setNum2] =useState(100)

    useEffect(function(){
      console.log('running');
    },[num]) // dependincy num chage ho to hi ye print ho if [] than only one time print 



  return (
    <>
    <div>
          <h1>{num}</h1>
          <h1>{num2}</h1>
          <button onMouseEnter={()=>{
              setNum(num+1)
          }}  onMouseLeave ={()=>{
              setNum2(num2+10)
          }} className='bg-black p-4 text-white m-3 rounded-2xl'>Click</button>

      {/* 
        <button className='bg-black p-4 text-white m-3 rounded-2xl' onClick={getData}>Get Data </button>
      <div className='flex flex-wrap gap-10 p-10 mt-5 h-full overflow-auto'>
          {data.map(function(elem,idx){
              return (
                 <>
                 <div key={idx} className='relative p-5 my-2 w-70 h-60 justify-center bg-gray-200 rounded-2x bg-cover text-black'>
                    <h3 >User :{elem.name}</h3>
                    <h3 >UserName :{elem.username}</h3>
                    <h4>Email :{elem.email}</h4>
                    <h4>Phone:{elem.phone}</h4>
                    <p>Address : {elem.address.street} ,{elem.address.suite},{elem.address.city} ,{elem.address.zipcode}</p>
                  </div>
               </> )
          })}

      </div> */}
    </div>

      {/* <div className='h-screen lg:flex'>
        <form className='flex flex-col p-5 gap-4 lg:w-1/2 items-start' onSubmit={(e) => formHandler(e)}>
          <h2 className='text-3xl font-bold p-4' >Add Notes </h2>
          <input type="text" placeholder='Enter Notes Heading' 
            className='px-5 py-2 rounded border-2 w-full mb-2' value={note}
            onChange={(e)=>{setNote(e.target.value);
            }}
          />
          <textarea placeholder='Enter Details' id="" name="" 
            className='px-5 py-2 rounded border-2 w-full mb-2'
            onChange={(e)=>{setDesc(e.target.value);
            }} value={desc}
          ></textarea>
          <button className='text-white px-5 py-2 rounded border-2 mb-2 w-full bg-black' >Add Note</button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
          <h1 className='text-3xl font-bold p-4'>Recent Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
            {task.map(function(elem,idx){
              return <div key={idx} className="relative py-15 px-8 h-62 w-60 rounded-2x bg-cover text-black bg-[url('https://www.nicepng.com/png/detail/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png')]"> 
                      <h4 className='absolute right-8 bg-red-500 rounded-full text-xs top-11 p-1' 
                      onClick={()=> { deleteNote(idx) } }>X</h4>

                      <h3>{elem.note}</h3>
                      <p>{elem.desc}</p>
                    </div>
            })}
            
          </div>
        </div>
      </div> */}

      {/* <div className='flex flex-wrap m-10 gap-20'>
        <h1>value of a is {a}</h1>
        <h1>value of User is {b}</h1>

        <button onClick={changeNum}>Click</button>

        <button onClick={BtnC}>Click Arrow function 2 Console</button>

        <button onClick={()=>{
              console.log('hello');
        }}>Click Arrow Function</button>
        <h2>{num}</h2>

        <button onClick={Inc}>Increase</button>
        <button onClick={Dec}>Decreage</button>
        <button onClick={jump}>Jump By 5</button>

          <h2>{c.user},{c.age}</h2>
        <button onClick={userdata}>Click Array value print Console</button>

        <hr/>

          <button onClick={ObjectData}>Object Console </button>

          <h3>{arr}</h3>
          <button onClick={Arr}>Array Change Value  </button>

          <h3>batch update ka matlab hai multiple state updates ko React ek saath combine karke single re-render kar deta hai. <br />{f}</h3>

          <button onClick={countBatch}>Count Update By Batch</button>


          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <input className="form-control" onChange={(e)=>{ setTitle(e.target.value)  }} 
            type="text" placeholder="Enter Your Name " value={title} name="username" id="username" />
            <input type="submit" className="btn"/>
          </form>


      </div> */}
    </>
  )
}

export default App
