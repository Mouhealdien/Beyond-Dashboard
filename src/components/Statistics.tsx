"use client";
import React from "react";
import DashboradTable from "./DashboradTable";
import { useGetStatisticsQuery } from "@/redux/services/api";

const Statistics = () => {
  const headers = ["title", "number"];

  const { data, error, isLoading } = useGetStatisticsQuery();
  console.log(data);
  return (
    <div>
      <h2 className="text-4xl py-10">Statistics</h2>
      <DashboradTable
        headers={headers}
        data={data?.data.stat}
        editLink={"statistic"}
      />
    </div>
  );
};

export default Statistics;
