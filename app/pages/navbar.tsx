"use client";
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tabs from "../comps/nav/tabs";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 py-1 z-50 w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-3 md:px-20">
        <div className="logo w-16 h-16 md:w-20 md:h-20">
          <img src="/logo/favicon.ico" alt="Logo" className="w-full h-full object-cover" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="block md:hidden text-3xl" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>

        {/* Full Nav for Desktop */}
        <nav className="hidden md:flex">
          <Tabs />
        </nav>
      </div>

      {/* Smooth slide-in mobile menu */}
      <div
        className={`${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="flex justify-end p-5">
          <button className="text-3xl" onClick={toggleMenu}>
            <i className="bi bi-x"></i>
          </button>
        </div>
        <nav className="flex flex-col items-center mt-10 space-y-5">
          <Tabs />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
