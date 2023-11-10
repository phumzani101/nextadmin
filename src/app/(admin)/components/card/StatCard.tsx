import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User2 } from "lucide-react";

const StatCard = () => {
  return (
    <Card className="w-full cursor-pointer hover:bg-slate-50">
      <CardContent className="p-5 flex justify-between gap-5">
        <User2 size={24} />
        <div className="flex flex-col flex-auto gap-5">
          <span>Total Users</span>
          <span className="font-medium text-2xl">10.273</span>
          <span className="text-sm font-light">
            <span className="text-green-500">12%</span> more than previus week
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
