"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Tue",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Wed",
    visit: 2000,
    click: 9800,
  },
  {
    name: "Thu",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Fri",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Sat",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sun",
    visit: 2390,
    click: 3800,
  },
];

const AdminChart = () => {
  const demoUrl = "https://codesandbox.io/s/dashed-line-chart-dxwzg";
  return (
    <Card className="min-h-[550px] relative">
      <CardHeader>
        <CardTitle>Weekly Recap</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="h-[480px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="click"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="visit"
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AdminChart;
