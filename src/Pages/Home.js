import React from 'react'
import Header from '../Components/Header'
import './Home.css'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home