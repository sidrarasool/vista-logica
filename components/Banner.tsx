import React from "react"

const Banner: React.FC = () => {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/banner_image.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative z-10 max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-4xl lg:text-4xl font-semibold">
          Optimizing business outcomes throughExceptional Services and
          Innovative Solutions
        </h2>
        <p className="mt-5 text-white text-sm md:text-md max-w-2xl text-center">
          Utilise analytics and technology to redefine industry standards with
          tailored solutions and unparalleled expertise
        </p>
      </div>
    </div>
  )
}

export default Banner
