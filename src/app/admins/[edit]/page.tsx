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
        className="bg-white mt-10  px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="px-4 text-white text-2xl pt-2">Service Details</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "email",
                    name: "email",
                    type: "text",
                    placeholder: "email",
                    defaultValue: `${"x"}`,
                  }}
                  label={"email"}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "password",
                    name: "password",
                    type: "text",
                    placeholder: "password",
                    defaultValue: `${"x"}`,
                  }}
                  label={"password"}
                />
              )}
            />
          </div>
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
