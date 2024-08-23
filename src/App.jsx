import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Login from "./pages/Login.jsx"
import Footer from "./components/Footer.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";




const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Navbar/>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      <Footer/>
      </Router> 
    </>
  );
};

export default App;
