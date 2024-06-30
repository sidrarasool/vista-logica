// components/Footer.tsx
"use client"
import React from "react"
import VistaVerticalLogo from "../public/assets/vista_logo_vertical.svg"
import Facebook from "../public/assets/facebook.svg"
import Instagram from "../public/assets/instagram.svg"
import Twitter from "../public/assets/twitter.svg"
import Xapp from "../public/assets/x.svg"
import LinkedIn from "../public/assets/linkedIn.svg"
import LocationPinIcon from "../public/assets/location_pin.svg"

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
          <a href="/vista-flair" className="hover:underline text-white">
            <h5 className=" text-white">Get in touch</h5>
          </a>
          <a href="/privacy-policy" className="hover:underline text-white">
            <h5 className=" text-white">Privacy policy</h5>
          </a>
          {/* Add any additional contact info here if needed */}
        </div>
        <div className="flex flex-col items-start md:items-center space-y-4">
          <h5 className="font-bold text-white">Social Links</h5>
          <div className="flex mt-2 space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Xapp />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <div className="container flex justify-center mx-auto mt-10 border-t border-gray-700 pt-6 space-x-6 px-2">
        <p className=" text-sm">
          &copy; Vista Logica 2024. All rights reserved. |
          <a href="/privacy-policy" className="hover:underline">
            Privacy policy
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
