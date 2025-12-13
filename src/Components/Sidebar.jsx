import {
  ArrowRight,
  Bell,
  CircleUserRound,
  FolderDot,
  Heart,
  House,
  Moon,
  Plus,
  Search,
  SendHorizontal,
  Sun,
  ToggleLeft,
  Wallet,
} from "lucide-react";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = ({toggleSwitch,dark,toggleDark}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = ()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  return (
    <div
      className={`${
        isSidebarOpen ? "w-60" : "w-20"
      }hidden md:flex flex-col gap-1 shadow-2xl h-full transition-all duration-300`}
    >
      {/* TOP SECTION */}
      <div className="flex flex-col shrink-0">
        {/* toggle button */}
        <div className="mt-2 relative flex justify-end pr-2">
          {isSidebarOpen ? (
            <div
              className="rounded-full w-fit bg-emerald-600 hover:rotate-45"
              onClick={toggleSidebar}
            >
              <Plus size={32} color="white" />
            </div>
          ) : (
            <div
              className="absolute -right-3 top-1 z-50 rounded-full w-fit bg-emerald-600"
              onClick={toggleSidebar}
            >
              <ArrowRight size={22} color="white" />
            </div>
          )}
        </div>

        {/* search */}
        <div className="mt-3 flex items-center px-2">
          <div
            className={`flex items-center rounded-lg border border-gray-300 bg-gray-100 focus-within:ring-2 focus-within:ring-emerald-500 transition-all duration-300 ${
              isSidebarOpen ? "w-full pr-2" : "justify-center mx-auto"
            }`}
          >
            <div
              className={`flex items-center pl-3 ${
                isSidebarOpen ? "" : "py-1.5"
              }`}
            >
              <Search size={20} className="text-gray-500" />
            </div>

            {isSidebarOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="p-2 w-full font-medium text-gray-800 border-none outline-none bg-transparent placeholder-gray-500"
              />
            )}
          </div>
        </div>
      </div>

      {/* 🔥 SCROLLABLE MENU */}
      <div className="flex-1 overflow-y-auto px-1 space-y-1">
        <SidebarItem
          icon={House}
          label="Dashboard"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarItem
          icon={FolderDot}
          label="Project"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarItem
          icon={Bell}
          label="Notification"
          isSidebarOpen={isSidebarOpen}
        />
        <SidebarItem icon={Heart} label="Likes" isSidebarOpen={isSidebarOpen} />
        <SidebarItem
          icon={SendHorizontal}
          label="Message"
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* BOTTOM FIXED SECTION */}
      <div className="shrink-0 p-3 border-t flex justify-between">
        <div className="flex items-center gap-2 text-emerald-800 font-medium ">
          <CircleUserRound size={32} />
          {isSidebarOpen && <span>Username</span>}
        </div>
        <div
          onClick={toggleDark}
          className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {dark ? <Sun  className="dark:text-emerald-600"/> : <Moon className="dark:text-emerald-600"/>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
