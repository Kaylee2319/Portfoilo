import React,  { useState } from 'react'
import SkillCards from '../components/SkillCards'


const AboutMe = () => {

    const [show, setShow]=useState(true)





    const Toggle = () => {

        if (show === true){
    setShow(false)}
    else setShow(true)
}

return (
    <div className='aboutMeSection'>
        <h1 className='Heading2'>AboutMe</h1>
            <p className='Passage1'>I’m a passionate Navy Veteran trained in both full stack development and UX/UI design.<br/>
                Traveling with the Navy for four years took me outside my comfort zone and gave me compassion for the state of the world.<br/>
                Through that experience, I discovered I wanted to contribute to making this world a better place.<br/><br/></p>
                {!show ? ( <p className='Passage2'>
                Upon returning from the Navy, I worked in the maintenance field for several years but wasn’t fulfilled. The covid pandemic led me<br/>
                to take a leap of faith and make a major career change to finally pursue my passion. <br/><br/>
                I graduated from Wyncode’s immersive full-stack web development boot camp 
                in September 2020 with experience collaborating<br/>
                with designers/developers to complete two-week sprints, managing version control in Github,
                using HTML5 and CSS/Flexbox,<br/> Javascript, and React (including React Context, React Router DOM, asynchronous states, event handling, props, and
                functional<br/> components).<br/><br/>After graduating, I immediately enrolled in the UX/UI boot camp, where I practiced AGILE methodology,
                delivered and implemented<br/> design feedback, used IBM Design Thinking, UX Framework, Lean UX, Figma, and Adobe Creative Cloud. 
                I also experienced user<br/> testing, wireframing, prototyping, interaction design, responsive design, and refined my public speaking 
                skills by presenting a case<br/> study about Veteran suicide rates.<br/><br/>I graduated from the UX/UI boot camp in December 2020 and I’m thrilled to 
                be pursuing my passions by creating solutions to major<br/> problems, helping others, and giving back to the community with the use of technology.</p>
                ) : (null)
}
                <a  onClick={Toggle}><span class="iconify" data-icon="bi:arrow-down-circle-fill" data-inline="false" data-width="50" data-height="50"></span></a>
                    <SkillCards />
    </div>
)}
export default AboutMe
