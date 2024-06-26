import React, { useEffect, useState } from "react";
import { CV } from "../assets/data/cv";
import { socialLinks } from "../assets/data/social";
import pic from "../assets/images/Others/emon-singha.webp";
import pic2x from "../assets/images/Others/emon-singha2x.webp";
import LinkButton from "../components/Button/linkButton";

function Intro() {
  const linkedinLink = socialLinks.find((link) => link.name === "linkedin");
  const emailLink = socialLinks.find((link) => link.name === "gmail");

  const [isDesktop, setIsDesktop] = useState(false);

  const handleWindowSizeChange = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const imageSrc = isDesktop ? pic2x : pic;

  return (
    <div
      id="intro"
      className="flex flex-col-reverse items-center justify-around w-full h-full pt-24 md:flex-row md:pt-32 xl:pt-16"
    >
      <div className="grid grid-flow-col gap-4 p-3 rounded-md bg-fullBg md:grid-flow-row m:w-auto">
        {socialLinks.map((socialLink, index) => (
          <div
            key={index}
            className="transition duration-150 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          >
            <a href={socialLink.link} target="_blank" rel="noreferrer">
              <img
                src={socialLink.image}
                alt={socialLink.name}
                className="w-8 h-auto rounded-md md:w-16"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center max-w-2xl m-8 text-center md:text-left lg:m-20 min-w-fit">
        <div className="flex flex-col text-2xl">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl">
            Hi! I am Emon Singha
          </h1>
          <p className="mt-3 md:mt-4">Frontend Developer</p>
        </div>
        <div className="flex flex-row gap-6 pt-8 font-medium text-center md:flex-col lg:flex-row md:gap-8 md:pt-12 text-pen">
          <div>
            <LinkButton
              link={linkedinLink.link}
              text="Learn More on LinkedIn"
            />
          </div>
          <div>
            <LinkButton
              link={emailLink.link}
              text="Send Email For Any Question"
            />
          </div>
        </div>
        <div className="flex pt-6 font-medium text-center text-pen md:hidden">
          <div>
            <LinkButton link={CV} text="View My Resume" />
          </div>
        </div>
      </div>
      <div className="flex items-center mx-4 md:p-4 lg:p-0 xl:p-12">
        <img
          className="w-auto h-auto border-4 border-gray-700 border-solid rounded-full bg-sky-400"
          src={imageSrc}
          width={isDesktop ? 1024 : 512}
          height={isDesktop ? 1024 : 512}
          alt="Emon"
        />
      </div>
    </div>
  );
}
export default Intro;
