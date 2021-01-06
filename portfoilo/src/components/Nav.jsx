import React from 'react'
import silvaNavLogo from "../images/silvaNavLogo.png" ;
const Nav = () => {
    return (
    <div className='navbackground'>
        
        <ul className='nav-right' >
            <li className='link1'>Projects</li>
            <li className='link2'>About Me</li>
            <li > <img className='logo' src={silvaNavLogo}  alt='logo'/> </li>
        </ul>
        <ul className='nav-left'>
            <li className='linkedinlogo' alt='linkedin-logo' > </li>
            <li className='githublogo' alt='github-logo'></li>
        </ul>
    </div>
    )
}

export default Nav
