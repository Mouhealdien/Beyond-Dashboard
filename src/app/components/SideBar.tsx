"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const SideBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const pages=[
        {
            title:"home",
            href:'/home'
        },
        {
            title:"about us",
            href:'/about-us'
        },
        {
            title:"our works",
            href:'/our-works'
        },
        {
            title:"our services",
            href:'/our-services'
        },
        {
            title:"contact us",
            href:'/contact-us'
        },

]

    // Function to toggle the sidebar's visibility
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
      {/* Button to Toggle Sidebar */}
      <button
        onClick={toggleSidebar} // Ensure this function toggles the sidebar's visibility
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      {/* Sidebar Component */}
      <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${isSidebarOpen? '' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
      <button
        onClick={toggleSidebar}
        className={`absolute top-2 right-4  sm:hidden`}
      >
        X
      </button>
        <div className="h-full px-3 py-7 overflow-y-auto   bg-primary">
          <ul className="space-y-2 font-medium">
            {pages.map((e,i)=>{
                return(
                    <li key={i} >
              <Link href={e.href} className="flex text-xl items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                {e.title}
              </Link>
            </li>
                )
            })}
            
            {/* Additional Navigation Links */}
            {/*... */}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SideBar