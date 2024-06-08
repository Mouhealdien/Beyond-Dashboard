/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Input from "@/components/Input";
import React, { useEffect, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Select, { OptionsOrGroups, GroupBase } from "react-select";
import ImageUploader from "@/components/UploadImage";
import JoditEditorComponent from "@/components/JoditEditorComponent";
import {
  useGetProjectQuery,
  useUpdateProjectMutation,
  useUploadImageMutation,
} from "@/redux/services/api";
import { Project } from "@/common/types/responses/project";
import { getPhotoUrl } from "@/util/util";
interface OptionType {
  value: string;
  label: string;
}

interface InputForm {
  title_en: string;
  title_ar: string;
  category: {
    label: string;
    value: string;
  };
  photo: string;
}
const page = () => {
  const param = useParams();
  const editorEn = useRef(null);
  const editorAr = useRef(null);

  const { data: project, isFetching } = useGetProjectQuery(
    param.edit.toString()
  );
  const [updateProject] = useUpdateProjectMutation();
  const [uploadImage] = useUploadImageMutation();
  console.log(project?.data.project);

  const ProjectData = project?.data.project;

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
      primary: "#202EFF",
    },
  });

  const categories: OptionsOrGroups<OptionType, GroupBase<OptionType>> = [
    { value: "case_studies", label: "Case Studies" },
    {
      value: "strategy_planning",
      label: "Strategy Planning",
    },
    { value: "brand_development", label: "Brand Development" },
    { value: "content_marketing", label: "Content Marketing" },
    { value: "analytics", label: "Analytics" },
    { value: "social_media", label: "Social Media" },
  ];

  const { control, handleSubmit, reset } = useForm<InputForm>({
    defaultValues: {},
  });
  useEffect(() => {
    if (project) {
      reset({
        title_en: ProjectData?.title.en,
        title_ar: ProjectData?.title.ar,
        category: {
          label: ProjectData?.category,
          value: ProjectData?.category,
        },
        photo: ProjectData?.photo,
      });
    }
  }, [project, reset]);
  const onSubmit = async (data: any) => {
    let image = "";
    if (typeof data.photo == "string") {
      image = data.photo;
    } else {
      const img = new FormData();
      img.append("file", data.photo);
      const imageObject = await uploadImage(img);
      console.log(imageObject);
      image = imageObject?.data.link;
    }

    console.log(data);
    const UpdatedData: Project = {
      title: {
        en: data.title_en,
        ar: data.title_ar,
      },
      content: {
        en: editorEn?.current.value,
        ar: editorAr?.current.value,
      },
      category: data.category.value,
      photo: image,
    };
    console.log(UpdatedData);
    await toast.promise(
      updateProject({
        formData: UpdatedData,
        id: param.edit.toString(),
      }).unwrap(),
      {
        pending: "update is pending",
        success: "update resolved 👌",
        error: "update rejected 🤯",
      }
    );
  };
  if (isFetching) return <h1>Loading...</h1>;
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
                    defaultValue={{ label: "Kolkata", value: "Kolkata" }}
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
              <ImageUploader
                defaultValue={getPhotoUrl(ProjectData!.photo)}
                onChange={onChange}
              />
            )}
          />

          <div>
            <h2 className="text-4xl py-10">English</h2>
            <JoditEditorComponent
              ar={false}
              editor={editorEn}
              originalHtml={ProjectData?.content.en}
            />
          </div>

          <div>
            <h2 className="text-4xl py-10">Arabic</h2>
            <JoditEditorComponent
              ar={true}
              editor={editorAr}
              originalHtml={ProjectData?.content.ar}
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
