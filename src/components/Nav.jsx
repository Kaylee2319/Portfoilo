import React from 'react'
import silvaNavLogo from "../images/silvaNavLogo.png" ;
const Nav = () => {
    return (
    <div className='navbackground'>  
        <div className='nav-right' >
            <div className='link1'>Projects</div>
            <div className='link2'>About Me</div>
        </div>
        <div className='Navbar_Logo'> <img className='logo' src={silvaNavLogo}  alt='logo'/> </div>
        <div className='nav-left'>
            <div className='linkedinlogo' alt='linkedin-logo' > </div>
            <div className='githublogo' alt='github-logo'></div>
        </div>
    </div>
    )
}
export default Nav