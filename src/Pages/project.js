import React, { useState } from "react";
import { projects } from "../assets/data/project";
import Modal from "react-modal";
import { dualLinkProjects } from "../assets/data/dualLink";

function Project() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const OpenModal = (project) => {
    setSelectedProject(project);
    setIsOpenModal(true);
  };

  const CloseModal = () => {
    setSelectedProject(null);
    setIsOpenModal(false);
  };

  const DualLinks = (TitleOfProject) => {
    const isAvailable = dualLinkProjects.find(
      (project) => project.projectName === TitleOfProject
    );

    if (isAvailable) {
      return (
        <div className="flex gap-2 text-gray-200">
          <div className="flex justify-center w-1/2 text-lg font-semibold text-center bg-gray-900 rounded cursor-pointer hover:bg-gray-950">
            <a
              href={isAvailable.frontendLink}
              target="_blank"
              rel="noreferrer"
              className="w-full h-full p-2"
            >
              Frontend
            </a>
          </div>
          <div className="flex justify-center w-1/2 text-lg font-semibold text-center bg-gray-900 rounded cursor-pointer hover:bg-gray-950">
            <a
              href={isAvailable.backendLink}
              target="_blank"
              rel="noreferrer"
              className="w-full h-full p-2"
            >
              Backend
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <div id="projects" className="h-full pt-8 mx-2 md:mx-4 md:pt-16">
      <div className="mb-2 text-3xl font-bold text-center text-yellow-400 md:text-5xl md:mt-4 md:mb-4">
        <h2>PROJECTS</h2>
      </div>
      <div className="grid h-auto grid-cols-1 gap-8 p-4 text-gray-200 md:grid-cols-2 content-stretch">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-full p-2 pt-1 text-base bg-gray-700 rounded"
          >
            <div className="p-2 grow">
              <div className="text-xl font-bold text-yellow-400">
                <p>Project: {project.title}</p>
              </div>
              {/* <div className='w-full my-4 h-80'>
                <img src='https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png' alt='ye' className='object-cover w-full h-full rounded' /> 
              </div> */}
              <div className="pb-1 subpixel-antialiased leading-relaxed">
                <p>{project.details}</p>
              </div>
              <div className="mt-2">
                <p>Languages & Tech: {project.languages}</p>
              </div>
            </div>
            <div className="flex gap-2">
              {project.liveDemoLink ? (
                <div className="w-1/2 text-lg font-semibold text-center bg-gray-900 rounded cursor-pointer hover:bg-gray-950">
                  <button className="w-full">
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full h-full p-2"
                    >
                      Live Demo
                    </a>
                  </button>
                </div>
              ) : (
                <div className="w-1/2 text-lg font-semibold text-center bg-gray-900 rounded cursor-pointer hover:bg-gray-950">
                  <button
                    className="w-full h-full p-2 text-gray-300 cursor-not-allowed"
                    disabled
                  >
                    No Live Demo Available
                  </button>
                </div>
              )}
              <div className="flex w-1/2 text-lg font-semibold text-center bg-gray-900 rounded cursor-pointer hover:bg-gray-950">
                {project.projectLink === "DualLink" ? (
                  <div className="w-full h-full">
                    <button
                      className="flex items-center justify-center w-full h-full"
                      onClick={() => OpenModal(project.title)}
                    >
                      Source Code
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-full">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full h-full"
                    >
                      Source Code
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={CloseModal}
        contentLabel="Links"
        className="bg-gray-800"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedProject && (
          <div className="w-full h-full p-4 mx-2 bg-blue-400 rounded-lg">
            <h3 className="mb-4 text-2xl text-center">{selectedProject}</h3>
            {DualLinks(selectedProject)}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Project;
