import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {GiAbstract050} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaHome} from 'react-icons/fa'
import {CgViewList} from 'react-icons/cg'
import {SiAboutdotme} from 'react-icons/si'
import {AiFillFileAdd} from 'react-icons/ai'
import {MdOutlineDarkMode} from 'react-icons/md'
import {MdDarkMode} from 'react-icons/md'

function Navbar({theme, darkmode}) {

  const [mobile, setmobile] = useState(false)

  return (
    <>
      <nav>
        <ul className={mobile? "nav-ul-mobile": "nav-ul-normal"}>
            <li><NavLink to='/' className='link' title='Home'><FaHome/></NavLink></li>
            <li><NavLink to='/recent-post' className='link' title='Recent Post'><CgViewList/></NavLink></li>
            <li><NavLink to='/about' className='link' title='About Me'><SiAboutdotme/></NavLink></li>
            <li><NavLink to='/blog-form' className='link' title='Add Blog'><AiFillFileAdd/></NavLink> </li>
            <li><button className='button' onClick={() => darkmode()}>
              {theme==='dark' ? <MdOutlineDarkMode/>:<MdDarkMode/>}
            </button></li>
        </ul>

        <button className='button mobile-menu-icon' onClick={() => setmobile(!mobile)}>
          {mobile ? <AiOutlineClose/>:<GiAbstract050/>}
        </button>

      </nav>
    </>
  )
}

export default Navbar
