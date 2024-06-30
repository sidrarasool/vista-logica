import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"
import Image from "next/image"
import BlogCard from "@/components/BlogCard"
import Facebook from "@/public/assets/facebook.svg"
import Instagram from "@/public/assets/instagram.svg"
import XApp from "@/public/assets/x.svg"
import LinkedIn from "@/public/assets/linkedIn.svg"

const blogData = [
  {
    image: "/assets/blog1.svg",
    title: "Types of Blogs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    date: "12/12/2024",
  },
  {
    image: "/assets/blog2.svg",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    date: "12/12/2024",
  },
  {
    image: "/assets/blog3.svg",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    date: "12/12/2024",
  },
]

const BlogDetail = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between overflow-x-hidden bg-white">
      <Header backgroundColor="#FFF" />
      <div className="w-screen mx-0 mt-16 flex flex-col items-center relative">
        <div
          className="relative w-full flex items-center justify-center text-center bg-cover bg-center py-12 h-[20rem]"
          style={{ backgroundImage: "url('/assets/blog_banner.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center md:items-start mx-0 md:mx-auto px-2 lg:px-5 py-3 ">
        <div className="w-full flex flex-col  bg-white md:w-2/3 rounded-lg shadow-lg p-2 md:p-8 mx-2 md:mx-4 md:mr-8 mt-1 md:mt-[-15rem] z-10">
          <div className="text-gray-500 text-sm mb-4">
            <span className="text-[#589CE7]">VistaFlair</span>{" "}
            {"> Flair reading"}
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold mb-4">
            Lorem Ipsum is simply dummy text of the printing and text is the
          </h1>
          <div className="text-gray-400 mb-6 w-full text-right">12/12/2024</div>

          <Image
            src="/assets/blog_banner.png"
            alt={`blog-image}`}
            width={600}
            height={400}
            className="rounded-md object-cover w-full"
          />

          <div className="text-sm md:text-lg leading-relaxed mt-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 pt-4">
          <aside className="w-full  mt-1 md:mt-0">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Share this blog</h2>
              <div className="flex justify-center space-x-3 md:space-x-1 lg:space-x-3 p-6 border rounded-lg">
                <a
                  href="#"
                  className="text-[#4D5763] text-xs flex flex-col items-center gap-y-2"
                >
                  <Facebook /> Facebook
                </a>
                <a
                  href="#"
                  className="text-[#4D5763] text-xs flex flex-col items-center gap-y-2"
                >
                  <Instagram />
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-[#4D5763] text-xs flex flex-col items-center gap-y-2"
                >
                  <XApp /> X
                </a>
                <a
                  href="#"
                  className="text-[#4D5763] text-xs flex flex-col items-center gap-y-2"
                >
                  <LinkedIn /> LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Flairs you might have missed
              </h2>
              <div className="flex flex-col space-y-4">
                {blogData.map((blog, index) => (
                  <BlogCard
                    key={index}
                    image={blog.image}
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogDetail
