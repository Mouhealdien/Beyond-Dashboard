/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Testimonial } from "@/common/types/responses/home";
import Input from "@/components/Input";
import ImageUploader from "@/components/UploadImage";
import {
  useGetTestimonialQuery,
  useUpdateTestimonialMutation,
} from "@/redux/services/api";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormInput {
  name_en: string;
  name_ar: string;
  job_en: string;
  job_ar: string;
  description_en: string;
  description_ar: string;
  photo: string;
}
const page = () => {
  const param = useParams();

  const [updateTestimonial] = useUpdateTestimonialMutation();

  const { data: testimonial } = useGetTestimonialQuery(param.id.toString());
  console.log(testimonial);

  const { control, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: {},
  });

  useEffect(() => {
    if (testimonial) {
      const testimonialData = testimonial.data.testimonials;
      reset({
        name_en: testimonialData.name.en,
        name_ar: testimonialData.name.ar,
        job_en: testimonialData.job.en,
        job_ar: testimonialData.job.ar,
        description_en: testimonialData.description.en,
        description_ar: testimonialData.description.ar,
        photo: testimonialData.img,
      });
    }
  }, [testimonial, reset]);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const UpdatedData: Testimonial = {
      name: {
        en: data.name_en,
        ar: data.name_ar,
      },
      job: {
        en: data.job_en,
        ar: data.job_ar,
      },
      description: {
        en: data.description_en,
        ar: data.description_ar,
      },
      img: data.photo,
    };
    console.log(UpdatedData);
    await toast.promise(
      updateTestimonial({
        formData: UpdatedData,
        id: param.id.toString(),
      }).unwrap(),
      {
        pending: "update is pending",
        success: "update resolved 👌",
        error: "update rejected 🤯",
      }
    );
  };

  return (
    <div>
      <form
        className="bg-white mt-10  py-4 px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="name_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "name en",
                  name: "name.en",
                  type: "text",
                  placeholder: "name in english",
                }}
                label={"name en"}
              />
            )}
          />
          <Controller
            name="name_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "name ar",
                  name: "name.arr",
                  type: "text",
                  placeholder: "name in arabic",
                }}
                label={"name ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="job_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "job en",
                  name: "job.en",
                  type: "text",
                  placeholder: "job in english",
                }}
                label={"job en"}
              />
            )}
          />
          <Controller
            name="job_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "job ar",
                  name: "job.ar",
                  type: "text",
                  placeholder: "job in arabic",
                }}
                label={"job ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="description_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "description en",
                  name: "description.en",
                  type: "text",
                  placeholder: "description in english",
                }}
                label={"description en"}
              />
            )}
          />
          <Controller
            name="description_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "description ar",
                  name: "description.ar",
                  type: "text",
                  placeholder: "description in arabic",
                }}
                label={"description ar"}
              />
            )}
          />
        </div>

        <Controller
          control={control}
          rules={{ required: true }}
          name="photo"
          render={({ field: { onChange } }) => (
            <ImageUploader
              defaultValue={testimonial?.data.testimonials.img}
              onChange={onChange}
            />
          )}
        />

        <button className="px-6 py-2 mx-2 my-2 hover:bg-white  transition duration-300 hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg">
          {" "}
          edit
        </button>
      </form>
    </div>
  );
};

export default page;
