"use client";
import React from "react";
import DashboradTable from "./DashboradTable";
import { useGetTestimonialsQuery } from "@/redux/services/api";

const Testimonials = () => {
  const headers = ["name", "job", "description", "img"];

  const { data, error, isLoading } = useGetTestimonialsQuery();

  return (
    <div>
      <h2 className="text-4xl py-10">Testimonials</h2>
      <DashboradTable
        headers={headers}
        data={data?.data.testimonials}
        editLink={"testimonial"}
      />
    </div>
  );
};

export default Testimonials;
