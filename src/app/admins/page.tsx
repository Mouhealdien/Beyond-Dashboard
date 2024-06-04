import DashboradTable from "@/components/DashboradTable";
import React from "react";

const page = () => {
  const headers = ["id", "email"];
  const data = [
    {
      id: "1",
      email: "ahmadali@beyond.com",
    },
    {
      id: "2",
      email: "ahmadali@beyond.com",
    },
    {
      id: "3",
      email: "ahmadali@beyond.com",
    },
    {
      id: "4",
      email: "ahmadali@beyond.com",
    },
  ];
  return (
    <div className="mt-10">
      <DashboradTable data={data} headers={headers} editLink="admins" />
    </div>
  );
};

export default page;
