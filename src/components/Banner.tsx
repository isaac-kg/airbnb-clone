const Banner = () => {
  
  return (
    <div className="relative">
      <img 
      // src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"}
       src={"https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"}
       alt="user"
       className="object-cover h-[300px] sm:h-[400px] w-screen"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
       <button className="rounded-full px-10 py-3 text-purple-500 bg-white font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner;