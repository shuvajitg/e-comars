import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import AddtoCard from "./components/AddtoCard.jsx";
import Wishlists from "./components/Wishlists.jsx";
import { createContext, useState } from "react";
import useProduct from "./hooks/product.js";
import ProductDetailsFromParams from "./pages/DetailsFromId.jsx";
import Sucess from "./pages/Sucess.jsx";
import Cancle from "./pages/Cancle.jsx";
import { Toaster } from "react-hot-toast";

export const Context = createContext()
const App = () => {
  const [details, setDetails] = useState("")
  const { productData } = useProduct();
  const productId = productData?.data?.map((product) => product.id)
  

  return (
    <Context.Provider value={[details, setDetails]}>
    <Toaster/>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<About />} />
          <Route path={`/product/:id`} element={<ProductDetailsFromParams/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<AddtoCard />} />
          <Route path="/wishlist" element={<Wishlists />} />
          <Route path="/success" element={<Sucess />} />
          <Route path="/cancel" element={<Cancle />} />
        </Routes>
        <Footer />
      </Router>
    </Context.Provider>
  );
};

export default App;
