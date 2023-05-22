import React from 'react'
import image from '../images/image.jpeg'

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
  return (
   <header className='main-header' id="header">
    <div className='container main-header-container'>
    <div className='main-header-left'>
                <h1>Hi, I am <span>OLANIYAN TOFUNMI</span></h1>
                <h3>Self Taught Frontend Developer <br/> School Taught B.sc Mathematics </h3><br/>
                <p>I build Website for a focus on responsive design and user friendly using the latest frontend technologies</p><br/>
                <button onClick={()=>{
                    DownloadFile(pdf_file);
                }} className='btn btn-lg'>Download CV</button>
            </div>
            <div className='main-header-right'>
                <div className='main-header-image'>
                    <img src={image} alt='display'></img>
                </div>
            </div>
        </div>
   </header>
  )
}

export default Header