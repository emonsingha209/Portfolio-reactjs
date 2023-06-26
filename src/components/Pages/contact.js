import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const serviceID = process.env.REACT_APP_Service_ID;
  const templateID = process.env.REACT_APP_Template_ID;
  const publicKey = process.env.REACT_APP_Public_Key;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div
      id='contact'
      className='w-full h-full flex items-center justify-center'
    >
      <div className='mt-0 md:mt-16 h-auto w-full'>
        <div className='text-yellow-400 text-center mb-2 md:mb-4'>
          <h3 className='text-3xl md:text-4xl font-bold'>
            Get in Touch with Me
          </h3>
          <p className='text-lg md:text-xl px-2 italic text-gray-200'>
            Use the form below to send me a message or ask any questions
          </p>
        </div>
        <div className='w-full flex justify-center'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='bg-card mx-4 mb-4 p-4 md:p-8 w-96 flex flex-col gap-4 rounded text-pen'
          >
            <div>
              <input
                type='text'
                name='from_name'
                placeholder='Name'
                className='p-2 w-full placeholder-pen border-2 border-blue-600 hover:border-blue-700 focus:border-blue-900 outline-none'
              />
            </div>
            <div>
              <input
                type='email'
                name='reply_to'
                placeholder='Email'
                className='p-2 w-full placeholder-pen border-2 border-blue-600 hover:border-blue-700 focus:border-blue-900 outline-none'
              />
            </div>
            <div>
              <textarea
                name='message'
                placeholder='Message...'
                className='p-2 w-full h-32 placeholder-pen border-2 border-blue-600 hover:border-blue-700 focus:border-blue-900 outline-none'
              />
            </div>
            <div>
              <input
                type='submit'
                value='Send'
                className='bg-fullBg cursor-pointer w-full p-2 rounded-sm font-semibold text-lg hover:bg-slate-950 text-white'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
