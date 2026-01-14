import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { IoCartOutline } from 'react-icons/io5';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = ({location}) => {
  const [cartCount, setCartCount] = useState(0); 

  return (
    <div className="bg-white py-3 shadow-2xl px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo + Address */}
        <div className="flex gap-6 items-center">
          <Link to="/">
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>

          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? `${location.county}, ${location.state}` : "Add Address"}
            </span>
          </div>
        </div>

        {/* NavLinks + Cart + User */}
        <nav className="flex gap-6 items-center">
          <ul className="hidden md:flex gap-6 items-center text-lg font-semibold">
            {["/", "/products", "/about", "/contact"].map((path, i) => {
              const labels = ["Home", "Products", "About", "Contact"];
              return (
                <NavLink
                  key={i}
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-red-500" : "text-black"
                  }
                >
                  <li>{labels[i]}</li>
                </NavLink>
              );
            })}
          </ul>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7" />
            {cartCount > 0 && (
              <span className="bg-red-500 rounded-full px-2 py-0.5 absolute -top-3 -right-2 text-white text-xs">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Clerk Sign In / User */}
          <div>
            <SignedOut>
              <SignInButton>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
