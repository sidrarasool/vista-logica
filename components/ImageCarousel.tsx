"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

type ImageObject = {
  src: string
  title: string
  author: string
  description: string
  buttonText: string
}

const ImageCarousel: React.FC<{ images: ImageObject[] }> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></div>
    ),
  }
  return (
    <Slider {...settings} className="w-full ">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-[500px]">
          <Image
            src={image.src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-end md:items-center justify-end rounded-md">
            <div className="bg-gray-800 bg-opacity-70 text-white p-2 md:p-5 lg:p-12 w-full h-[50%] md:w-[40%] md:h-full flex flex-col">
              <h2 className="text-md md:text-xl lg:text-2xl font-semibold mb-1 md:mb-4">
                {image.title}
              </h2>
              <p className="mb-1 md:mb-6 text-xs md:text-sm">
                By <strong>{image.author}</strong>
              </p>
              <p className="mb-1 md:mb-6 text-xs md:text-sm">
                {image.description}
              </p>
              <button className="bg-transparent text-white px-2 md:px-4  py-1 md:py-2 border-2 rounded-md hover:shadow-sm w-max">
                {image.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default ImageCarousel
