import React, { FunctionComponent } from "react"


interface LargeCardProp{
  locationName: string;
  img: string;
}
const LargeCard: FunctionComponent<LargeCardProp> = ({locationName, img}) => {

  // https://links.papareact.com/4cj
  return (
    <div className="relative mt-16">
      <div className="relative h-96 min-w-[300px]">
        <img
          src={'https://links.papareact.com/4cj'}
          alt={``}
          className="rounded-lg object-cover h-96 w-full"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-3">The Greatest Outdoors</h3>
        <p>Wishlist curated by Airbnb</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          Get inspired
        </button>
      </div>
    </div>
  )
}

export default LargeCard
