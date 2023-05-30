import React from 'react'
import './Navbar.css'

import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import {useState} from 'react'
import {HashLink as NavLink} from 'react-router-hash-link'


const Navbar = () => {
    const [navShowing, setNavshowing] = useState(false)
  return (
    <nav>
        <div className='container nav_container'>
            <ul className={`nav_links ${navShowing ? 'show-nav' : 'hide-nav' }`} onClick={()=>setNavshowing(false)}>
               <li><NavLink to='#header'>Home</NavLink></li>
               <li><NavLink to='#About' smooth>About</NavLink></li>
               <li><NavLink to='#projects' smooth>Projects</NavLink></li>
               <li><NavLink to='#Contact' smooth>Contact</NavLink></li>
            </ul>
            <button className='nav_toggle' onClick={()=>setNavshowing(prev=>!prev)}>{
                navShowing ? <MdOutlineClose/> : <GoThreeBars/>
            }</button>
        </div>
    </nav>
  )
}

export default Navbar