// src/components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Services", url: "/services" },
  { name: "Contact Us", url: "/contact-us" },
];

export const Navbar = () => {
  const [isSelected, setSelected] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (url, index) => {
    setSelected(index);
    navigate(url);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-primary w-full pt-6 pb-12">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="bg-white rounded-3xl shadow-lg p-4 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="NESICO Logo"
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <h1 className="font-bold text-xl text-primary">NESICO</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.url, index)}
                className={`font-medium transition-colors cursor-pointer ${
                  isSelected === index
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} className="text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-24 left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl overflow-hidden md:hidden z-40">
            {navLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.url, index)}
                className={`block w-full text-left px-8 py-4 font-medium transition-colors ${
                  isSelected === index
                    ? "text-primary bg-red-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
