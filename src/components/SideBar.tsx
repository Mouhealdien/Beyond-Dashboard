"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaHome,
  FaPhoneSquareAlt,
  FaRegQuestionCircle,
  FaUser,
} from "react-icons/fa";
import {
  FaAddressBook,
  FaBuilding,
  FaCircleQuestion,
  FaPerson,
} from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdWork } from "react-icons/md";
const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const pages = [
    {
      title: "home",
      icon: <FaHome />,
      href: "/",
    },
    {
      title: "about us",
      icon: <FaAddressBook />,
      href: "/about-us",
    },
    {
      title: "our works",
      icon: <MdWork />,
      href: "/our-works",
    },
    {
      title: "our services",
      icon: <FaBuilding />,
      href: "/our-services",
    },
    {
      title: "contact us",
      icon: <FaPhoneSquareAlt />,
      href: "/contact-us",
    },
    {
      title: "Admins",
      icon: <FaUser />,
      href: "/admins",
    },
    {
      title: "Evaluation",
      icon: <FaCircleQuestion />,
      href: "/evaluation",
    },
  ];

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
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed shadow-lg  top-0 left-0 z-40 w-40 h-screen transition-transform transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <button
          onClick={toggleSidebar}
          className={`absolute text-fourth top-2 right-4  sm:hidden`}
        >
          <IoClose />
        </button>

        <div className="h-full px-3 py-2 overflow-y-auto   bg-white">
          <h1 className=" text-2xl font-sans mb-4 mx-6 pb-8 pt-3 text-primary  font-extrabold">
            Beyond.
          </h1>

          <ul className="space-y-2 font-medium">
            {pages.map((e, i) => {
              return (
                <li key={i}>
                  <Link
                    href={e.href}
                    className="flex group text-fourth hover:-translate-y-1  flex-col gap-3 text-xl items-center p-2  transition duration-500  rounded-lg hover:text-primary hover:bg-white group"
                  >
                    <div className="px-3 py-3 group-hover:shadow-2xl group-hover:text-white transition duration-500 group-hover:bg-primary text-primary rounded-lg w-fit bg-third">
                      {e.icon}
                    </div>

                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
