// components/Footer.tsx
"use client"
import React from "react"
import VistaVerticalLogo from "../public/assets/vista_logo_vertical.svg"
import LocationPinIcon from "../public/assets/location_pin.svg"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full h-max">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 px-2">
        <div className="flex flex-col items-start space-y-4 ">
          <VistaVerticalLogo />
          <div className="flex mt-2">
            <LocationPinIcon className="mr-2" />
            <p>Melbourne, Australia</p>
          </div>
        </div>
        <div className="flex flex-col md:items-start space-y-4">
          <h5 className="font-bold text-white">Navigation</h5>
          <a href="/" className="hover:underline text-white">
            Home
          </a>
          <a href="/services" className="hover:underline text-white">
            Services
          </a>
          <a href="/vista-flair" className="hover:underline text-white">
            VistaFlair
          </a>
        </div>
        <div className="flex flex-col md:items-start space-y-4">
          <a href="/contact" className="hover:underline text-white">
            <h5 className=" text-white">Get in touch</h5>
          </a>
          <a href="/privacy-policy" className="hover:underline text-white">
            <h5 className=" text-white">Privacy policy</h5>
          </a>{' '}
          {/* Add any additional contact info here if needed */}
        </div>
        <div className="flex flex-col items-start md:items-center space-y-4">
          <h5 className="font-bold text-white">Social Links</h5>
          <div className="flex mt-2 space-x-4">
            <Link href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/company/vistalogicai/"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex justify-center mx-auto mt-10 border-t border-gray-700 pt-6 space-x-6 px-2">
        <p className=" text-sm">
          &copy; Vista Logica Pty Ltd. 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
