/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Statistic } from "@/common/types/responses/statistic";
import Input from "@/components/Input";
import ImageUploader from "@/components/UploadImage";
import {
  useGetStatisticQuery,
  useUpdateStatisticMutation,
} from "@/redux/services/api";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
interface FormInput {
  title_en: string;
  title_ar: string;
  number: string;
}

const page = () => {
  const param = useParams();

  const [updateStatistic] = useUpdateStatisticMutation();

  const { data: statistic } = useGetStatisticQuery(param.id.toString());
  console.log(statistic?.data.stat);

  const { control, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: {},
  });

  useEffect(() => {
    if (statistic) {
      reset({
        title_en: statistic.data.stat.title.en,
        title_ar: statistic.data.stat.title.ar,
        number: statistic.data.stat.number,
      });
    }
  }, [statistic, reset]);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const UpdatedData: Statistic = {
      title: {
        en: data.title_en,
        ar: data.title_ar,
      },
      number: data.number,
    };
    console.log(UpdatedData);
    await toast.promise(
      updateStatistic({
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
        className="bg-white mt-20  py-4 px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="title_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "title en",
                  name: "title.en",
                  type: "text",
                  placeholder: "title in english",
                }}
                label={"title en"}
              />
            )}
          />
          <Controller
            name="title_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "title ar",
                  name: "title.ar",
                  type: "text",
                  placeholder: "title in arabic",
                }}
                label={"title ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "number",
                  name: "number",
                  type: "text",
                  placeholder: "number ",
                }}
                label={"number"}
              />
            )}
          />
        </div>

        <button className="px-6 py-2 mx-2 my-2 hover:bg-white  transition duration-300 hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg">
          {" "}
          edit
        </button>
      </form>
    </div>
  );
};

export default page;
