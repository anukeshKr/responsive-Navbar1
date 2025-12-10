import React, { useState } from 'react';
// Assuming you have Twitter, UserRoundPen icons imported from a library like 'lucide-react'
import { Twitter, UserRoundPen, Menu, X } from 'lucide-react'; 

const ResponsiveNavbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 bg-white/40 shadow px-4 md:px-20">
      <div className="flex items-center justify-between h-full">
        {/* Logo - always visible */}
        <Twitter color="#0f54c2" size={36} />

        {/* Desktop Menu Links - Hidden on mobile (default) but visible from md screen size up */}
        <ul className="hidden md:flex gap-10 text-2xl cursor-pointer">
            <li className="hover:underline hover:underline-offset-6 text-emerald-600 font-medium">Home</li>
            <li className="hover:underline hover:underline-offset-6 text-emerald-600 font-medium">Product</li>
            <li className="hover:underline hover:underline-offset-6 text-emerald-600 font-medium">AboutUs</li>
            <li className="hover:underline hover:underline-offset-6 text-emerald-600 font-medium">Contact</li>
        </ul>
        
        {/* Desktop Profile Section - Hidden on mobile, visible from md up */}
        <div className="hidden md:block">
            {/* Replace `logIn` with your actual authentication state variable */}
            {/* {logIn ? <UserRoundPen size={36} className="text-gray-700"/> : (<div>SignIn/SignUp</div>)} */}
            <div>SignIn/SignUp</div> 
        </div>

        {/* Mobile Hamburger/Close Icon - Visible on mobile, hidden from md up */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={36} className="text-gray-700" /> : <Menu size={36} className="text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Conditional Rendering) */}
      {/* This div appears below the main navbar when open, covering the screen or dropping down */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg p-4">
          <ul className="flex flex-col gap-4 cursor-pointer">
            <li className="text-emerald-600 font-medium py-2 border-b">Home</li>
            <li className="text-emerald-600 font-medium py-2 border-b">Product</li>
            <li className="text-emerald-600 font-medium py-2 border-b">AboutUs</li>
            <li className="text-emerald-600 font-medium py-2 border-b">Contact</li>
          </ul>
          <div className="mt-4 py-2 border-t">
             {/* {logIn ? <UserRoundPen size={36} className="text-gray-700"/> : (<div>SignIn/SignUp</div>)} */}
             <div>SignIn/SignUp</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveNavbar;
