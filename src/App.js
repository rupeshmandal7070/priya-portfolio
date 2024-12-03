
import './App.css';
import About from './contents/About';
import Contact from './contents/Contact';
import Footer from './contents/Footer';
import Navbar from './contents/Navbar';
import Work from './contents/Work';

function App() {
  return (
    <div>
        <Navbar/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
