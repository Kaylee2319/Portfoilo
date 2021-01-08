import React from 'react';
import AboutMe from '../components/AboutMe'
// import Projects from '../components/Projects';
import hero from '../images/hero.png'

const HomePage = () => {
  return (
  <div>
  <div className='Main-Sec'>
    <img className='hero' alt='hero-banner' src={hero} />
  <h1 className='Heading1'> &lt;h1&gt; <br/>Silva <br/>
Web Designer &lt;h1&gt;
 </h1 >
 </div>
 <AboutMe />
 {/* <Projects /> */}
    </div>
  );
};
export default HomePage;


