// HorizontalBlogCard.tsx
import React from "react"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  imageSrc: string
  title: string
  author: string
  description: string
  buttonLink: string
  date: string
}

const HorizontalBlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  author,
  description,
  buttonLink,
  date,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8 p-4 border rounded-lg shadow-sm">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src={imageSrc}
          alt={title}
          width={600}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="w-full md:w-2/3 md:ml-5 ">
        <h2 className="text-lg md:text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-2 text-sm">
          By <strong>{author}</strong>
        </p>
        <p className="mb-4 text-sm">{description}</p>
        <div className="flex items-center justify-between">
          <Link href={buttonLink}>
            <p className="text-[#589CE7] text-sm">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </p>
          </Link>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default HorizontalBlogCard
