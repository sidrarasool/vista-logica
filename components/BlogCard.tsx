import React from "react"
import Image from "next/image"

interface BlogCardProps {
  image: string
  title: string
  description: string
  date: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  date,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full border">
      <Image
        src={image}
        alt={title}
        width={600}
        height={200}
        className="object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-[15rem]">
        <div>
          <h3 className="text-l text-[#011021] font-semibold mb-2">{title}</h3>
          <p className="text-[#011021] text-sm mb-4">
            By <span className="font-medium">Sidra Rasool</span>
          </p>
          <p className="text-gray-700 mb-4 text-sm">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-[#589CE7] hover:underline text-sm">
            Read more &rarr;
          </a>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
