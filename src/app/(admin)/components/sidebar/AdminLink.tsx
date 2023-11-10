"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminLink = ({
  item: { title, path, icon: Icon },
}: {
  item: {
    title: string;
    path: string;
    icon: LucideIcon;
  };
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={cn(
        "flex p-3 rounded-md hover:bg-slate-300 my-1 gap-2",
        pathname === path && "bg-slate-200"
      )}
    >
      <Icon className="mr-3" />
      {title}
    </Link>
  );
};

export default AdminLink;
