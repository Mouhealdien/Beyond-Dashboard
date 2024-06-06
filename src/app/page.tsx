import Certificates from "@/components/Certificates";
import ContactInfo from "@/components/ContactInfo";
import HomeForm from "@/components/HomeForm";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import { useGetHomeQuery, useGetTestimonialQuery } from "@/redux/services/api";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <Testimonials />
      {/* <Certificates /> */}
      <Statistics />
      <ContactInfo />
      <HomeForm />
    </div>
  );
};

export default Home;
