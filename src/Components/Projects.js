import React from 'react'
import { project } from '../data'
import Card from './Card'
import {Link} from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimate } from 'framer-motion'
import { duration } from '@mui/material'
import { useEffect } from 'react'


const Projects = () => {
  const {ref, inView} = useInView({threshold:0.2});

  const animation = useAnimation()
  
  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition: {duration:3}
      })
    }
    if(!inView){
      animation.start({x:'100vw'})
    }
  }, [inView])

  return (
    <section ref = {ref} className='Projects' id="projects">
        <h1>Projects</h1>
        <motion.div className='project-wrapper'
        animate = {animation}
        >
        {
            project.map((data, id)=>{
                return <Card key={id} className='projects'>
                    <img src={data.image} alt='display'/>
                    <h3>{data.title}</h3>
                    <Link to={data.link}className='btn btn-sm'>Click me</Link>
                </Card>
            })
        }
        </motion.div>
    </section>
  )
}

export default Projects