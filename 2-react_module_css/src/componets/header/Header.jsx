import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
        <p>This is Header </p>
        <button className={style.btn}>Login /Register</button>
    </div>
  )
}

export default Header
