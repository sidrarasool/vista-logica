import Image from "next/image"

const PromoSection = () => {
  return (
    <section className="bg-gray-900 text-white py-6 md:pt-12 md:pb-20 w-full">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center flex-wrap">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 px-2 md:px-[3.5rem]">
          <p className="text-[#3E8DE3] font-semibold text-md mt-10 mb-5 text-center lg:text-left">
            Why choose us?
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
            Serving foresight and precision with a side of creativity.
          </h2>

          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="w-10 h-10 lg:w-6 lg:h-6 bg-[#3E8DE3] mr-4 mt-2"></div>
              <div className="flex flex-col justify-center lg:items-start">
                <h3 className="text-lg md:text-xl font-semibold text-center lg:text-left">
                  Lead the curve
                </h3>
                <p className="text-sm md:text-md text-center lg:text-left">
                  March on an upward trajectory with innovative strategies and
                  seamless integration.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row  items-center lg:items-start">
              <div className="w-10 h-10 lg:w-6 lg:h-6 bg-[#3E8DE3] mr-4 mt-2"></div>
              <div className="flex flex-col justify-center lg:items-start">
                <h3 className="text-lg md:text-xl font-semibold text-center lg:text-left">
                  The extra mile
                </h3>

                <p className="text-sm md:text-md text-center lg:text-left">
                  Exceed every expectation with a creative and comprehensive
                  customer-centric approach.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row  items-center lg:items-start">
              <div className="w-10 h-10 lg:w-6 lg:h-6 bg-[#3E8DE3] mr-4 mt-2"></div>
              <div className="flex flex-col justify-center lg:items-start">
                <h3 className="text-lg md:text-xl font-semibold text-center lg:text-left">
                  Collaborate for Excellence
                </h3>
                <p className="text-sm md:text-md text-center lg:text-left">
                  Customise your tale to success with outcome based deliveries
                  and dedicated support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center p-8">
          <div className="relative w-full flex justify-end md:pr-10">
            <div className="relative w-[22rem]">
              <Image
                src="/assets/marketing-1.png"
                alt="Team discussion"
                height={600}
                width={300}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute bottom-[-1rem] right-[5rem] z-10 transform translate-x-1/4 translate-y-1/4 bg-[#3E8DE3] text-white p-6">
              <p className="text:lg lg:text-xl text-wrap w-48">
                Transform your visions into reality with the right team at your
                disposal
              </p>
            </div>
            <div className="absolute bottom-[-10rem] left-[12rem] transform -translate-y-1/2 w-[13rem] ">
              <Image
                src="/assets/marketing-2.png"
                alt="Graphs and charts"
                height={400}
                width={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoSection
