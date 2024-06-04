"use client";
import DashboradTable from "@/components/DashboradTable";
import { useGetServicesQuery } from "@/redux/services/api";
import React from "react";

const page = () => {
  const headers = ["title", "paragraph"];
  const data2 = [
    {
      id: "1",
      icon: "pla pla pla",
      title: "Marketing Strategy Planning",
      paragraph:
        "Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting.",
    },
    {
      id: "2",
      icon: "pla pla pla",
      title: "Marketing Strategy Planning",
      paragraph:
        "Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting.",
    },
    {
      id: "3",
      icon: "pla pla pla",
      title: "Marketing Strategy Planning",
      paragraph:
        "Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting.",
    },
    {
      id: "4",
      icon: "pla pla pla",
      title: "Marketing Strategy Planning",
      paragraph:
        "Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting.",
    },
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useGetServicesQuery();
  console.log(data?.data.services);

  return (
    <div>
      <DashboradTable
        data={data?.data.services}
        headers={headers}
        editLink="our-services"
      />
    </div>
  );
};

export default page;
