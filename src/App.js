import { Route, Routes, Outlet, } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Home from "./components/Home";

import Login from "./layouts/Login";
import Register from "./layouts/Register";
import MissionVission from "./components/MissionVission";
import Achievement from "./components/Achievement";
// import Partner from "./components/Partner";
import Footer from "./components/Footer";
// import Form from "./components/Form";
// import Testimonials from "./components/Testimonials";
// import Career from "./components/Career";
// import Client from "./components/Client";


function App() {
  return (
    <>
    
    
   
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About/>
              <Services />
              <Achievement/>
              <MissionVission/>
              {/* <Client/> */}
              {/* <Partner/> */}
              {/* <Career /> */}
              <Contact />
              <Outlet />
              
            </>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <About/>
              <Services />
              <Achievement/>
              <MissionVission/>
              {/* <Client/> */}
              {/* <Partner/> */}
              {/* <Career /> */}
              <Contact />
              <Outlet />
            </>
          }
        ></Route>
        <Route
          element={
            <>
              <Navbar />
              
             <Outlet />
             
              
            </>
          }
        >
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/career" element={<Career />}></Route> */}
          
          {/* <Route path="/client" element={<Client />}></Route> */}
          {/* <Route path="/partner" element={<Partner />}></Route> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        
      </Routes>
      {/* <Form/> */}
      <Footer/>
      
    </>
  );
}

export default App;
