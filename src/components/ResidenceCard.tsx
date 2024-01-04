import React, { FunctionComponent } from "react"

const ResidenceCard: FunctionComponent = (props: any) => {
  const { locationName, img } = props

  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300">
      <div className="relative h-80 w-80">
        <img src={`${img}`} alt={``} className="rounded-lg object-cover w-full h-80" />
      </div>
      <h3 className="text-2xl mt-2">{locationName}</h3>
    </div>
  )
}

export default ResidenceCard
