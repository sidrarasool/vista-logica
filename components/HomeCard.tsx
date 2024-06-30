import React from "react"
import Image from "next/image"
import CircledTickIcon from "../public/assets/circled_tick.svg"

interface CardProps {
  imageSrc: string
  heading: string
  items: string[]
  description: string
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  heading,
  items,
  description,
}) => {
  return (
    <div className="border rounded-lg p-6 max-w-md mx-auto">
      <div className="flex justify-center">
        <Image
          src={imageSrc}
          alt={heading}
          width={200}
          height={200}
          className="mb-4"
        />
      </div>
      <h2 className="text-xl font-semibold text-center mb-4 text=[#011021]">
        {heading}
      </h2>
      <p className="text-sm text-[#4D5763] text-wrap text-center w-[15rem] pb-4">
        {description}
      </p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex ">
            <CircledTickIcon className="mr-2" />
            <span className="text-sm text-[#011021] w-[12rem] text-wrap">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
