import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/Logonetflix.png";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import avatar from "../public/avatar.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${scrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={logo}
          alt="Logo"
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New and Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center text-sm space-x-4 font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account" className="">
          <div className="">
            <Image src={avatar} alt="avatar" className="cursor-pointer ml-4" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
