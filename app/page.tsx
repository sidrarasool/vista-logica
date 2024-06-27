"use client"
import Banner from "@/components/Banner"
import Header from "@/components/Header"
import { cardsContent } from "./utils/text"
import HomeCard from "@/components/HomeCard"
import MarketingSection from "@/components/MarketingSection"
import Footer from "@/components/Footer"
import ContactSection from "@/components/Contactsection"
import BlogSection from "@/components/BlogSection"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between overflow-x-hidden">
      <Header />
      <Banner />
      <div className="w-full p-5 flex flex-col items-center bg-white">
        <p className="text-[#3E8DE3] font-semibold text-md mt-10 mb-5">
          Our Services
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center">
          Extract Maximum Engagement with Elevated Solutions
        </h2>
        <p className="text-[#4D5763] text-sm md:text-md max-w-3xl mt-4 text-center md:px-10">
          Bringing immersive experiences for both your team and customers with
          our comprehensive suite of cloud, data, and digital solutions.
        </p>
        <div className="flex flex-wrap gap-3 justify-center items-center mt-8 w-full max-w-4xl">
          {cardsContent.map((card, index) => (
            <HomeCard
              key={index}
              imageSrc={card.imageSrc}
              heading={card.heading}
              items={card.items}
              description={card.description}
            />
          ))}
        </div>
        <div className="w-full flex justify-center py-4">
          <Link
            href="/services"
            className="flex items-center text-white  px-3 py-2 rounded-md border-2 text-sm font-medium bg-[#3E8DE3] border-none"
          >
            See all services
          </Link>
        </div>
      </div>
      <MarketingSection />
      <ContactSection />
      <BlogSection />
      <div className="w-full flex justify-center pb-8">
        <Link
          href="/vista-flair"
          className="flex items-center text-white  px-3 py-2 rounded-md border-2 text-sm font-medium bg-[#3E8DE3] border-none"
        >
          See all blogs
        </Link>
      </div>
      <Footer />
    </div>
  )
}
