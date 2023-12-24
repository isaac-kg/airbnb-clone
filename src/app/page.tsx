import Image from 'next/image'
import Header from './components/Header';
import Banner from './components/Banner';
import ExploreData from './intefaces/ExploreData.modal';
import SmallCard from './components/ExploreCard';

export default function Home() {
  const exploreData: ExploreData[]= [{
    img: "/service_nails.jpg",
    location: "London",
    distance: "45-minute drive"
  },{
    img: "/chole.jpg",
    location: "Manchester",
    distance: "4.5-hour drive"
  },{
    img: "/service_makeup.jpg",
    location: "Liverpool",
    distance: "4.5-hour drive"
  },{
    img: "/theone.jpg",
    location: "York",
    distance: "4-hour drive",
  },{
    img: "/nails.jpg",
    location: "Manchester",
    distance: "4.5-hour drive"
  },{
    img: "/makeup.jpg",
    location: "Liverpool",
    distance: "4.5-hour drive"
  },{
    img: "/cosmetics.jpg",
    location: "York",
    distance: "4-hour drive",
  }]

  const cardData = [

  ]

  return (
    <main>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/**Pull data from the server
           * we have static rendering 
           * and server side rendering
           */}

          {/* / {exploreData?.map(item: any) => (<h1>{ClipboardItem.location}</h1>)} */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData.map((item: ExploreData , index: number) => {
                return <SmallCard
                  key={index}
                  location={item.location}
                  distance={item.distance}
                  img={item.img}
                />
              })
            }          
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8"> Live Anywhere</h2>

        </section>
        
      </main>
    </main>
  )
}

