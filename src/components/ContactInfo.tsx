"use client";
import { Shared } from "@/common/types/responses/shared";
import Input from "@/components/Input";
import {
  useGetSharedQuery,
  useUpdateSharedMutation,
} from "@/redux/services/api";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormInput = {
  phone: string;
  email: string;
  address_en: string;
  address_ar: string;
  linkedinLink: string;
  facebookLink: string;
  instagramLink: string;
};
const ContactInfo = () => {
  const [updateService] = useUpdateSharedMutation();

  const { data: shared } = useGetSharedQuery();
  console.log(shared);

  const { control, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: {},
  });

  useEffect(() => {
    if (shared) {
      const sharedData = shared?.data?.shared;
      reset({
        phone: sharedData.phone,
        email: sharedData.email,
        address_en: sharedData.address.en,
        address_ar: sharedData.address.ar,
        linkedinLink: sharedData.linkedinLink,
        facebookLink: sharedData.facebookLink,
        instagramLink: sharedData.instagramLink,
      });
    }
  }, [shared, reset]);
  const onSubmit = async (data: FormInput) => {
    console.log(data);

    const updatedData = {
      phone: data.phone,
      email: data.email,
      address: {
        en: data.address_en,
        ar: data.address_ar,
      },
      linkedinLink: data.linkedinLink,
      facebookLink: data.facebookLink,
      instagramLink: data.instagramLink,
    };
    await toast.promise(
      updateService({
        formData: updatedData,
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
      <h2 className="text-4xl py-10">Contact information</h2>
      <form
        className="bg-white mt-10  px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="px-4 text-white text-2xl pt-2">Service Details</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "phone",
                    name: "phone",
                    type: "text",
                    placeholder: "phone",
                  }}
                  label={"phone"}
                />
              )}
            />
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
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="linkedinLink"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "linkedinLink",
                    name: "linkedinLink",
                    type: "text",
                    placeholder: "linkedinLink",
                  }}
                  label={"linkedinLink"}
                />
              )}
            />
            <Controller
              name="facebookLink"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "facebookLink",
                    name: "facebookLink",
                    type: "text",
                    placeholder: "facebookLink",
                  }}
                  label={"facebookLink"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="address_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "address en",
                    name: "address en",
                    type: "text",
                    placeholder: "address en",
                  }}
                  label={"address en"}
                />
              )}
            />
            <Controller
              name="address_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "address ar",
                    name: "address ar",
                    type: "text",
                    placeholder: "address ar",
                  }}
                  label={"address ar"}
                />
              )}
            />
          </div>
          <Controller
            name="instagramLink"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "instagramLink",
                  name: "instagramLink",
                  type: "text",
                  placeholder: "instagramLink",
                }}
                label={"instagramLink"}
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

export default ContactInfo;
