import React, { FunctionComponent } from "react"
import ExploreData from "../intefaces/ExploreData.modal"

const SmallCard: FunctionComponent<ExploreData> = (props) => {
  return (
    <div className="flex items-center gap-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform ease-out m-2 mt-5">
      <div>
        <img
          src={`${props.img}`}
          alt={`${props.location}`}
          className="rounded-lg object-cover h-16 w-16"
        />
      </div>
      <div>
        <p>{props.location}</p>
        <p>{props.distance}</p>
      </div>
    </div>
  )
}

export default SmallCard
