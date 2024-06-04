"use client";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Input from "./Input";
import { useGetHomeQuery, useUpdateHomeMutation } from "@/redux/services/api";
import { Home } from "@/common/types/responses/home";
interface FormInput {
  title_en: string;
  title_ar: string;
  subTitle1_en: string;
  subTitle1_ar: string;
  subTitle2_en: string;
  subTitle2_ar: string;
  subTitle3_en: string;
  subTitle3_ar: string;
  subTitle4_en: string;
  subTitle4_ar: string;
  statistictitle_en: string;
  statistictitle_ar: string;
  quote_en: string;
  quote_ar: string;
  testimonialSubTitle_en: string;
  testimonialSubTitle_ar: string;
  TestimonialTitle_ar: string;
  TestimonialTitle_en: string;
  certificatesTitle_en: string;
  certificatesTitle_ar: string;
}
const HomeForm = () => {
  const { control, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: {},
  });

  const [updateHome] = useUpdateHomeMutation();

  const { data: home } = useGetHomeQuery();
  console.log(home?.data.home);
  useEffect(() => {
    if (home) {
      const homeData = home?.data.home;
      reset({
        title_en: homeData.title.en,
        title_ar: homeData.title.ar,
        statistictitle_en: homeData.statisticTitle.en,
        statistictitle_ar: homeData.statisticTitle.ar,
        quote_en: homeData.quote.en,
        quote_ar: homeData.quote.ar,
        testimonialSubTitle_en: homeData.testimonialSubTitle.en,
        testimonialSubTitle_ar: homeData.testimonialSubTitle.ar,
        TestimonialTitle_en: homeData.testimonialTitle.en,
        TestimonialTitle_ar: homeData.testimonialTitle.ar,
        certificatesTitle_en: homeData.certificatesTitle.en,
        certificatesTitle_ar: homeData.certificatesTitle.ar,
        subTitle1_en: homeData?.subTitle?.en[0],
        subTitle1_ar: homeData?.subTitle?.ar[0],
        subTitle2_en: homeData?.subTitle?.en[1],
        subTitle2_ar: homeData?.subTitle?.ar[1],
        subTitle3_en: homeData?.subTitle?.en[2],
        subTitle3_ar: homeData?.subTitle?.ar[2],
        subTitle4_en: homeData?.subTitle?.en[3],
        subTitle4_ar: homeData?.subTitle?.ar[3],
      });
    }
  }, [home, reset]);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    const UpdatedData: Home = {
      title: {
        ar: data.title_ar,
        en: data.title_en,
      },
      subTitle: {
        ar: [
          data.subTitle1_ar,
          data.subTitle2_ar,
          data.subTitle3_ar,
          data.subTitle4_ar,
        ],
        en: [
          data.subTitle1_en,
          data.subTitle2_en,
          data.subTitle3_en,
          data.subTitle4_en,
        ],
      },
      statisticTitle: {
        ar: data.statistictitle_ar,
        en: data.statistictitle_en,
      },
      quote: {
        ar: data.quote_ar,
        en: data.quote_en,
      },
      testimonialTitle: {
        ar: data.TestimonialTitle_ar,
        en: data.TestimonialTitle_en,
      },
      testimonialSubTitle: {
        ar: data.testimonialSubTitle_ar,
        en: data.testimonialSubTitle_en,
      },
      certificatesTitle: {
        ar: data.certificatesTitle_ar,
        en: data.certificatesTitle_en,
      },
    };
    console.log(UpdatedData);
    await toast.promise(
      updateHome({
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
      <h2 className="text-4xl py-10">Home Titels</h2>
      <form
        className="bg-white mt-10  px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg"
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
                  id: "Title en",
                  name: "Title.en",
                  type: "text",
                  placeholder: "Title in english",
                }}
                label={"Title en"}
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
                  id: "Title ar",
                  name: "Title.arr",
                  type: "text",
                  placeholder: "Title in arabic",
                }}
                label={"Title ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="subTitle1_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "subTitle1 en",
                  name: "subTitle1.en",
                  type: "text",
                  placeholder: "subTitle1 in english",
                }}
                label={"subTitle1 en"}
              />
            )}
          />
          <Controller
            name="subTitle1_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "subTitle1 ar",
                  name: "subTitle1.arr",
                  type: "text",
                  placeholder: "subTitle1 in arabic",
                }}
                label={"subTitle1 ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="subTitle2_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "subTitle2 en",
                  name: "subTitle2.en",
                  type: "text",
                  placeholder: "subTitle2 in english",
                }}
                label={"subTitle2 en"}
              />
            )}
          />
          <Controller
            name="subTitle2_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "subTitle2 ar",
                  name: "subTitle2.arr",
                  type: "text",
                  placeholder: "subTitle2 in arabic",
                }}
                label={"subTitle2 ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="subTitle3_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "subTitle3 en",
                  name: "subTitle3.en",
                  type: "text",
                  placeholder: "subTitle3 in english",
                }}
                label={"subTitle3 en"}
              />
            )}
          />
          <Controller
            name="subTitle3_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "subTitle3 ar",
                  name: "subTitle3.arr",
                  type: "text",
                  placeholder: "subTitle3 in arabic",
                }}
                label={"subTitle3 ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="subTitle4_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "subTitle4 en",
                  name: "subTitle4.en",
                  type: "text",
                  placeholder: "subTitle4 in english",
                }}
                label={"subTitle4 en"}
              />
            )}
          />
          <Controller
            name="subTitle4_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "subTitle4 ar",
                  name: "subTitle4.arr",
                  type: "text",
                  placeholder: "subTitle4 in arabic",
                }}
                label={"subTitle4 ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="statistictitle_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "statisticTitle en",
                  name: "statisticTitle.en",
                  type: "text",
                  placeholder: "statistic Title in english",
                }}
                label={"statistic Title en"}
              />
            )}
          />
          <Controller
            name="statistictitle_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "statisticTitle ar",
                  name: "statisticTitle.ar",
                  type: "text",
                  placeholder: "statistic Title in arabic",
                }}
                label={"statistic Title ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="quote_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "quote en",
                  name: "quote.en",
                  type: "text",
                  placeholder: "quote in english",
                }}
                label={"Quote en"}
              />
            )}
          />
          <Controller
            name="quote_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "quote ar",
                  name: "quote.ar",
                  type: "text",
                  placeholder: "quote in arabic",
                }}
                label={"Quote ar"}
              />
            )}
          />
        </div>

        <div className="flex px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="TestimonialTitle_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "testimonialTitle en",
                  name: "testimonialTitle.en",
                  type: "text",
                  placeholder: "Testimonial Title in english",
                }}
                label={"TestimonialTitle en"}
              />
            )}
          />

          <Controller
            name="TestimonialTitle_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "testimonialTitle ar",
                  name: "testimonialTitle.ar",
                  type: "text",
                  placeholder: "title in arabic",
                }}
                label={"Testimonial Title ar"}
              />
            )}
          />
        </div>

        <div className="flex  px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="testimonialSubTitle_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "testimonialSubTitle en",
                  name: "testimonialSubTitle.en",
                  type: "text",
                  placeholder: "Testimonial Sub Title in english",
                }}
                label={"testimonial Sub Title en"}
              />
            )}
          />

          <Controller
            name="testimonialSubTitle_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "testimonialSubTitle ar",
                  name: "testimonialSubTitle.en",
                  type: "text",
                  placeholder: "Testimonial Sub Title arabic",
                }}
                label={"Testimonial Sub Title ar"}
              />
            )}
          />
        </div>
        {/* hide certificates */}
        <div className="hidden px-4 py-4 gap-5 flex-row w-full">
          <Controller
            name="certificatesTitle_en"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "certificatesTitle en",
                  name: "certificatesTitle.en",
                  type: "text",
                  placeholder: "certificates Title in english",
                }}
                label={"Certificates Title en"}
              />
            )}
          />

          <Controller
            name="certificatesTitle_ar"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "certificatesTitle ar",
                  name: "certificatesTitle.ar",
                  type: "text",
                  placeholder: "certificates Title arabic",
                }}
                label={"certificates Title ar"}
              />
            )}
          />
        </div>

        <button className="px-6 py-2 mx-2 my-2 rounded-full bg-primary text-white text-xl">
          {" "}
          edit
        </button>
      </form>
    </div>
  );
};

export default HomeForm;
