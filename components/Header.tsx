"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import VistaLogoHorizontal from "../public/assets/vista_logo_horizontal.svg"
import VistaLogoHorizontalBlack from "../public/assets/horizontal_logo_black.svg"
import PhoneIcon from "../public/assets/phone.svg"

interface HeaderProps {
  backgroundColor?: string
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        backgroundColor ? "border-b-[1px] border-[#CAD3DD]" : ""
      }`}
      style={{
        backgroundColor:
          backgroundColor ||
          (isScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"),
      }}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="w-24 md:w-48">
            {backgroundColor ? (
              <VistaLogoHorizontalBlack classname="w-24" />
            ) : (
              <VistaLogoHorizontal />
            )}
          </div>
          <div className="hidden md:flex md:justify-center ml-10">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/"
                className={`${
                  backgroundColor ? "text-[#011021]" : "text-white"
                } hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`${
                  backgroundColor ? "text-[#011021]" : "text-white"
                } hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Services
              </Link>
              <Link
                href="/vista-flair"
                className={`${
                  backgroundColor ? "text-[#011021]" : "text-white"
                } hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium`}
              >
                VistaFlair
              </Link>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <Link
              href="/contact"
              className={`flex items-center text-white ${
                backgroundColor ? "bg-[#3E8DE3]" : "bg-transparent"
              } px-3 py-2 rounded-lg border-white border-2 text-xs md:text-sm font-medium hover:bg-[#3E8DE3] hover:border-none box-border`}
            >
              <PhoneIcon className="mr-1 font-xs md:font-sm" />
              Get in touch
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                backgroundColor ? "text-[#011021]" : "text-white"
              } focus:outline-none`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden w-full flex flex-row justify-end bg-transparent h-screen">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white w-[40%]">
            <Link
              href="/"
              className="block text-[#011021] px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-[#011021] px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/vista-flair"
              className="block text-[#011021] px-3 py-2 rounded-md text-base font-medium"
            >
              VistaFlair
            </Link>
            <Link
              href="/contact"
              className="block text-[#011021] px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
