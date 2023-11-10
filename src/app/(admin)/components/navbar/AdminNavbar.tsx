"use client";
import { Input } from "@/components/ui/input";
import { BellIcon, Globe2Icon, MessageCircleIcon, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const AdminNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center p-5 rounded-md">
      <div className="capitalize font-semibold">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 p-2 rounded-md">
          <Search />
          <Input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:border-none"
          />
        </div>

        <div className="flex items-center gap-5">
          <MessageCircleIcon size={20} />
          <BellIcon size={20} />
          <Globe2Icon size={20} />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
