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
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 `}>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {backgroundColor ? (
              <VistaLogoHorizontalBlack />
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
              } px-3 py-2 rounded-lg border-white border-2 text-sm font-medium hover:bg-[#3E8DE3] hover:border-none box-border`}
            >
              <PhoneIcon className="mr-1" />
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
