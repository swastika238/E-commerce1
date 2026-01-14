import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";

// Import page components
import Home from "./page/Home";
import Products from "./page/Product";
import About from "./page/About";
import Contact from "./page/Contact";
import Cart from "./page/Cart";

function App() {
  // Function to get user location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude);

        try {
          const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
          const response = await axios.get(url);
          const exactLocation = response.data.display_name;
          console.log("Exact Location:", exactLocation);
          // You can now pass this exactLocation to your Navbar via state or context
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-5">
        <h1 className="text-2xl font-bold">Welcome to Zaptro!</h1>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
