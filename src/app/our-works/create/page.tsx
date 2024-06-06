/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Input from "@/components/Input";
import React, { useEffect, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Select, { OptionsOrGroups, GroupBase } from "react-select";
import FroalaEditorComponent from "@/components/FroalaEditorComponent";
import ImageUploader from "@/components/UploadImage";
import JoditEditorComponent from "@/components/JoditEditorComponent";
interface OptionType {
  value: string;
  label: string;
}

interface InputForm {
  title_en: string;
  title_ar: string;
  category: string;
  photo: string;
}
const page = () => {
  const param = useParams();
  const previewerRefEn = useRef<HTMLPreElement>(null);
  const previewerRefAr = useRef<HTMLPreElement>(null);

  const selectStyle = {
    placeholder: (provided: any) => ({
      ...provided,
      color: "#9ca3af",
      fontSize: "14px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: "14px",
    }),
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      fontSize: "14px",
      paddingTop: "4px",
      borderRadius: "6px",
      border: "none",
      paddingBottom: "4px",
    }),
  };

  const selectTheme = (theme: any) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary: "#1479FF",
    },
  });

  const categories: OptionsOrGroups<OptionType, GroupBase<OptionType>> = [
    { value: "socialMediaManagement", label: "socialMediaManagement" },
    {
      value: "marketingStrategyDevelopment",
      label: "marketingStrategyDevelopment",
    },
    { value: "analyticsAndEvaluation", label: "analyticsAndEvaluation" },
    { value: "designAndProduction", label: "designAndProduction" },
  ];

  //  const [updateProject] = useUpdateProjectMutation();
  //  const { data: project } = useGetProjectQuery(param.edit);

  const { control, handleSubmit, reset } = useForm<InputForm>({
    defaultValues: {},
  });
  //  useEffect(() => {
  //    if (project) {
  //      reset({
  //        Title_en: service.data.service.title.en,
  //        Title_ar: service.data.service.title.ar,
  //        paragraph_en: service.data.service.paragraph.en,
  //        paragraph_ar: service.data.service.paragraph.ar,
  //      });
  //    }
  //  }, [project, reset]);
  const onSubmit = async (data: any) => {
    console.log(data);
    //    const UpdatedData: Service = {
    //      title: {
    //        en: data.Title_en,
    //        ar: data.Title_ar,
    //      },
    //      paragraph: {
    //        en: data.paragraph_en,
    //        ar: data.paragraph_ar,
    //      },
    //    };
    //    await toast.promise(
    //      updateService({
    //        formData: UpdatedData,
    //        id: param.service.toString(),
    //      }).unwrap(),
    //      {
    //        pending: "update is pending",
    //        success: "update resolved 👌",
    //        error: "update rejected 🤯",
    //      }
    //    );
  };

  return (
    <div>
      <form
        className="bg-white mt-10  px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="px-4  text-fourth text-2xl pt-2">Project Details</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="title_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Project Title en",
                    type: "text",
                    placeholder: "Project Title in english",
                  }}
                  label={"Project Title en"}
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
                    id: " project title ar",
                    type: "text",
                    placeholder: " project title in arabic",
                  }}
                  label={"Project title ar"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="category"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    className="my-4 border-gray-200 shadow w-full"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    styles={selectStyle}
                    theme={selectTheme}
                    placeholder={"Category"}
                    {...field}
                    options={categories}
                  />
                );
              }}
            />
          </div>
          <Controller
            control={control}
            rules={{ required: true }}
            name="photo"
            render={({ field: { onChange } }) => (
              <ImageUploader defaultValue={""} onChange={onChange} />
            )}
          />
          <div>
            <h2 className="text-4xl py-10">English</h2>
            <JoditEditorComponent
            // ar={false}
            // editor={editorEn}
            // originalHtml={data?.data.evaluation.htmlContent?.en}
            />
          </div>

          <div>
            <h2 className="text-4xl py-10">Arabic</h2>
            <JoditEditorComponent
            // ar={true}
            // editor={editorAr}
            // originalHtml={data?.data.evaluation.htmlContent?.ar}
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
