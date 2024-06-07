"use client";
import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import { useGetMessagesQuery } from "@/redux/services/api";

const Contact = () => {
  const [seen, setSeen] = useState(true);
  const { data, refetch } = useGetMessagesQuery();

  const handleMessageUpdate = () => {
    refetch();
  };

  return (
    <>
      <div className="mb-5 flex justify-center flex-row">
        <button
          className={`text-lg px-6 py-2 rounded-l-full ${
            seen ? " bg-primary text-white" : "bg-white text-black border"
          }`}
          onClick={() => {
            setSeen(true);
          }}
        >
          seen
        </button>
        <button
          className={`text-lg px-6 py-2 rounded-r-full ${
            !seen ? " bg-primary text-white" : "bg-white text-black border"
          }`}
          onClick={() => {
            setSeen(false);
          }}
        >
          unseen
        </button>
      </div>
      <div className="flex flex-row gap-2 flex-wrap">
        {data?.data?.messages
          ?.filter((e) => e.IsSeen === seen)
          .map((e, i) => (
            <ContactCard
              key={i}
              message={e}
              onMessageUpdate={handleMessageUpdate}
            />
          ))}
      </div>
    </>
  );
};

export default Contact;
