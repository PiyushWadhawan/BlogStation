import React from 'react'
import Navbar from './Navbar'

function Header({theme, darkmode}) {
  return (
    <header>
      <div className='container container-flex'>
        <div className='site-title'>
            <h1>Blog Station</h1>
            <p className='subtitle'>Write to your heart's content</p>
        </div>
        <Navbar theme={theme} darkmode={darkmode}/>
      </div>
    </header>
  )
}

export default Header
