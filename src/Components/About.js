import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiJavascript} from 'react-icons/di'
import {DiMaterializecss} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {DiJqueryLogo} from 'react-icons/di'
import {AiFillGithub} from 'react-icons/ai'

const About = () => {
  return (
    <section className='about' id="About">
        <div className='about-wrapper'>
            <div className='aboutme'>
                <h1>About Me</h1>
                <small>Hi, i am <span>OLANIYAN TOFUNMI</span>, a graduate from the department of mathematics (B.sc) Federal University of Agriculture (FUNAAB) </small>
                <p>I am a frontend developer with three years of experience in web development,  I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards. I have worked on several projects as a freelancer, also collaborated with a group of intern in building a project for a fast paced company </p>
            </div>
            <h1>Skills</h1>
            <div className='skills-wrapper'>
                <ul>
                    <h4>Languages</h4>
                    <li><AiOutlineHtml5/> HTML</li>
                    <li><IoLogoCss3/> CSS</li>
                    <li><DiJavascript/> JAVASCRIPT</li>
                </ul> 
            <ul>
            <h3>Libraries</h3>
                <li><FaReact/>Reactjs</li>
                <li><DiJqueryLogo/> jQuery</li>
                <li><DiMaterializecss/> MATERIALUI</li>
            </ul>
            <ul>
            <h3>Version Control</h3>
            <li><AiFillGithub/>Git</li>
            </ul> 
            </div>
        </div>
            
            
        
        
        
    </section>
  )
}

export default About
