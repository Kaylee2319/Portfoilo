import React from 'react'
import silvalogo from "../silvalogo.png" ;

const Nav = () => {
    return (
    <div className='navbackground'>
         <ul className='nav'> 
              <li>Projects</li>
              <li>About Me</li>
              <li> <img src={silvalogo} /> </li>
            
              <li> LinkedIn</li>
              <li>GitHub</li>
        </ul>         
    </div>
    )
}

export default Nav
