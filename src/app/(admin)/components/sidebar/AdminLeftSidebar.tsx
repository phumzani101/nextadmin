"use client";
import {
  BadgeDollarSignIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  ShoppingBasketIcon,
  Users2Icon,
} from "lucide-react";
import React from "react";
import AdminLink from "./AdminLink";
import Image from "next/image";

export const adminLinks = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboardIcon,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: Users2Icon,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: ShoppingBasketIcon,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: BadgeDollarSignIcon,
      },
    ],
  },
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboardIcon,
      },
      {
        title: "Users",
        path: "/dashboard",
        icon: Users2Icon,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: ShoppingBasketIcon,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: BadgeDollarSignIcon,
      },
    ],
  },
];

const AdminSidebar = () => {
  return (
    <div className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col overflow-auto border-r p-6 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src={"/noavatar.png"}
          width={40}
          height={40}
          className="rounded-full object-cover"
          alt="user"
        />
        <div className="flex flex-col">
          <span className="font-semibold">John Doe</span>
          <span className="text-sm text-muted-foreground">Admin</span>
        </div>
      </div>
      <ul className="">
        {adminLinks.map((cat) => (
          <li key={cat.title} className="my-3">
            <span className="">{cat.title}</span>
            {cat.list.map((item) => (
              <AdminLink key={item.path} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className="flex p-3 rounded-md hover:bg-slate-300 my-1 gap-2">
        <LogOutIcon className="mr-3" /> Sign Out
      </button>
    </div>
  );
};

export default AdminSidebar;
