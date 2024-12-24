import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import Testimonials from "./components/Testimonials";
import Client from "./components/Client";
import Partner from "./components/Partner";
import Partner_FP from "./components/Partner_FP";


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
              <About />
              <Client/>
              <Partner/>
              <Career />
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
              <About />
              <Client/>
              <Partner/>
              <Career />
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
              <Contact />
            </>
          }
        >
          <Route path="/about" element={<About />}></Route>
          <Route path="/career" element={<Career />}></Route>
          
          <Route path="/client" element={<Client />}></Route>
          <Route path="/partner" element={<Partner />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/partner_fp" element={<Partner_FP />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
      
    </>
  );
}

export default App;
