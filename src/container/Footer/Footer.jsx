import React,{ useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Client } from '../../Client';
import { send } from 'emailjs-com';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: "" , email: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) =>{
    const {name, value} = e.target;

    setFormData({...formData, [name]:value})
    
  }

  const handleSubmit = () =>{
    setLoading(true);

    const contact ={
      _type:'contact',
      name:name,
      email:email,
      message:message,
    }

    Client.create(contact)
    .then(() =>{
      setLoading(false);
      setIsFormSubmitted(true);
    })

    send(
      'service_pt84y4h',
      'template_xv5hu7t',
      {name, email , message},
      'qsXLDxgUiQL1YvoIo'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

  }
  
  return (
  <>
    <h2 className='head-text'>Take a coffee & chat with me.</h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt="email" />
        <a href="mailto:akashkharat1339@gmail.com" className='p-text'>
          akashkharat1339@gmail.com
        </a>
      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt="mobile" />
        <a href="tel:9763092343" className='p-text'>
          +91 9763092343
        </a>
      </div>

    </div>

    {!isFormSubmitted ?
    <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
          className="p-text"
          placeholder="Your Message"
          value={message}
          name="message"
          onChange={handleChangeInput}
          >
          </textarea>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}> {loading ? 'sending' : 'Send Message'}</button>
    </div>
    : <div>
        <h3>Thank you for getting in touch!</h3>
    </div>
}
 </> )
}

export default AppWrap(
  MotionWrap(Footer,"app__footer"),"contact","app__whitebg");
