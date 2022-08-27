import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsMedium} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <div className='container footer-flex'>
        <a className='icons' href='https://medium.com/@piyush41'><BsMedium/></a>
        <a className='icons' href='https://github.com/PiyushWadhawan'><AiFillGithub/></a>
        <a className='icons' href='https://www.linkedin.com/in/piyush-wadhawan-b6065a190/'><AiFillLinkedin/></a>
      </div>
      <p><strong>Living the Simple Life</strong></p>
      <p>-Copyright-</p>
    </footer>
  )
}

export default Footer
