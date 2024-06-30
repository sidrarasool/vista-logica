"use client"
import React, { useState } from "react"
import Image from "next/image"

interface Service {
  name: string
  icon: string
}

interface Tab {
  name: string
  services: Service[]
}

interface ServiceSectionProps {
  title: string
  description: string
  icon: string
  tabs: Tab[]
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  icon,
  tabs,
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].name)

  return (
    <div className="w-3/4 flex flex-col lg:flex-row bg-white rounded-lg border my-6">
      <div className="lg:w-1/4 flex flex-col items-center justify-center p-2 rounded-t-lg lg:rounded-t-none lg:rounded-l-lg  bg-[#011021]">
        <Image src={icon} alt={title} width={80} height={80} />
        <h2 className="text-lg font-semibold mt-4 text-white">{title}</h2>
      </div>
      <div className="lg:w-3/4 flex flex-col p-6">
        <h2 className="text-lg font-semibold mt-4">{title}</h2>
        <p className="text-[#4D5763] text-xs mt-4">{description}</p>
        <div className="flex overflow-x-scroll md:overflow-hidden space-x-2 mt-6 pb-2 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`py-1 md:py-2 px-4 shrink-0 rounded-3xl text-xs ${
                activeTab === tab.name
                  ? "bg-[#589CE7] text-white"
                  : "bg-transparent"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 mt-8">
          {tabs
            .find((tab) => tab.name === activeTab)
            ?.services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col items-center justify-between py-6 border border-gray-200 rounded-md w-max"
              >
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={35}
                  height={35}
                />
                <p className="mt-4 px-1 text-xs text-center text-[#4D5763] w-36">
                  {service.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
