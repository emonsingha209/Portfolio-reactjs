import React from 'react';

function Project() {
  const projects = [
    {
      title: 'SHARPENERS Website',
      details:
        'The SHARPENERS website is a comprehensive platform designed to showcase a leading educational institution. It offers information about programs and degrees, online resources for students, news updates, and admissions details. The responsive website ensures accessibility across devices, making it a user-friendly hub for prospective students and current learners.',
      languages: 'HTML, CSS, JavaScript, PHP, MySQL.',
      projectLink: 'https://github.com/emonsingha209/SHARPENERS',
    },
    {
      title: 'OpenGL London Tower Bridge - A Digital Remake',
      details:
        'An OpenGL project about London iconic Tower Bridge, meticulously recreated with meticulous attention to detail, capturing its majesty and architectural finesse. This visually stunning experience offers viewers a captivating glimpse into the beauty of this historical landmark.',
      languages: 'OpenGL',
      projectLink:
        'https://github.com/emonsingha209/London-Tower-Bridge--Opengl',
    },
    {
      title: 'Nutrition and Workout System (Backend)',
      details:
        'Nutrition-and-workout-System is a software system built to provide a simple and convenient system for certified nutritionists and trainers to work with clients using the many useful features of the application. We hope that through this platform the certified nutritionists, trainers and clients can come together and collaborate to build perfect system for achieving fitness goals as effectively as possible.',
      languages: 'TypeScript, NestJs',
      projectLink:
        'https://github.com/Ratul41Bhatt/Nutrition-and-Workout-System',
    },
    {
      title: 'Health Consultant',
      details:
        'The Health Consultant Application is a Java-based tool that empowers users to input symptoms and receive personalized health recommendations. It employs evidence-based practices to predict potential diseases based on symptoms. Additionally, users can conveniently schedule appointments with doctors, ensuring timely and accurate medical attention to cater to their unique needs and preferences.',
      languages: 'Java',
      projectLink: 'https://github.com/emonsingha209/Health_Consultant',
    },
  ];

  return (
    <div id='projects' className='mx-2 md:mx-4 pt-4 md:pt-16 h-full'>
      <div className='text-yellow-400 font-bold text-3xl md:text-5xl text-center md:mt-4 mb-2 md:mb-4'>
        <h2>PROJECTS</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 content-stretch p-4 gap-8 h-auto font-poppins'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex flex-col justify-between bg-gray-700 rounded p-2 h-full text-lg'
          >
            <div className='grow p-2'>
              <div className='pb-1 font-bold text-xl'>
                <p>Project: {project.title}</p>
              </div>
              <div className='pb-1 leading-relaxed'>
                <p>{project.details}</p>
              </div>
              <div className='mt-2'>
                <p>Languages: {project.languages}</p>
              </div>
            </div>
            <div className='bg-gray-900 text-center cursor-pointer hover:bg-gray-950 font-semibold text-lg rounded'>
              <button className='w-full'>
                <a
                  href={project.projectLink}
                  target='_blank'
                  rel='noreferrer'
                  className='block w-full h-full p-2'
                >
                  Source Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
