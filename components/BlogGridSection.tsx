"use client"
import React, { useState } from "react"
import BlogCard from "./BlogCard"

interface BlogCardData {
  imageSrc: string
  title: string
  author: string
  description: string
  buttonLink: string
  date: string
}

type Props = {
  blogData: BlogCardData[]
}

const BlogGridSection = ({ blogData }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6; // 2 rows x 3 columns

  // Calculate pagination
  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = blogData.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-3/4 mx-24 mb-16">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">
          Flairs you might have missed
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog: any, index: number) => (
          <BlogCard
            key={index}
            image={blog.imageSrc}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            author={blog.author}
            buttonLink={blog.buttonLink}
          />
        ))}
      </div>
      
      {blogData.length > 0 && (
        <div className="w-full flex justify-center items-center gap-x-2 mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`border-[1px] border-[#CAD3DD] rounded-md px-3 py-2 ${
              currentPage === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-[#CAD3DD] hover:text-[#4D5763] hover:border-[#4D5763]'
            }`}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="flex items-center gap-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-2 rounded-md ${
                  currentPage === page
                    ? 'bg-[#589CE7] text-white'
                    : 'text-[#4D5763] hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`border-[1px] border-[#CAD3DD] rounded-md px-3 py-2 ${
              currentPage === totalPages
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-[#CAD3DD] hover:text-[#4D5763] hover:border-[#4D5763]'
            }`}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGridSection;

