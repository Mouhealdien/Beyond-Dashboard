/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Input from "@/components/Input";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const page = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({
    defaultValues: {},
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    // await toast.promise(updateService({ formData: data }).unwrap(), {
    // 	error: t('could-not-update'),
    // 	pending: t('trying-to-update'),
    // 	success: t('updated-successfully') as string,
    // });
  };

  return (
    <div>
      <form
        className=" bg-white mt-20  py-4 px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="title en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "title en",
                  name: "title.en",
                  type: "text",
                  placeholder: "title in english",
                  defaultValue: `${"x"}`,
                }}
                label={"title en"}
              />
            )}
          />
          <Controller
            name="title ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "title ar",
                  name: "title.ar",
                  type: "text",
                  placeholder: "title in arabic",
                  defaultValue: `${"x"}`,
                }}
                label={"title ar"}
              />
            )}
          />
        </div>

        <div className="flex px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="issuedBy en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "issuedBy en",
                  name: "issuedBy.en",
                  type: "text",
                  placeholder: "issuedBy in english",
                  defaultValue: `${"x"}`,
                }}
                label={"issuedBy en"}
              />
            )}
          />
          <Controller
            name="issuedBy ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "issuedBy ar",
                  name: "issuedBy.ar",
                  type: "text",
                  placeholder: "issuedBy in arabic",
                  defaultValue: `${"x"}`,
                }}
                label={"issuedBy ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="img"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "img",
                  name: "img",
                  type: "text",
                  placeholder: "img",
                  defaultValue: `${"x"}`,
                }}
                label={"img"}
              />
            )}
          />

          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "year",
                  name: "year",
                  type: "number",
                  placeholder: "year ",
                  defaultValue: `${"2024"}`,
                }}
                label={"year"}
              />
            )}
          />
        </div>

        <button className="px-6 py-2 mx-2 my-2 hover:bg-white hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg">
          {" "}
          edit
        </button>
      </form>
    </div>
  );
};

export default page;
