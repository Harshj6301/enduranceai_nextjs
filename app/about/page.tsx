import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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

        <header>    
         <Navbar /> 
      </header>
      <div className="hero-section bg-center bg-fixed bg-cover" style={{ backgroundImage: "url('/Assets/bg/nebula.jpg')" }}>
        <div className="overlay"></div>
        <div className="hero-content text-center text-white relative z-10 p-20">
          <span className="glow">
            <h1 id="hero-title" className="flex flex-wrap justify-center text-7xl">Endurance aI</h1>
          </span>
          <h4 className="text-2xl mt-4">Provides the power of AI/ML systems for specific uses, ranging for diverse work</h4>
        </div>
      </div>
      <Footer />
    </div>
  )
}