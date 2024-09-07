'use client';

import React, { useState } from 'react';
import Header from '../components/navigations/header';
import Sidebar from '../components/navigations/side-nav';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex pt-12">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`flex-1 p-4 ${isSidebarOpen ? 'ml-60' : 'ml-0 md:ml-14'}`}>
          <h1 className="text-4xl font-bold">Main Content</h1>
          <p className="mt-4">This is the main content area.</p>
        </div>
      </div>
    </div>
  );
}