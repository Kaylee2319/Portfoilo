import React from 'react'
import silvaNavLogo from "../images/silvaNavLogo.png" ;
const Nav = () => {
    return (
    <div className='navbackground'>
         <ul className='nav'> 
              <li className='link1'>Projects</li>
              <li className='link2'>About Me</li>
              <li > <img className='logo' src={silvaNavLogo} /> </li>
            
              <li className='linkedinlogo' > </li>
              <li className='githublogo'></li>
        </ul>         
    </div>
    )
}

export default Nav
