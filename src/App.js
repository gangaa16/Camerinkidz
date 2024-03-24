
import './App.css';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import Programs from './Components/programs/programs';
import Camerin from './Components/Camerin/Camerin';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Title title='Our Program'/>
      <div className="container"><Programs/></div>
      <About/>
      <Title title='Why Camerinkidz'/>
      <div className="container"><Camerin/></div>

      <Title title='Contact Us' />
      <Contact/>
      <Footer/>
      
      
      
    
      
    </>
  );
}

export default App;
