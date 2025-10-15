import Footer from "@/components/Footer"
import Header from "@/components/Header"

import HorizontalBlogCard from "@/components/HorizontalBlogCard" // Import the HorizontalBlogCard component
import BlogCard from "@/components/BlogCard"
import ImageCarousel from "@/components/ImageCarousel"
import { format } from "date-fns"
import HorizontalBlogSection from "@/components/HorizontalBlogSection"

export const revalidate = 0

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
  try {
    const featuredBlogsReponse = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*&filters[isFeatured][$eq]=true`,
      { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } },
    );

    if (!featuredBlogsReponse.ok) {
      throw new Error(
        `Failed to fetch featured blogs: ${featuredBlogsReponse.status}`,
      );
    }

    const { data: featuredBlogs } = await featuredBlogsReponse.json();

    const carouselImages = (featuredBlogs ?? [])
      .filter((blog: any) => blog && blog.attributes)
      .map((blog: any) => ({
        src:
          blog.attributes.featuredImage?.data?.attributes?.url ||
          '/assets/placeholder-image.jpg',
        title: blog.attributes.title || 'Untitled',
        author:
          blog.attributes.author?.data?.attributes?.name || 'Unknown Author',
        description: blog.attributes.summary || 'No description available',
        buttonLink: `/vista-flair/${blog.attributes.slug || 'unknown'}`,
      }));

    const allBlogsReponse = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/blogs?populate=*`,
      { headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` } },
    );

    if (!allBlogsReponse.ok) {
      throw new Error(`Failed to fetch all blogs: ${allBlogsReponse.status}`);
    }

    const { data: allBlogs } = await allBlogsReponse.json();

    const blogData: BlogCardData[] = (allBlogs ?? [])
      .filter((blog: any) => blog && blog.attributes)
      .map((blog: any) => ({
        imageSrc:
          blog.attributes.featuredImage?.data?.attributes?.url ||
          '/assets/placeholder-image.jpg',
        title: blog.attributes.title || 'Untitled',
        author:
          blog.attributes.author?.data?.attributes?.name || 'Unknown Author',
        description: blog.attributes.summary || 'No description available',
        buttonLink: `/vista-flair/${blog.attributes.slug || 'unknown'}`,
        date: format(
          new Date(blog.attributes.createdAt || new Date()),
          'dd/MM/yyyy',
        ),
      }));

    const blogCards: BlogCardData[] = (featuredBlogs ?? [])
      .filter((blog: any) => blog && blog.attributes)
      .map((blog: any) => ({
        image:
          blog.attributes.featuredImage?.data?.attributes?.url ||
          '/assets/placeholder-image.jpg',
        title: blog.attributes.title || 'Untitled',
        author:
          blog.attributes.author?.data?.attributes?.name || 'Unknown Author',
        description: blog.attributes.summary || 'No description available',
        buttonLink: `/vista-flair/${blog.attributes.slug || 'unknown'}`,
        date: format(
          new Date(blog.attributes.createdAt || new Date()),
          'dd/MM/yyyy',
        ),
      }));

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
    );
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return (
      <div className="flex flex-col min-h-screen w-full items-center justify-between overflow-x-hidden bg-white">
        <Header backgroundColor="#FFF" />
        <div className="w-3/4 mx-24 mb-16 mt-28 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">VistaFlair</h1>
          <p className="text-red-500 text-center">
            Unable to load blogs at this time. Please try again later.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default VistaFlair
