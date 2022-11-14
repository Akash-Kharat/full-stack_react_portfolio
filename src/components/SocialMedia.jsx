import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {FaGithub,FaLinkedinIn} from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/Akash-Kharat" target="_blank" rel="noreferrer" ><FaGithub/></a>
        </div>
        <div>
            <a href="https://www.instagram.com/microengineer/" target="_blank"  rel="noreferrer" ><BsInstagram/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/akash-kharat-037740126/" target="_blank" rel="noreferrer" ><FaLinkedinIn/></a>
        </div>
    </div>
  )
}

export default SocialMedia