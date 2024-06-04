/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { EvaluationResponse } from "@/common/types/responses/evaluation";
import {
  useGetEvaluationQuery,
  useUpdateEvaluationMutation,
} from "@/redux/services/api";
import dynamic from "next/dynamic";
import React from "react";
import { toast } from "react-toastify";
const FroalaEditorComponent = dynamic(
  () => import("../../components/FroalaEditorComponent"),
  { ssr: false }
);
const page = () => {
  const { data, error, isLoading } = useGetEvaluationQuery();
  const [updateEvaluation] = useUpdateEvaluationMutation();
  console.log(data);

  const SetUpdatedHtml = async (html: string) => {
    console.log("hello" + " " + html);
    const UpdatedData = {
      htmlContent: html,
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
    <div>
      <div>
        <h2 className="text-4xl py-10">English</h2>
        <FroalaEditorComponent
          setUpdatedHtml={SetUpdatedHtml}
          originalHtml={data?.data.evaluation.htmlContent}
        />
      </div>

      <div>
        <h2 className="text-4xl py-10">Arabic</h2>
        <FroalaEditorComponent
          setUpdatedHtml={SetUpdatedHtml}
          originalHtml={data?.data.evaluation.htmlContent}
        />
      </div>
    </div>
  );
};

export default page;
