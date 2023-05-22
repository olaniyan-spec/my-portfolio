import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <section className='contact' id="Contact">
        <h1>Contact Me</h1>
        <div className='contact-wrapper'>
            <form >
        <TextField sx={{ background:'transparent' ,width: 350}} margin="normal" id="standard-basic" label="First Name" variant="standard" />
        <TextField sx={{ background:'transparent' ,width: 350}} margin="normal" id="standard-basic" label=" Last Name" variant="standard" />
        <TextField sx={{ backgroundColor:'', width: 350}} margin="normal" id="standard-basic" label="Phone Number" variant="standard" />
        <TextField sx={{ backgroundColor:'', width: 350}} margin="normal" id="standard-basic" label="Email Address" variant="standard" />
            </form>
        </div>
        <Button  type="submit" variant="contained">Submit</Button>
        <div className='socials'>
        <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                <a href='https://twitter.com/@TofunmiOlaniyan' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                <a href='https://instagram.com/tofunmi_olaniyan' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
        </div>
               
    </section>
  )
}

export default Contact