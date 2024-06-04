"use client";
import { Service } from "@/common/types/responses/services";
import Input from "@/components/Input";
import {
  useGetServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/services/api";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
interface FormInput {
  Title_en: string;
  Title_ar: string;
  paragraph_en: string;
  paragraph_ar: string;
}

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const param = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [updateService] = useUpdateServiceMutation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: service } = useGetServiceQuery(param.service);
  console.log(service?.data.service);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { control, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: {
      ...service?.data.service,
    },
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (service) {
      reset({
        Title_en: service.data.service.title.en,
        Title_ar: service.data.service.title.ar,
        paragraph_en: service.data.service.paragraph.en,
        paragraph_ar: service.data.service.paragraph.ar,
      });
    }
  }, [service, reset]);
  const onSubmit = async (data: any) => {
    const UpdatedData: Service = {
      title: {
        en: data.Title_en,
        ar: data.Title_ar,
      },
      paragraph: {
        en: data.paragraph_en,
        ar: data.paragraph_ar,
      },
    };
    await toast.promise(
      updateService({
        formData: UpdatedData,
        id: param.service.toString(),
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
        className="bg-white mt-10  px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="px-4 text-white text-2xl pt-2">Service Details</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="Title_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Service Title en",
                    name: "Service.Title.en",
                    type: "text",
                    placeholder: "Service Title in english",
                  }}
                  label={"Service Title en"}
                />
              )}
            />
            <Controller
              name="Title_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Service Title ar",
                    name: "Service.Title.ar",
                    type: "text",
                    placeholder: "Service Title in arabic",
                  }}
                  label={"Service Title ar"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="paragraph_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Service paragraph en",
                    name: "Service.paragraph.en",
                    type: "text",
                    placeholder: "Service paragraph in english",
                  }}
                  label={"Service paragraph en"}
                />
              )}
            />
            <Controller
              name="paragraph_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Service paragraph ar",
                    name: "Service.paragraph.ar",
                    type: "text",
                    placeholder: "Service paragraph in arabic",
                  }}
                  label={"Service paragraph ar"}
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
