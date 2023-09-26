import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Loading from "../assets/svg/Rolling.svg";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
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
    let flag = false;

    if (!nameInput.value) {
      setNameError("Please enter your name");
      flag = true;
    } else {
      setNameError("");
      flag = false;
    }

    if (!emailInput.value) {
      setEmailError("Please enter your email");
      flag = true;
    } else if (!validateEmail(emailInput.value)) {
      setEmailError("Please enter a valid email address");
      flag = true;
    } else {
      setEmailError("");
      flag = false;
    }

    if (!messageInput.value) {
      setMessageError("Message cannot be empty");
      flag = true;
    } else {
      setMessageError("");
      flag = false;
    }

    if (flag) {
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
  const inputClass =
    "p-2 w-full placeholder-pen border-2 border-gray-900 rounded-xl hover:border-gray-800 focus:border-gray-950 outline-none";
  const errorClass = "text-center font-medium text-white";
  const confirmClass =
    "text-center font-semibold text-lg p-2 rounded-md text-white";
  return (
    <div
      id="contact"
      className="flex items-center justify-center w-full h-full"
    >
      <div className="flex flex-col-reverse w-full h-auto pt-4 mb-2 md:pt-16 md:flex-row md:gap-0">
        <div className="top-0 flex items-center justify-center w-full">
          <div className="flex flex-col gap-2 mb-4 font-mono text-lg md:mb-0 md:gap-6 lg:gap-12 md:text-xl lg:text-3xl">
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <span> +880 1743217209</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <span> emonsingha209@gmail.com</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarker} />
              <span> Mridhabari,Kuril,Dhaka-1229</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2 text-center text-yellow-400 md:mb-4">
            <h3 className="text-3xl font-bold md:text-4xl">
              Get in Touch with Me
            </h3>
            <p className="px-2 mt-2 text-lg italic text-gray-200 md:text-xl">
              Use the form below to send me a message or ask any questions
            </p>
          </div>
          <div className="flex justify-center w-full">
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-4 p-4 pt-0 mx-4 mb-4 rounded w-96 text-pen"
            >
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  className={inputClass}
                />
                {isError && nameError && (
                  <p className={`${errorClass} mt-1.5`}>{nameError}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email"
                  className={inputClass}
                />
                {isError && emailError && (
                  <p className={`${errorClass} mt-1.5`}>{emailError}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message..."
                  className={`${inputClass} h-32`}
                />
                {isError && messageError && (
                  <p className={errorClass}>{messageError}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full p-2 text-lg font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <img
                        src={Loading}
                        alt="Loading"
                        className="w-6 h-6 mr-2"
                      />
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
              {isEmailSent && (
                <p className={`${confirmClass} bg-navColor`}>
                  Message sent successfully &#10003;
                </p>
              )}
              {isError && (
                <p className={`${confirmClass} bg-red-600`}>
                  Message sending failed. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
