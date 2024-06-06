/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import DashboradTable from "@/components/DashboradTable";
import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
} from "@/redux/services/api";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const page: React.FC = () => {
  const headers = ["title", "category"];

  const { data } = useGetProjectsQuery();
  const [deleteProject] = useDeleteProjectMutation();
  console.log(data?.data.projects);
  return (
    <div className="text-center">
      <DashboradTable
        data={data?.data.projects}
        headers={headers}
        editLink="our-works"
        deleteMethod={deleteProject}
        isDelete={true}
      />
      <Link href="our-works/create">
        <button className="px-6 py-2 mx-2 my-5 m-auto  hover:bg-white hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg">
          {" "}
          Add Project
        </button>
      </Link>
    </div>
  );
};

export default page;
