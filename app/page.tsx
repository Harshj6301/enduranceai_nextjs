// MAIN PAGE HOME

import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      
        <title>Endurance AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Endurance AI"/>
        <meta property="og:description" content="ML and AI services by Endurance AI"/>
        <meta property="og:image" content="https://www.example.com/image.jpg"/>
        <meta property="og:url" content="https://www.example.com/page"/>
        <meta property="og:type" content="website"/>
        <link rel="logo" href="assets/Logos/e.png" />
      
        <header>    
         <Navbar /> 
      </header>

      <div className="hero-section bg-center relative bg-cover" style={{ backgroundImage: "url('/Assets/bg/nebula.jpg')" }}>
        <div className="overlay"></div>
        <div className="hero-content text-center text-white relative z-10 p-20">
          <span className="glow">
            <h1 id="hero-title" className="flex flex-wrap justify-center text-7xl">Endurance aI</h1>
          </span>
          <h4 className="text-2xl mt-4">Provides the power of AI/ML systems for specific uses, ranging for diverse work</h4>
        </div>
      </div>
      <main>
        <section id="projects" className="py-20">
          <h2 className="text-4xl text-center mb-10 font-mono">Services and Solutions</h2>
          <div className="project-container flex flex-wrap justify-center">
            <a href="https://enduranceai.github.io/Foresight_website/" 
            className="project m-4 p-4 border rounded-lg hover:bg-neutral-900">
              <Image src='/assets/Name/Foresight.png' alt='Foresight' width={240} height={40} className='mb-4'/>
              <p className="text-center w-60">ML for options trading, providing insights and ability to make better decisions for options</p>
            </a>
            <div className="project m-4 p-4 border rounded-lg hover:bg-neutral-900 ">
              <Image src='/assets/Name/BRUKEN AI.png' alt='BRUKEN AI' width={240} height={40} className='mb-4'/>
              <p className="text-center w-60">Security and Intelligence systems</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>
      </main>
      <Footer /> 
      <script src="script.js" async></script>
    </div>
  );
}
