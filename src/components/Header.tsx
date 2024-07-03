import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '@/assets/cover.jpeg';

function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md p-4 rounded-b-xl ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link href="/">
          <span className="flex items-center space-x-2 cursor-pointer">
            <Image src={mainLogo} alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold">Taste of Karavali</span>
          </span>
        </Link>
        <div className="hidden md:flex flex-col items-center">
          <h3 className="text-lg text-white">Explore the Culinary Delights of Kundapur</h3>
          <p className="text-sm text-white">Discover the best local food experiences</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
