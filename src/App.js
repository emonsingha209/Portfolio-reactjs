import React from 'react';
import Header from './components/Header/header';
import HomePage from './Pages/homepage';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Portfolio",
            "name": "Emon Singha",
            "url": "https://emonsingha.netlify.app/",
            "description": "Welcome to my portfolio website! I'm Emon Singha, a passionate web 
            developer with expertise in creating stunning and user-friendly websites. 
            Explore my work and projects in web development, including responsive designs 
            and modern technologies.",
            "logo": "https://i.postimg.cc/NGCBwSyb/emonsingha-Logo.png"
          }
        `}
      </script>
    </div>
  );
}

export default App;
