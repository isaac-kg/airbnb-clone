import Image from "next/image";
import React from "react";
import {MagnifyingGlassIcon, Bars3Icon, GlobeAltIcon, UserCircleIcon} from '@heroicons/react/16/solid';

const Header = () => {

	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			<div className="relative flex h-10 items-center">
				<Image 
					src="/airbnbimage.png"
					fill={true}
					style={{
						objectFit: "contain", 
						objectPosition: "left"
					}}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					alt="airbnb-logo"
				/>
			</div>

			<div className="border-2 flex p-2 rounded-full items-center bg-slate-200">
				<input className="flex-grow outline-none pl-5 bg-transparent" type="text" placeholder="Start your search"/>
				<MagnifyingGlassIcon  className="bg-red-400 p-0.5 hidden md:inline-flex max-h-6 rounded-full text-white cursor-pointer"/>
			</div>

			<div className="flex items-center gap-4 justify-end">
				<p className="hidden md:inline">Become a host</p>
				<GlobeAltIcon className="h-6"/>

				<div className="rounded-full border-2 py-0.5 px-1 flex gap-4">
					<Bars3Icon  className="h-6"/> 
					<UserCircleIcon className="h-6"/>

				</div>

			</div>
		</header>
	)
}

export default Header;