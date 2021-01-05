import React,  { useState } from 'react'


const Projects = () => {

    const [show, setShow]=useState(true)

    const Toggle = () => {
    if (show === true){
    setShow(false)}
    else setShow(true)} 
    return (
        <div>
            <h1 className='Heading4'>Projects</h1>
        </div>
    )}

export default Projects
