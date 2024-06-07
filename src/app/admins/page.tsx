/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import DashboradTable from "@/components/DashboradTable";
import { useDeleteUserMutation, useGetUsersQuery } from "@/redux/services/api";
import Link from "next/link";
import React from "react";

const page = () => {
  const headers = ["email"];
  const data2 = [
    {
      _id: "1",
      email: "ahmadali@beyond.com",
    },
    {
      _id: "2",
      email: "ahmadali@beyond.com",
    },
  ];
  const { data } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  return (
    <div className="mt-10 text-center">
      <DashboradTable
        isAdmin={true}
        data={data?.data?.Users}
        headers={headers}
        editLink="admins"
        isDelete={true}
        deleteMethod={deleteUser}
      />
      <Link href="admins/create">
        <button className="px-6 py-2 mx-2 my-5 m-auto  hover:bg-white hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg">
          {" "}
          Add Admin
        </button>
      </Link>
    </div>
  );
};

export default page;
