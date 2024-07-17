"use client"
import React, { ChangeEvent, useState } from "react"
import HorizontalBlogCard from "./HorizontalBlogCard"

interface BlogCardData {
  imageSrc: string
  title: string
  author: string
  description: string
  buttonLink: string
  date: string
}

type Props = {
  blogCards: BlogCardData[]
}

const HorizontalBlogSection = ({ blogCards }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredBlogs: BlogCardData[] = blogCards.filter(
    (card: BlogCardData) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.author.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div className="w-3/4 mx-24 mb-16">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-y-1 items-center mb-4">
        <h2 className="text-xl font-semibold">Flairs in focus</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog"
            className="px-4 py-2 border rounded-3xl"
            onChange={handleSearchChange}
            value={searchTerm}
          />
          <div className="w-8 h-8 absolute m-[0.35rem] py-[0.25rem] pl-[0.5rem] right-0 top-0 rounded-[50%] bg-[#589CE7] text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      {filteredBlogs.map((card: any, index: number) => (
        <HorizontalBlogCard
          key={index}
          imageSrc={card.image}
          title={card.title}
          author={card.author}
          description={card.description}
          buttonLink={card.buttonLink}
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
  )
}

export default HorizontalBlogSection
