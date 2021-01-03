import React from 'react'
import silvaNavLogo from "../images/silvaNavLogo.png" ;
import linkedinlogo from '../images/linkedinlogo.svg'
import githublogo from '../images/githublogo.svg'
const Nav = () => {
    return (
    <div className='navbackground'>
         <ul className='nav'> 
              <li className='link1'>Projects</li>
              <li className='link2'>About Me</li>
              <li > <img className='logo' src={silvaNavLogo} /> </li>
            
              <li> <img className='linkedinlogo' src={linkedinlogo} /></li>
              <li> <img className='githublogo' src={githublogo} /></li>
        </ul>         
    </div>
    )
}

export default Nav
