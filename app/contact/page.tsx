import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <><><><header>    
    <Navbar /> 
 </header>
    
    <div className="hero-section relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/Assets/bg/nebula.jpg)' }}>
        <div className="overlay"></div>
        <div className="hero-content relative flex flex-col items-center justify-center h-full text-white text-center">
          <span className="glow">
          <h1 id="hero-title" className="flex flex-wrap justify-center text-7xl">Contact Us</h1>
          </span>
          <h4 className="text-xl">Have any questions or feedback? Feel free to reach out to us.</h4>
        </div>
      </div></>

      <section id="contact-form" className="py-20">
        <h2 className="text-4xl text-center mb-10 font-mono">Send us a message</h2>
        <form action="https://formspree.io/f/mvoelnrz" method="POST" className="max-w-lg mx-auto">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input type="text" id="name" name="name" required className="w-full p-2 mb-4 border rounded bg-black" />

          <label htmlFor="email" className="block mb-2">Email:</label>
          <input type="email" id="email" name="email" required className="w-full p-2 mb-4 border rounded bg-black" />

          <label htmlFor="message" className="block mb-2">Message:</label>
          <textarea id="message" name="message" required className="w-full p-2 mb-4 border rounded h-32 bg-black"></textarea>

          <button type="submit" className="w-auto p-2 rounded-md bg-black text-white text-center hover:bg-gray-700">Send</button>
        </form>
      </section></>

      <Footer />
      </>
    
    
  );
}
