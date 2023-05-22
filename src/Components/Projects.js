import React from 'react'
import { project } from '../data'
import Card from './Card'
import {Link} from 'react-router-dom'

const Projects = () => {
  return (
    <section className='Projects' id="projects">
        <h1>Projects</h1>
        <div className='project-wrapper'>
        {
            project.map((data, id)=>{
                return <Card key={id} className='projects'>
                    <img src={data.image} alt='display'/>
                    <h3>{data.title}</h3>
                    <Link to={data.link}className='btn btn-sm'>Click me</Link>
                </Card>
            })
        }
        </div>
    </section>
  )
}

export default Projects