import React, { useState } from "react"
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid"

const Header = () => {
  const [searchText, setSearchText] = useState<string>("")
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex h-10 items-center">
        <img
          alt="airbnb-logo"
          src="/airbnbimage.png"
          className="object-contain object-left md:w-full lg:w-1/2 h-full"
        />
      </div>

      <div className="border-2 flex p-2 rounded-full items-center bg-slate-200">
        <input
          className="flex-grow outline-none pl-5 bg-transparent"
          type="text"
          placeholder="Start your search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <MagnifyingGlassIcon className="bg-red-400 p-0.5 hidden md:inline-flex max-h-6 rounded-full text-white cursor-pointer" />
      </div>

      <div className="flex items-center gap-4 justify-end">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="rounded-full border-2 py-0.5 px-1 flex gap-4">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
