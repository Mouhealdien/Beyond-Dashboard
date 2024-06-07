/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Input from "@/components/Input";
import { useAddUserMutation } from "@/redux/services/api";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
interface IFormInput {
  email: string;
  password: string;
}

const page = () => {
  const { control, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {},
  });

  const [addUser] = useAddUserMutation();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    await toast.promise(addUser(data).unwrap(), {
      pending: "update is pending",
      success: "update resolved 👌",
      error: "update rejected 🤯",
    });
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
                  }}
                  label={"password"}
                />
              )}
            />
          </div>
        </div>
        <button className="px-6 py-2 mx-2 my-2 hover:bg-white hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg">
          {" "}
          Create
        </button>
      </form>
    </div>
  );
};

export default page;
