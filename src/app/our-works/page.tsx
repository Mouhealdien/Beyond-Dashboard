// pages/index.tsx
import DashboradTable from "@/components/DashboradTable";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the FroalaEditorComponent
const FroalaEditorComponent = dynamic(
  () => import("../../components/FroalaEditorComponent"),
  { ssr: false }
);

const page: React.FC = () => {
  const headers = ["title", "category"];
  const data2 = [
    {
      _id: "1",
      title: "Marketing Strategy Planning",
      category: "case study",
    },
    {
      _id: "2",
      title: "Marketing Strategy Planning",
      category: "case study",
    },
    {
      _id: "3",
      title: "Marketing Strategy Planning",
      category: "case study",
    },
    {
      _id: "4",
      title: "Marketing Strategy Planning",
      category: "case study",
    },
  ];
  return (
    <div>
      <DashboradTable data={data2} headers={headers} editLink="our-works" />
    </div>
  );
};

export default page;
