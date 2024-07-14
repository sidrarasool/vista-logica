// components/BlogSection.tsx

import React from "react"
import BlogCard from "./BlogCard"

const BlogSection: React.FC = async () => {
  const featuredBlogsReponse = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*&filters[isFeatured][$eq]=true`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  )
  const { data: featuredBlogsJSON } = await featuredBlogsReponse.json()

  const featuredBlogs = (featuredBlogsJSON ?? []).map((blog: any) => ({
    src: `${blog.attributes.featuredImage.data.attributes.url}`,
    title: blog.attributes.title,
    author: blog.attributes.author.data.attributes.name,
    description: blog.attributes.summary,
    buttonLink: blog.attributes.slug,
  }))

  return (
    <section className="pt-16 py-8 px-4 bg-white w-full flex flex-col items-center ">
      <div className="text-center mb-12">
        <p className="text-[#3E8DE3] font-semibold text-xl mb-5">VistaFlair</p>
        <h2 className="text-3xl font-semibold my-5">
          Hop aboard the thought leadership express
        </h2>
        <p className="text-center text-[#4D5763] text-sm mb-4 max-w-[37rem] mx-auto">
          Be accompanied by cross industry insights and visionary strategies in
          every compartment. Don’t let the train of thought leadership pass you
          by. Read all about the innovation that can lead your organisation full
          steam ahead.
        </p>
      </div>
      <div className="w-3/4 mx-24 mb-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog: any, index: number) => (
            <BlogCard
              key={index}
              image={blog.src}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              author={blog.author}
              buttonLink={blog.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
