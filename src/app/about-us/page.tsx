/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { AboutUs } from "@/common/types/responses/about-us";
import Input from "@/components/Input";
import {
  useGetAbouUsQuery,
  useUpdateAbouUsMutation,
} from "@/redux/services/api";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
interface FormInput {
  CompanyBio_en: string;
  CompanyBio_ar: string;
  CompanyBioparagraph_en: string;
  CompanyBioparagraph_ar: string;
  WhatWeDoTitle_en: string;
  WhatWeDoTitle_ar: string;
  WhatWeDoparagraph_en: string;
  WhatWeDoparagraph_ar: string;
  ourVisionTitle_en: string;
  ourVisionTitle_ar: string;
  ourVisionparagraph_en: string;
  ourVisionparagraph_ar: string;
  OurMissionTitle_en: string;
  OurMissionTitle_ar: string;
  OurMissionparagraph_en: string;
  OurMissionparagraph_ar: string;
  OurGoalsTitle_en: string;
  OurGoalsTitle_ar: string;
  OurGoalsparagraph_en: string;
  OurGoalsparagraph_ar: string;
  OurPromiseTitle_en: string;
  OurPromiseTitle_ar: string;
  OurPromiseparagraph_en: string;
  OurPromiseparagraph_ar: string;
}

const page = () => {
  const { control, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: {},
  });

  const [updateAboutUS] = useUpdateAbouUsMutation();

  const { data: about } = useGetAbouUsQuery();
  console.log({ about });
  useEffect(() => {
    if (about?.data) {
      const aboutData = about.data;
      console.log({ dsa: aboutData });
      reset({
        CompanyBio_en: aboutData.companyBio.title.en,
        CompanyBio_ar: aboutData.companyBio.title.ar,
        CompanyBioparagraph_en: aboutData.companyBio.paragraph.en,
        CompanyBioparagraph_ar: aboutData.companyBio.paragraph.ar,
        WhatWeDoTitle_en: aboutData.whatWeDo.title.en,
        WhatWeDoTitle_ar: aboutData.whatWeDo.title.ar,
        WhatWeDoparagraph_en: aboutData.whatWeDo.paragraph.en,
        WhatWeDoparagraph_ar: aboutData.whatWeDo.paragraph.ar,
        ourVisionTitle_en: aboutData.ourVision.title.en,
        ourVisionTitle_ar: aboutData.ourVision.title.ar,
        ourVisionparagraph_en: aboutData.ourVision.paragraph.en,
        ourVisionparagraph_ar: aboutData.ourVision.paragraph.ar,
        OurMissionTitle_en: aboutData.ourMission.title.en,
        OurMissionTitle_ar: aboutData.ourMission.title.ar,
        OurMissionparagraph_en: aboutData.ourMission.paragraph.en,
        OurMissionparagraph_ar: aboutData.ourMission.paragraph.ar,
        OurGoalsTitle_en: aboutData.ourGoals.title.en,
        OurGoalsTitle_ar: aboutData.ourGoals.title.ar,
        OurGoalsparagraph_en: aboutData.ourGoals.paragraph.en,
        OurGoalsparagraph_ar: aboutData.ourGoals.paragraph.ar,
        OurPromiseTitle_en: aboutData.ourPromise.title.en,
        OurPromiseTitle_ar: aboutData.ourPromise.title.ar,
        OurPromiseparagraph_en: aboutData.ourPromise.paragraph.en,
        OurPromiseparagraph_ar: aboutData.ourPromise.paragraph.ar,
      });
    }
  }, [about, reset]);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    const UpdatedData: AboutUs = {
      companyBio: {
        title: {
          en: data.CompanyBio_en,
          ar: data.CompanyBio_ar,
        },
        paragraph: {
          en: data.CompanyBioparagraph_en,
          ar: data.CompanyBioparagraph_ar,
        },
      },
      whatWeDo: {
        title: {
          en: data.WhatWeDoTitle_en,
          ar: data.WhatWeDoTitle_ar,
        },
        paragraph: {
          en: data.WhatWeDoparagraph_en,
          ar: data.WhatWeDoparagraph_ar,
        },
      },
      ourVision: {
        title: {
          en: data.ourVisionTitle_en,
          ar: data.ourVisionTitle_ar,
        },
        paragraph: {
          en: data.ourVisionparagraph_en,
          ar: data.ourVisionparagraph_ar,
        },
      },
      ourMission: {
        title: {
          en: data.OurMissionTitle_en,
          ar: data.OurMissionTitle_ar,
        },
        paragraph: {
          en: data.OurMissionparagraph_en,
          ar: data.OurMissionparagraph_ar,
        },
      },
      ourGoals: {
        title: {
          en: data.OurGoalsTitle_en,
          ar: data.OurGoalsTitle_ar,
        },
        paragraph: {
          en: data.OurGoalsparagraph_en,
          ar: data.OurGoalsparagraph_ar,
        },
      },
      ourPromise: {
        title: {
          en: data.OurPromiseTitle_en,
          ar: data.OurPromiseTitle_ar,
        },
        paragraph: {
          en: data.OurPromiseparagraph_en,
          ar: data.OurPromiseparagraph_ar,
        },
      },
    };
    console.log(UpdatedData);

    await toast.promise(
      updateAboutUS({
        formData: UpdatedData,
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
        <div>
          <h2 className="px-4 text-fourth text-2xl pt-2">Company Bio</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="CompanyBio_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Company Bio en",
                    name: "Company.Bio.en",
                    type: "text",
                    placeholder: "Company Bio in english",
                  }}
                  label={"Company Bio en"}
                />
              )}
            />
            <Controller
              name="CompanyBio_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Company Bio ar",
                    name: "Company.Bio.ar",
                    type: "text",
                    placeholder: "Company Bio in arabic",
                  }}
                  label={"Company Bio ar"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="CompanyBioparagraph_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Company Bio paragraph en",
                    name: "Company.Bio.paragraph.en",
                    type: "text",
                    placeholder: "Company Bio paragraph in english",
                  }}
                  label={"Company Bio paragraph en"}
                />
              )}
            />
            <Controller
              name="CompanyBioparagraph_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Company Bio paragraph ar",
                    name: "Company.Bio.paragraph.ar",
                    type: "text",
                    placeholder: "Company Bio paragraph in arabic",
                  }}
                  label={"Company Bio paragraph ar"}
                />
              )}
            />
          </div>
        </div>

        <div>
          <h2 className="px-4 text-fourth text-2xl pt-2">What We Do</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="WhatWeDoTitle_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "What We Do Title en",
                    name: "What.We.Do.Title.en",
                    type: "text",
                    placeholder: "What We Do Title in english",
                  }}
                  label={"What We Do Title en"}
                />
              )}
            />
            <Controller
              name="WhatWeDoTitle_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "What We Do Title ar",
                    name: "What.We.Do.title.ar",
                    type: "text",
                    placeholder: "What We Do title in arabic",
                  }}
                  label={"What We Do title ar"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="WhatWeDoparagraph_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "What We Do paragraph en",
                    name: "What.We.Do.paragraph.en",
                    type: "text",
                    placeholder: "What We Do in english",
                  }}
                  label={"What We Do paragraph en"}
                />
              )}
            />
            <Controller
              name="WhatWeDoparagraph_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "What We Do paragraph ar",
                    name: "What.We.Do.paragraph.ar",
                    type: "text",
                    placeholder: "What We Do paragraph in arabic",
                  }}
                  label={"What We Do paragraph ar"}
                />
              )}
            />
          </div>
        </div>

        <div>
          <h2 className="px-4 text-fourth text-2xl pt-2">Our Vision</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="ourVisionTitle_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "our Vision Title en",
                    name: "Our.Vision.Title.en",
                    type: "text",
                    placeholder: "our Vision Title in english",
                  }}
                  label={"our Vision Title en"}
                />
              )}
            />
            <Controller
              name="ourVisionTitle_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "our Vision Title ar",
                    name: "Our.Vision.title.ar",
                    type: "text",
                    placeholder: "our Vision title in arabic",
                  }}
                  label={"our Vision title ar"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="ourVisionparagraph_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "our Vision paragraph en",
                    name: "Our.Vision.paragraph.en",
                    type: "text",
                    placeholder: "our Vision in english",
                  }}
                  label={"our Vision paragraph en"}
                />
              )}
            />
            <Controller
              name="ourVisionparagraph_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "our Vision paragraph ar",
                    name: "Our.Vision.paragraph.ar",
                    type: "text",
                    placeholder: "our Vision paragraph in arabic",
                  }}
                  label={"our Vision paragraph ar"}
                />
              )}
            />
          </div>
        </div>

        <div>
          <h2 className="px-4 text-fourth text-2xl pt-2">Our Mission</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="OurMissionTitle_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Mission Title en",
                    name: "our.Mission.Title.en",
                    type: "text",
                    placeholder: "Our Mission Title in english",
                  }}
                  label={"Our Mission Title en"}
                />
              )}
            />
            <Controller
              name="OurMissionTitle_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Mission Title ar",
                    name: "our.Mission.title.ar",
                    type: "text",
                    placeholder: "Our Mission title in arabic",
                  }}
                  label={"Our Mission title ar"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="OurMissionparagraph_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Mission paragraph en",
                    name: "our.Mission.paragraph.en",
                    type: "text",
                    placeholder: "Our Mission in english",
                  }}
                  label={"Our Mission paragraph en"}
                />
              )}
            />
            <Controller
              name="OurMissionparagraph_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Mission paragraph ar",
                    name: "our.Mission.paragraph.ar",
                    type: "text",
                    placeholder: "Our Mission paragraph in arabic",
                  }}
                  label={"Our Mission paragraph ar"}
                />
              )}
            />
          </div>
        </div>

        <div>
          <h2 className="px-4 text-fourth text-2xl pt-2">Our Goals</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="OurGoalsTitle_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Goals Title en",
                    name: "Our.Goals.Title.en",
                    type: "text",
                    placeholder: "Our Goals Title in english",
                  }}
                  label={"Our Goals Title en"}
                />
              )}
            />
            <Controller
              name="OurGoalsTitle_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Goals Title ar",
                    name: "Our.Goals.title.ar",
                    type: "text",
                    placeholder: "Our Goals title in arabic",
                  }}
                  label={"Our Goals title ar"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="OurGoalsparagraph_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Goals paragraph en",
                    name: "Our.Goals.paragraph.en",
                    type: "text",
                    placeholder: "Our Goals in english",
                  }}
                  label={"Our Goals paragraph en"}
                />
              )}
            />
            <Controller
              name="OurGoalsparagraph_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Goals paragraph ar",
                    name: "Our.Goals.paragraph.ar",
                    type: "text",
                    placeholder: "Our Goals paragraph in arabic",
                  }}
                  label={"Our Goals paragraph ar"}
                />
              )}
            />
          </div>
        </div>

        <div>
          <h2 className="px-4 text-fourth text-2xl pt-2">Our Promise</h2>
          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="OurPromiseTitle_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Promise Title en",
                    name: "Our.Promise.Title.en",
                    type: "text",
                    placeholder: "Our Promise Title in english",
                  }}
                  label={"Our Promise Title en"}
                />
              )}
            />
            <Controller
              name="OurPromiseTitle_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Promise Title ar",
                    name: "Our.Promise.title.ar",
                    type: "text",
                    placeholder: "Our Promise title in arabic",
                  }}
                  label={"Our Promise title ar"}
                />
              )}
            />
          </div>

          <div className="flex  px-4 py-4 gap-5 flex-row w-full">
            <Controller
              name="OurPromiseparagraph_en"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Promise paragraph en",
                    name: "Our.Promise.paragraph.en",
                    type: "text",
                    placeholder: "Our Promise in english",
                  }}
                  label={"Our Promise paragraph en"}
                />
              )}
            />
            <Controller
              name="OurPromiseparagraph_ar"
              control={control}
              render={({ field }) => (
                <Input
                  inputProps={{
                    ...field,
                    id: "Our Promise paragraph ar",
                    name: "Our.Promise.paragraph.ar",
                    type: "text",
                    placeholder: "Our Promise paragraph in arabic",
                  }}
                  label={"Our Promise paragraph ar"}
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
