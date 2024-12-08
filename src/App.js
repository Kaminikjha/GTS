
import './App.css';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Login from './layouts/Login';

function App() {
  return (
   <>
   {/* <Login/> */}
   <Navbar/>
   <Home/>
   <About/>
   <Career/>
   {/* <Testimonials/> */}
   <Contact/>
   </>
  );
}

export default App;
