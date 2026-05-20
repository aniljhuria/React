import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './componets/header/Header'
import Button from './componets/button/Button'

import style from './componets/header/Header.module.css'
import styles from './componets/button/Button.module.css'
import Section1 from './componets/Section1/Section1'
import Section2 from './componets/Section2/Section2'

function App() { 

  function BtnClick(){
    console.log('Hello Btn ');
  }

  const users=[
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYB2GmX-d5euyXuFE0X6ss24VexPOmO2zveA&s',
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate neque deserunt, tempore ratione non ad.",
      tag: "Satisfied"
    },
    {
      img:'https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80',
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate neque deserunt, tempore ratione non ad.",
      tag: "Frentend"
    },
    {
      img:'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate neque deserunt, tempore ratione non ad.",
      tag: "Backend"
    },
    {
      img:'https://thumbs.dreamstime.com/b/tiger-wild-winter-nature-amur-tiger-running-snow-action-wildlife-scene-danger-animal-cold-winter-tajga-russ-84783074.jpg',
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate neque deserunt, tempore ratione non ad.",
      tag: "Undertaker"
    },
  ]

  return (
    <>
      {/* <Header className={style}/>
      <Button className={styles}/> */}

      <Section1 users={users}/>
      
      <button className='bg-amber-100 py-3 px-3 ' onClick={BtnClick}>Hello Btn </button>


    </>
  )
}

export default App
