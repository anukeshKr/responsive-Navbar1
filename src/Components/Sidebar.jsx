import {
  ArrowRight,
  Bell,
  FolderDot,
  Heart,
  House,
  Plus,
  Search,
  SendHorizontal,
  Wallet,
} from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className={`${isSidebarOpen?'w-60':'w-20'}hidden md:flex flex-col gap-1 shadow-2xl shadow-amber-900 h-screen`}>
      <div className="mt-2 realtive flex justify-end pr-2">
        {
          isSidebarOpen?
            (
              <div className="rounded-full w-fit bg-emerald-600 hover:rotate-45">
                <Plus size={32} color="white"/>
              </div>
            )
            :
            (
              <div className="rounded-full w-fit bg-emerald-600 relative left-5">
                <ArrowRight size={22} color="white"/>
              </div>
            )
        }
      </div>
      <div className="mt-3 gap-4 flex items-center">
        <div className="w-full">
          <div className="flex pl-2 rounded-2xl border bg-gray-500/30 mx-2 focus:ring-2 focus:ring-blue-500">
            <div className="flex items-center">
              <Search size={23} className="text-emerald-600" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 w-full font-medium border-gray-400 text-black border-none outline-none focus:border-none"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-2 hover:bg-emerald-200 hover:border-r-2 hover:border-emerald-800">
        <div className="">
          <House size={32} />
        </div>
        <div className="text-2xl text-emerald-600">Dashboard</div>
      </div>
      <div className="flex gap-4 p-2 hover:bg-emerald-200 hover:border-r-2 hover:border-emerald-800">
        <div>
          <FolderDot size={32} />
        </div>
        <div className="text-2xl text-emerald-600">Project</div>
      </div>
      <div className="flex gap-4 p-2 hover:bg-emerald-200 hover:border-r-2 hover:border-emerald-800">
        <div>
          <Bell size={32} />
        </div>
        <div className="text-2xl text-emerald-600">
          Notification
        </div>
      </div>
      <div className="flex gap-4 p-2 hover:bg-emerald-200 hover:border-r-2 hover:border-emerald-800">
        <div>
          <Heart size={32} />
        </div>
        <div className="text-2xl text-emerald-600">Likes</div>
      </div>
      <div className="flex gap-4 p-2 hover:bg-emerald-200 hover:border-r-2 hover:border-emerald-800">
        <div>
          <SendHorizontal size={32} />
        </div>
        <div className="text-2xl text-emerald-600">Message</div>
      </div>
      <div className="flex gap-4 p-2 hover:bg-emerald-200 hover:border-r-2 hover:border-emerald-800">
        <div>
          <Wallet size={32} />
        </div>
        <div className="text-2xl text-emerald-600">Wallet</div>
      </div>
    </div>
  );
};

export default Sidebar;