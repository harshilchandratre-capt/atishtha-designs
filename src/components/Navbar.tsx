"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const [isVisible, setIsVisible] = useState(true); // State for navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Track previous scroll position
  const [isMobile, setIsMobile] = useState(false); // State for mobile screen check

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsVisible(true); // Always show navbar on mobile
      return; // Exit the effect early
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY; // Get current scroll position
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsVisible(isScrollingUp || currentScrollPos < 10); // Show nav if scrolling up or near top
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isMobile]);

  return (
    <nav
      className={`bg-dark h-max fixed top-0 left-0 right-0 z-30 transition-transform duration-300 border-b-2 border-dark ${
        isMobile || isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-10 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-light flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/logo.svg" alt="Atishtha Designs Logo" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-normal font-light">Atishtha Designs</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-light  hover:text-gray-400">
            Home
          </Link>
          <Link href="/services" className="text-light hover:text-gray-400">
            Services
          </Link>
          <Link href="/portfolio" className="text-light hover:text-gray-400">
            Projects
          </Link>
          <Link href="/about" className="text-light hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="text-light hover:text-gray-400">
            Contact
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-light hover:text-gray-400 cursor-pointer">
              Open
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 bg-white font-light rounded-xl">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-light text-xl p-2"
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[60%] bg-dark text-light transform transition-transform duration-300 z-40 md:w-64 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={toggleMenu}
            className="text-light text-xl hover:text-gray-600 mb-4 transition-transform duration-300 hover:rotate-[360deg]"
          >
            <i className="ri-close-line"></i>
          </button>

          <nav className="flex flex-col gap-4 text-xl">
            <Link href="/" className="text-light hover:text-gray-600">
              Home
            </Link>
            <Link href="/services" className="text-light hover:text-gray-600">
              Services
            </Link>
            <Link href="/portfolio" className="text-light hover:text-gray-600">
              Projects
            </Link>
            <Link href="/about" className="text-light hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="text-light hover:text-gray-600">
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-light hover:text-gray-600 cursor-pointer">
                Open
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-4 bg-white font-light">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {/* {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )} */}
    </nav>
  );
};

export default Navbar;
