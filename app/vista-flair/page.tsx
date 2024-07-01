import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

import HorizontalBlogCard from "@/components/HorizontalBlogCard" // Import the HorizontalBlogCard component
import BlogCard from "@/components/BlogCard"
import ImageCarousel from "@/components/ImageCarousel"

const VistaFlair = () => {
  const carouselImages = [
    {
      src: "/assets/carousel1.png",
      title:
        "Title 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Sidra Rasool",
      description:
        "Description 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      buttonText: "Read more",
    },
    {
      src: "/assets/carousel2.png",
      title:
        "Title 2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Sidra Rasool",
      description:
        "Description 2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      buttonText: "Read more",
    },
    {
      src: "/assets/carousel3.png",
      title:
        "Title 3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Sidra Rasool",
      description:
        "Description 3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      buttonText: "Read more",
    },
  ]

  const blogCards = [
    {
      imageSrc: "/assets/blog4.png",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Sidra Rasool",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      date: "12/12/2024",
    },
    {
      imageSrc: "/assets/blog5.png",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Sidra Rasool",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      date: "12/12/2024",
    },
    {
      imageSrc: "/assets/blog6.png",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Sidra Rasool",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      date: "12/12/2024",
    },
  ]
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
    {
      image: "/assets/blog4.png",
      title: "Types of Blogs",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.",
      date: "12/12/2024",
    },
    {
      image: "/assets/blog5.png",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.",
      date: "12/12/2024",
    },
    {
      image: "/assets/blog6.png",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.",
      date: "12/12/2024",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between overflow-x-hidden bg-white">
      <Header backgroundColor="#FFF" />
      <div className="w-[90%] md:w-3/4 mx-5 md:mx-24 mb-16 mt-28 flex flex-col items-center rounded-md">
        <ImageCarousel images={carouselImages} />
      </div>
      <div className="w-3/4 mx-24 mb-16">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-y-1 items-center mb-4">
          <h2 className="text-xl font-semibold">Flairs in focus</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search blog"
              className="px-4 py-2 border rounded-3xl"
            />
            <div className="w-8 h-8 absolute m-[0.35rem] py-[0.25rem] pl-[0.5rem] right-0 top-0 rounded-[50%] bg-[#589CE7] text-white">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        {blogCards.map((card, index) => (
          <HorizontalBlogCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            author={card.author}
            description={card.description}
            date={card.date}
          />
        ))}
        <div className="w-full flex justify-center items-center gap-x-4">
          <button className="border-[1px] border-[#CAD3DD] rounded-md px-3 py-2 text-[#CAD3DD] hover:text-[#4D5763]">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="border-[1px] border-[#CAD3DD] rounded-md px-3 py-2 text-[#CAD3DD] hover:text-[#4D5763]">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="w-3/4 mx-24 mb-16">
        <div className="flex  items-center mb-4">
          <h2 className="text-xl font-semibold">Flairs in focus</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <Footer />
    </div>
  )
}

export default VistaFlair
