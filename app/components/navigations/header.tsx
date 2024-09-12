'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import ColorMode from '../colorMode';
import Link from 'next/link';
import Sidebar from './side-nav';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <main className='flex flex-row justify-between'>
      <header className="shadow-md p-2 flex justify-between items-center w-full fixed top-0 left-0 z-20 bg-neutral-600 text-white">
        <div className="flex items-center">
          <Bars3Icon
            className={`duration-500 cursor-pointer ${!isSidebarOpen && 'rotate-180'} w-6 h-6 mr-4`}
            onClick={toggleSidebar}
          />
          <Link href="/" className="text-xl font-bold">Aristonis</Link>
        </div>
        <div className="flex items-center mr-2">
          <ColorMode />
        </div>
      </header>
    </main>
    <Sidebar isOpen={isSidebarOpen} />
    </>
  );
};

export default Header;