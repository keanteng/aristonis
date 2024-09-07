'use client';

import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="shadow-lg p-2 flex justify-between items-center bg-gradient-to-b from-green-500 to-teal-500 text-white w-full fixed top-0 left-0 z-20">
      <div className="flex items-center">
        <Bars3Icon
          className={`duration-500 cursor-pointer ${!isSidebarOpen && 'rotate-180'} w-6 h-6 mr-2`}
          onClick={toggleSidebar}
        />
        <span className="text-lg font-bold">Aristonis</span>
      </div>
    </header>
  );
};

export default Header;