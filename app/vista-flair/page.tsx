import Footer from "@/components/Footer"
import Header from "@/components/Header"

import HorizontalBlogCard from "@/components/HorizontalBlogCard" // Import the HorizontalBlogCard component
import BlogCard from "@/components/BlogCard"
import ImageCarousel from "@/components/ImageCarousel"
import { format } from "date-fns"
import HorizontalBlogSection from "@/components/HorizontalBlogSection"

interface Blog {
  attributes: {
    featuredImage: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    title: string
    author: {
      data: {
        attributes: {
          name: string
        }
      }
    }
    summary: string
    slug: string
    createdAt: string
  }
}

interface BlogCardData {
  imageSrc: string
  title: string
  author: string
  description: string
  buttonLink: string
  date: string
}

const VistaFlair = async () => {
  const featuredBlogsReponse = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*&filters[isFeatured][$eq]=true`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  )
  const { data: featuredBlogs } = await featuredBlogsReponse.json()

  const carouselImages = (featuredBlogs ?? []).map((blog: Blog) => ({
    src: `${blog.attributes.featuredImage.data.attributes.url}`,
    title: blog.attributes.title,
    author: blog.attributes.author.data.attributes.name,
    description: blog.attributes.summary,
    buttonLink: `/vista-flair/${blog.attributes.slug}`,
  }))

  // const notFeaturedBlogsReponse = await fetch(
  //   `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*&filters[isFeatured][$eq]=false`,
  //   { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  // )
  // const { data: notFeaturedbBlogs } = await notFeaturedBlogsReponse.json()

  const allBlogsReponse = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*`,
    { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } }
  )

  const { data: allBlogs } = await allBlogsReponse.json()

  const blogData: BlogCardData[] = (allBlogs ?? []).map((blog: Blog) => ({
    imageSrc: `${blog.attributes.featuredImage.data.attributes.url}`,
    title: blog.attributes.title,
    author: blog.attributes.author.data.attributes.name,
    description: blog.attributes.summary,
    buttonLink: `/vista-flair/${blog.attributes.slug}`,
    date: format(new Date(blog.attributes.createdAt), "dd/MM/yyyy"),
  }))

  const blogCards: BlogCardData[] = (featuredBlogs ?? []).map((blog: Blog) => ({
    image: `${blog.attributes.featuredImage.data.attributes.url}`,
    title: blog.attributes.title,
    author: blog.attributes.author.data.attributes.name,
    description: blog.attributes.summary,
    buttonLink: `/vista-flair/${blog.attributes.slug}`,
    date: format(new Date(blog.attributes.createdAt), "dd/MM/yyyy"),
  }))

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between overflow-x-hidden bg-white">
      <Header backgroundColor="#FFF" />
      <div className="w-[90%] md:w-3/4 mx-5 md:mx-24 mb-16 mt-28 flex flex-col items-center rounded-md">
        <ImageCarousel images={carouselImages} />
      </div>
      <HorizontalBlogSection blogCards={blogCards} />
      <div className="w-3/4 mx-24 mb-16">
        <div className="flex  items-center mb-4">
          <h2 className="text-xl font-semibold">
            Flairs you might have missed
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog: any, index: number) => (
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
      </div>
      <Footer />
    </div>
  )
}

export default VistaFlair
