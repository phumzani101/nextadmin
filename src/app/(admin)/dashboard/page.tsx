import React from "react";
import StatCard from "../components/card/StatCard";
import Transactions from "../components/Transactions";
import AdminChart from "../components/chart/AdminChart";
import AdminRightSidebar from "../components/sidebar/AdminRightSidebar";

const AdminDashboardPage = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex flex-[3] flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
        <Transactions />
        <AdminChart />
      </div>
      <div className="flex flex-col flex-1">
        <AdminRightSidebar />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
