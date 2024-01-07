import { useEffect } from "react"
import "./App.css"
import Banner from "./components/Banner"
import SmallCard from "./components/ExploreCard"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LargeCard from "./components/LargeCard"
import ResidenceCard from "./components/ResidenceCard"
import ExploreData from "./intefaces/ExploreData.modal"

function App() {


  // useEffect (() => {
  //   axios
  // }, [])
  // const exploreData: ExploreData[] = [
  //   {
  //     img: "/service_nails.jpg",
  //     location: "London",
  //     distance: "45-minute drive",
  //   },
  //   {
  //     img: "/chole.jpg",
  //     location: "Manchester",
  //     distance: "4.5-hour drive",
  //   },
  //   {
  //     img: "/service_makeup.jpg",
  //     location: "Liverpool",
  //     distance: "4.5-hour drive",
  //   },
  //   {
  //     img: "/theone.jpg",
  //     location: "York",
  //     distance: "4-hour drive",
  //   },
  //   {
  //     img: "/nails.jpg",
  //     location: "Manchester",
  //     distance: "4.5-hour drive",
  //   },
  //   {
  //     img: "/makeup.jpg",
  //     location: "Liverpool",
  //     distance: "4.5-hour drive",
  //   },
  //   {
  //     img: "/cosmetics.jpg",
  //     location: "York",
  //     distance: "4-hour drive",
  //   },
  // ]

  //API https://links.papareact.com/pyp or https://www.jsonkeeper.com/b/4G1G
  const exploreData: ExploreData[] = [{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},{"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},{"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},{"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},{"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}]

  // https://links.papareact.com/zp1
  const cardData = [...[{"img":"https://links.papareact.com/2io","title":"Outdoor getaways"},{"img":"https://links.papareact.com/q7j","title":"Unique stays"},{"img":"https://links.papareact.com/s03","title":"Entire homes"},{"img":"https://links.papareact.com/8ix","title":"Pet allowed"}]]

  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore</h2>

          {/**Pull data from the server
           * we have static rendering
           * and server side rendering
           */}

          {/* / {exploreData?.map(item: any) => (<h1>{ClipboardItem.location}</h1>)} */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item: ExploreData, index: number) => {
              return (
                <SmallCard
                  key={index}
                  location={item.location}
                  distance={item.distance}
                  img={item.img}
                />
              )
            })}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8"> Live Anywhere</h2>
          <div className="flex gap-x-4 overflow-scroll overflow-y-hidden scrollbar-hide p-3 -ml-3">
            {
              /*1:45* to hide scroll bar*/
              cardData.map((data: any, index: number) => {
                return (
                  <ResidenceCard
                    key={index}
                    locationName={data.title}
                    img={data.img}
                  />
                )
              })
            }
          </div>
        </section>
        <LargeCard />
      </main>
      <Footer />
    </div>
  )
}

export default App
