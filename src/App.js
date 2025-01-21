import './App.css';
import About from './contents/About';
import Contact from './contents/Contact';
import Footer from './contents/Footer';
import Navbar from './contents/Navbar';
import Work from './contents/Work';

function App() {
  return (
    <div>
      <div id='home'>
      <Navbar />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
