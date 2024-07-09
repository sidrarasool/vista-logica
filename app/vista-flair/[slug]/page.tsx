import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"
import Image from "next/image"
import BlogCard from "@/components/BlogCard"
import Facebook from "@/public/assets/facebook.svg"
import Instagram from "@/public/assets/instagram.svg"
import XApp from "@/public/assets/x.svg"
import LinkedIn from "@/public/assets/linkedIn.svg"
import { format } from "date-fns"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

type Props = {
  params: { slug: string }
}

const BlogDetail = async ({ params }: Props) => {
  const blogResponse = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*&filters[slug][$eq]=${params.slug}`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  )
  const { data: blogs } = await blogResponse.json()
  if (blogs.length === 0) return <div>Blog not found</div>

  const blog = blogs[0]

  const featuredBlogsReponse = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*&filters[isFeatured][$eq]=true`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  )
  const { data: featuredBlogsJSON } = await featuredBlogsReponse.json()

  const featuredBlogs = (featuredBlogsJSON ?? []).map((blog: any) => ({
    slug: blog.attributes.slug,
    src: `${process.env.STRAPI_BASE_URL}${blog.attributes.featuredImage.data.attributes.formats.medium.url}`,
    title: blog.attributes.title,
    author: blog.attributes.author,
    description: blog.attributes.summary,
    buttonLink: blog.attributes.slug,
  }))

  console.log(JSON.stringify(blog.attributes.content))

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
            {blog.attributes.title}
          </h1>
          <div className="text-gray-400 mb-6 w-full text-right">
            {format(new Date(blog.attributes.createdAt), "dd/MM/yyyy")}
          </div>

          <img
            src={`${process.env.STRAPI_BASE_URL}${blog.attributes.featuredImage.data.attributes.formats.medium.url}`}
            alt={blog.attributes.title}
            width={600}
            height={400}
            className="rounded-md object-cover w-full"
          />

          <div className="text-sm md:text-lg leading-relaxed mt-6">
            <BlocksRenderer content={blog.attributes.content} />
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
                {featuredBlogs.map((blog: any) => (
                  <BlogCard
                    key={blog.slug}
                    image={blog.src}
                    title={blog.title}
                    author={blog.author}
                    description={blog.description}
                    date={blog.date}
                    buttonLink={blog.buttonLink}
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
