"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";

type FormInput = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { control, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {};
  return (
    <div className="min-h-screen flex items-center justify-center w-full ">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-[50%]">
        <h1 className="text-4xl font-bold text-center mb-4 text-primary">
          Beyond
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} action="#">
          <div className="flex  px-4 py-4 gap-5 flex-col w-full">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "email",
                    name: "email",
                    type: "email",
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
                    type: "password",
                    placeholder: "password",
                  }}
                  label={"password"}
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:text-primary hover:bg-white hover:border-primary transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
