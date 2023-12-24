import React, { FunctionComponent } from "react"
import ExploreData from "../intefaces/ExploreData.modal";
import Image from "next/image";

const SmallCard:FunctionComponent<ExploreData> = (props) => {
  return (
		<div className="flex items-center gap-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform ease-out m-2 mt-5">
			<div className="relative h-16 w-16">
				<Image 
					src={`${props.img}`} 
					alt={`${props.location}`} 
					fill
					style={{objectFit: "cover"}}
					className="rounded-lg"
				/>
			</div>
			<div>
				<p>{props.location}</p>
				<p>{props.distance}</p>
			</div>
		</div>
	)
}

export default SmallCard;