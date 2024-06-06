/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Evaluation,
  EvaluationResponse,
} from "@/common/types/responses/evaluation";
import JoditEditorComponent from "@/components/JoditEditorComponent";
import {
  useGetEvaluationQuery,
  useUpdateEvaluationMutation,
} from "@/redux/services/api";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { toast } from "react-toastify";
const FroalaEditorComponent = dynamic(
  () => import("../../components/FroalaEditorComponent"),
  { ssr: false }
);
const page = () => {
  const { data, error, isLoading } = useGetEvaluationQuery();
  const [updateEvaluation] = useUpdateEvaluationMutation();
  const editorEn = useRef(null);
  const editorAr = useRef(null);

  const SetUpdatedHtml = async (html: any) => {
    const UpdatedData: Evaluation = {
      htmlContent: {
        en: editorEn?.current.value,
        ar: editorAr?.current.value,
      },
    };
    await toast.promise(
      updateEvaluation({
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
    <div className="bg-white mt-10  px-4 rounded-xl max-w-[1000px] m-auto  shadow-lg">
      {/* <div>
        <h2 className="text-4xl py-10">English</h2>
        <FroalaEditorComponent
          previewerRef={previewerRefEn}
          originalHtml={data?.data.evaluation.htmlContent?.en}
        />
      </div> */}

      <div>
        <h2 className="text-4xl py-10">English</h2>
        <JoditEditorComponent
          ar={false}
          editor={editorEn}
          originalHtml={data?.data.evaluation.htmlContent?.en}
        />
      </div>

      <div>
        <h2 className="text-4xl py-10">Arabic</h2>
        <JoditEditorComponent
          ar={true}
          editor={editorAr}
          originalHtml={data?.data.evaluation.htmlContent?.ar}
        />
      </div>

      {/* <div>
        <h2 className="text-4xl py-10">Arabic</h2>
        <FroalaEditorComponent
          previewerRef={previewerRefAr}
          originalHtml={data?.data.evaluation.htmlContent?.ar}
        />
      </div> */}
      <button
        onClick={SetUpdatedHtml}
        className="px-6 py-2 mx-2 my-2 hover:bg-white hover:border-primary border hover:text-primary rounded-full text-white bg-primary text-lg"
      >
        {" "}
        edit
      </button>
    </div>
  );
};

export default page;
