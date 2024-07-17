import React from "react"
import Link from "next/link"

interface BlogCardProps {
  image: string
  title: string
  author: string
  description: string
  date: string
  buttonLink: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  author,
  description,
  date,
  buttonLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full border">
      <img src={image} alt={title} className="object-cover h-[13rem] w-full" />
      <div className="p-4 flex flex-col justify-between h-[15rem]">
        <div>
          <h3 className="text-l text-[#011021] font-semibold mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-[#011021] text-sm mb-4">
            By <span className="font-medium">{author}</span>
          </p>
          <p className="text-gray-700 mb-4 text-sm line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={buttonLink}
            className="text-[#589CE7] hover:underline text-sm"
          >
            Read more &rarr;
          </Link>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
