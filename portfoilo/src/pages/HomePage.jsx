import React from 'react';
import CompassRose from '../images/CompassRose.svg'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects';


const HomePage = () => {
  return (
<div>
  <div className='Main-Sec'>
    
  <h1 className='Heading1'> &lt;h1&gt; <br/>Silva <br/>
Web Designer &lt;h1&gt;
  </h1 >
      <div className='Top-compass'> 
        <div className='Html-compass'>HTML5</div>
        <div className='Css-compass'>CSS3</div>
      </div>
      <div className='Bottom-compass'> 
        <div className='Js-compass'>Javascript</div>
        <div className='React-compass'>React</div>
      </div>
      <div className='Middle-compass'> 
        <div className='Lean-compass'>Lean UX</div>
        <div className='Design-compass'>Design Thinking</div>
      </div>
      <div className='Stand-alone'>Design Thinking</div>
      
      < img className='compassRose' src={CompassRose} alt='compassrose logo'/> 
  </div>
 <AboutMe />
 <Projects />
</div>
  );
};
export default HomePage;


