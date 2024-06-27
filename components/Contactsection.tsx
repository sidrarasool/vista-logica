// components/ContactSection.tsx

import Link from "next/link"
import React from "react"
import PhoneIcon from "../public/assets/phone.svg"

const ContactSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 flex flex-col items-center w-full p-5">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4 font">
        Ready to lead the digital evolution?
      </h2>
      <p className="text-center text-[#4D5763] text-sm mb-8 max-w-[37rem] mx-auto font-poppins">
        The time to ensure that digital selection doesn’t leave you behind is
        now.
      </p>
      <Link
        href="/contact"
        className="flex items-center text-white  px-3 py-2 rounded-md border-2 text-sm font-medium bg-[#3E8DE3] border-none"
      >
        <PhoneIcon className="mr-1" />
        Reach out
      </Link>
    </section>
  )
}

export default ContactSection
