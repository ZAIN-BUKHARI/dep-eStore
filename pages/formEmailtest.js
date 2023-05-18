import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Pagination } from '@mui/material';
// import Script from 'next/script';

const formEmailtest = () => {
    const form = useRef();
    const sendEmail =(e)=>{
        e.preventDefault()
            emailjs.sendForm('service_h5bpa0s', 'template_ovxkehe', form.current, '5-nx-RnyRsbo3EWQ2')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
         
    }

  return (
    <>
    {/* <Script src="https://smtpjs.com/v3/smtp.js">
</Script> */}
   <form ref={form} >
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      
    </form>
    <button onClick={sendEmail}>saaab</button>
    <Pagination></Pagination>
  </>
  )
}

export default formEmailtest


