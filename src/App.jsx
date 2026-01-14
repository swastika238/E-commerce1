import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="p-5">
        <h1 className="text-2xl font-bold">Welcome to Zaptro!</h1>
      </div>

      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/products" element={<div>Products Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Routes>
    </>
  );
}

export default App;
