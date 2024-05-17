"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { FaHome, FaPhoneSquareAlt } from 'react-icons/fa';
import { FaAddressBook, FaBuilding } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
const SideBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const pages=[
        {
            title:"home",
            icon:<FaHome/>,
            href:'/home'
        },
        {
            title:"about us",
            icon:<FaAddressBook/>,
            href:'/about-us'
        },
        {
            title:"our works",
            icon:<MdWork/>,
            href:'/our-works'
        },
        {
            title:"our services",
            icon:<FaBuilding/>,
            href:'/our-services'
        },
        {
            title:"contact us",
            icon:<FaPhoneSquareAlt/>,
            href:'/contact-us'
        },

]

    
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
      
      <button
        onClick={toggleSidebar} 
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 transition-all duration-500 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-primary hover:text-white   "
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${isSidebarOpen? '' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
      <button
        onClick={toggleSidebar}
        className={`absolute text-white top-2 right-4  sm:hidden`}
      >
        <IoClose/>
      </button>
        <div className="h-full px-3 py-7 overflow-y-auto   bg-primary">
          <ul className="space-y-2 font-medium">
            {pages.map((e,i)=>{
                return(
                    <li key={i} >
              <Link href={e.href} className="flex gap-3 text-xl items-center p-2 text-white transition-all duration-500 900 rounded-lg hover:text-primary hover:bg-white group">
                {e.icon}
                {e.title}
               
              </Link>
            </li>
                )
            })}
            
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SideBar