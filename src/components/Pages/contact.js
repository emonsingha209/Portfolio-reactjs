import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailCheck = /\S+@\S+\.\S+/;
    return emailCheck.test(email);
  };

  async function sendEmail(e) {
    e.preventDefault();
    const form = e.target;
    const nameInput = form.elements.from_name;
    const emailInput = form.elements.reply_to;
    const messageInput = form.elements.message;
    let flag = 0;

    if (!nameInput.value) {
      setNameError('Please enter your name');
      flag = 1;
    } else {
      setNameError('');
      flag = 0;
    }

    if (!emailInput.value) {
      setEmailError('Please enter your email');
      flag = 1;
    } else if (!validateEmail(emailInput.value)) {
      setEmailError('Please enter a valid email address');
      flag = 1;
    } else {
      setEmailError('');
      flag = 0;
    }

    if (!messageInput.value) {
      setMessageError('Message cannot be empty');
      flag = 1;
    } else {
      setMessageError('');
      flag = 0;
    }

    if (flag === 1) {
      setIsError(true);
      return;
    }

    setIsLoading(true);

    try {
      const serviceID = process.env.REACT_APP_Service_ID;
      const templateID = process.env.REACT_APP_Template_ID;
      const publicKey = process.env.REACT_APP_Public_Key;
      await emailjs.sendForm(serviceID, templateID, form, publicKey);
      form.reset();
      setIsEmailSent(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div
      id='contact'
      className='w-full h-full flex items-center justify-center'
    >
      <div className='pt-4 md:pt-16 mb-2 h-auto w-full'>
        <div className='text-yellow-400 text-center mb-2 md:mb-4'>
          <h3 className='text-3xl md:text-4xl font-bold'>
            Get in Touch with Me
          </h3>
          <p className='text-lg md:text-xl mt-2 px-2 italic text-gray-200'>
            Use the form below to send me a message or ask any questions
          </p>
        </div>
        <div className='w-full flex justify-center'>
          <form
            onSubmit={sendEmail}
            className='mx-4 mb-4 p-4 pt-0 w-96 flex flex-col gap-4 rounded text-pen'
          >
            <div>
              <input
                type='text'
                name='from_name'
                placeholder='Name'
                className='p-2 w-full placeholder-pen border-2 border-gray-900 rounded-xl hover:border-blue-700 focus:border-blue-900 outline-none'
              />
              {isError && nameError && (
                <p className='text-center font-medium p-1 bg-gray-200 rounded-2xl text-red-700 mt-1.5'>
                  {nameError}
                </p>
              )}
            </div>
            <div>
              <input
                type='email'
                name='reply_to'
                placeholder='Email'
                className='p-2 w-full placeholder-pen border-2 border-gray-900 rounded-xl hover:border-blue-700 focus:border-blue-900 outline-none'
              />
              {isError && emailError && (
                <p className='text-center font-medium p-1 bg-gray-200 rounded-2xl text-red-700 mt-1.5'>
                  {emailError}
                </p>
              )}
            </div>
            <div>
              <textarea
                name='message'
                placeholder='Message...'
                className='p-2 w-full h-32 placeholder-pen border-2 border-gray-900 rounded-xl hover:border-blue-700 focus:border-blue-900 outline-none'
              />
              {isError && messageError && (
                <p className='text-center font-medium p-1 bg-gray-200 rounded-2xl text-red-700'>
                  {messageError}
                </p>
              )}
            </div>
            <div>
              <input
                type='submit'
                value={isLoading ? 'Sending...' : 'Send'}
                disabled={isLoading}
                className='bg-green-700 cursor-pointer w-full p-2 rounded-lg font-semibold text-lg hover:bg-green-800 text-white'
              />
            </div>
            {isEmailSent && (
              <p className='text-center font-semibold text-lg p-2 rounded-xl text-white bg-navColor'>
                Message sent successfully &#10003;
              </p>
            )}
            {isError && (
              <p className='text-center font-semibold text-lg p-2 rounded-xl text-white bg-red-600'>
                Message sending failed. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
