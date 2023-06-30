import {React, useEffect} from 'react'
import image from '../images/image.jpeg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimate } from 'framer-motion'
import { duration } from '@mui/material'


const pdf_file = 'http://localhost:3000/resume.pdf';
const Header = () => {
const DownloadFile = (url)=>{
const fileName = url.split('/').pop;
const Tag = document.createElement('a');
Tag.href = url;
Tag.setAttribute('download', fileName);
document.body.appendChild(Tag);
Tag.click();
}

const {ref, inView} = useInView({threshold:0.2});

  const animation = useAnimation()
  
  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition: {duration:1}
      })
    }
    if(!inView){
      animation.start({x:'-100vw'})
    }
  }, [inView])


  const animate = useAnimation()

  useEffect(()=>{
    if(inView){
      animate.start({
        x:0,
        transition: {duration:1}
      })
    }
    if(!inView){
      animate.start({x:'100vw'})
    }
  }, [inView])



  return (
   <header className='main-header' id="header">
    <div  ref = {ref} className='container main-header-container'>
    <motion.div className='main-header-left'
          animate = {animation}
    >
                <h1  
                >Hi, I am <span>OLANIYAN TOFUNMI</span></h1>
                <h3 animate = {animation}>Self Taught Frontend Developer <br/> School Taught B.sc Mathematics </h3><br/>
                <p>I build Website for a focus on responsive design and user friendly using the latest frontend technologies</p><br/>
                <button onClick={()=>{
                    DownloadFile(pdf_file);
                }} className='btn btn-lg'>Download CV</button>
            </motion.div>
            <div ref = {ref} className='main-header-right'>
                <motion.div className='main-header-image'
                animate= {animate}>
                    <img src={image} alt='display'></img>
                </motion.div>
            </div>
        </div>
   </header>
  )
}

export default Header