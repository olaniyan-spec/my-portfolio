import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'


const Contact = () => {
  
  return (
    <section className='contact' id="Contact">
        <h1>Contact Me</h1>
        <div className='contact-wrapper'> 
        <div className='socials'>
                <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                <a href='https://twitter.com/@TofunmiOlaniyan' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                <a href='https://instagram.com/tofunmi_olaniyan' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                <a href='mailto:olaniyanolaoluwa3@gmail.com' target='blank' rel='noreferrer noopener'><MdEmail/></a>
                <a href='https://wa.me/+2348109799958' target='blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
                
        </div>
              </div> 
    </section>
  )
}

export default Contact