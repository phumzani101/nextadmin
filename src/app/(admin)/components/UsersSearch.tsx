"use client";
import { Input } from "@/components/ui/input";
import React, { FormEvent, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const UsersSearch = () => {
  const [keyword, setKeyword] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set("page", "1");
      params.set("q", keyword);
    } else {
      params.delete("q");
    }

    router.replace(`${pathname}/?${params}`);
  };

  console.log({ pathname, searchParams });
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between py-4 gap-4">
            <Input
              placeholder="Filter emails..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="max-w-sm"
            />
            <Button>
              <Search />
            </Button>
          </div>
        </form>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filter <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UsersSearch;
