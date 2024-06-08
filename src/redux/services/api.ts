import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "./../../constants/settings";
import {
  Home,
  HomeResponse,
  Testimonial,
} from "../../common/types/responses/home";
import {
  AboutUs,
  AboutUsResponse,
} from "../../common/types/responses/about-us";
import {
  Service,
  ServicesResponse,
} from "../../common/types/responses/services";
import { ContactFormData } from "@/common/types/responses/contact";
import { TestimonialsResponse } from "@/common/types/requests/testimonials";
import {
  Statistic,
  StatisticResponse,
} from "@/common/types/responses/statistic";
import { Shared, SharedResponse } from "@/common/types/responses/shared";
import {
  Evaluation,
  EvaluationResponse,
} from "@/common/types/responses/evaluation";
import {
  Project,
  ProjectResponse,
  ProjectsResponse,
} from "@/common/types/responses/project";
import { User } from "@/common/types/responses/user";
import { RootState } from "../store";

const Url = BASE_API_URL;
export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHome: builder.query<HomeResponse, void>({
      query: () => `/admin/home`,
    }),
    updateHome: builder.mutation<HomeResponse, { formData: Home }>({
      query: ({ formData }) => ({
        url: `/admin/home`,
        method: "PUT",
        body: formData,
      }),
    }),
    getAbouUs: builder.query<AboutUsResponse, void>({
      query: () => `/admin/about-us`,
    }),
    updateAbouUs: builder.mutation<AboutUsResponse, { formData: AboutUs }>({
      query: ({ formData }) => ({
        url: `/admin/about-us`,
        method: "PUT",
        body: formData,
      }),
    }),
    getServices: builder.query<ServicesResponse, void>({
      query: () => `/admin/services`,
    }),
    getService: builder.query<ServicesResponse, void>({
      query: (id) => `/admin/services/${id}`,
    }),
    getMessages: builder.query<MessagesResponse, void>({
      query: () => `/admin/contact-us/messages`,
    }),

    updateMessage: builder.mutation<MessagesResponse, string>({
      query: (id) => ({
        url: `/admin/contact-us/messages/${id}/seen`,
        method: "PATCH",
        body: id,
      }),
    }),
    getTestimonial: builder.query<Testimonial, string>({
      query: (id) => `/admin/home/testimonials/${id}`,
    }),

    getTestimonials: builder.query<TestimonialsResponse, void>({
      query: () => `/admin/home/testimonials`,
    }),

    updateTestimonial: builder.mutation<
      Testimonial,
      { formData: Testimonial; id: string }
    >({
      query: ({ formData, id }) => ({
        url: `/admin/home/testimonials/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),

    getStatistic: builder.query<StatisticResponse, string>({
      query: (id) => `/admin/home/statistic/${id}`,
    }),

    getStatistics: builder.query<Statistic, void>({
      query: () => `/admin/home/statistic`,
    }),

    updateStatistic: builder.mutation<
      Statistic,
      { formData: Statistic; id: string }
    >({
      query: ({ formData, id }) => ({
        url: `/admin/home/statistic/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),

    deleteMessage: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/admin/contact-us/messages/${id}`,
        method: "DELETE",
      }),
    }),

    updateService: builder.mutation<Service, { formData: Service; id: string }>(
      {
        query: ({ formData, id }) => ({
          url: `/admin/services/${id}`,
          method: "PATCH",
          body: formData,
        }),
      }
    ),
    getShared: builder.query<SharedResponse, void>({
      query: () => `/admin/shared`,
    }),
    updateShared: builder.mutation<SharedResponse, { formData: Shared }>({
      query: ({ formData }) => ({
        url: `/admin/shared`,
        method: "PATCH",
        body: formData,
      }),
    }),

    getEvaluation: builder.query<EvaluationResponse, void>({
      query: () => `/admin/evaluation`,
    }),
    updateEvaluation: builder.mutation<
      EvaluationResponse,
      { formData: Evaluation }
    >({
      query: ({ formData }) => ({
        url: `/admin/evaluation`,
        method: "PUT",
        body: formData,
      }),
    }),

    uploadImage: builder.mutation<any, any>({
      query: (image) => ({
        url: "/image-upload",
        method: "POST",
        body: image,
        //  headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
      }),
    }),

    getProjects: builder.query<ProjectsResponse, void>({
      query: () => `/admin/project`,
    }),

    getProject: builder.query<ProjectResponse, string>({
      query: (id) => `/admin/project/${id}`,
    }),

    addProject: builder.mutation<ProjectResponse, Project>({
      query: (formData) => ({
        url: "/admin/project",
        method: "POST",
        body: formData,
      }),
    }),

    DeleteProject: builder.mutation<ProjectResponse, { id: string }>({
      query: (id) => ({
        url: `/admin/project/${id}`,
        method: "DELETE",
      }),
    }),

    updateProject: builder.mutation<
      ProjectResponse,
      { formData: Project; id: string }
    >({
      query: ({ formData, id }) => ({
        url: `/admin/project/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),

    DeleteUser: builder.mutation<any, string>({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "DELETE",
      }),
    }),

    addUser: builder.mutation<any, User>({
      query: (formData) => ({
        url: "/admin",
        method: "POST",
        body: formData,
        //  headers: {
        //     'Content-Type': 'application/json',
        //   },
      }),
    }),

    getUsers: builder.query<any, void>({
      query: () => `/admin`,
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/admin/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetHomeQuery,
  useGetAbouUsQuery,
  useGetServicesQuery,
  useGetTestimonialsQuery,
  useUpdateTestimonialMutation,
  useGetTestimonialQuery,
  useGetServiceQuery,
  useGetMessagesQuery,
  useUpdateMessageMutation,
  useDeleteMessageMutation,
  useUpdateServiceMutation,
  useGetStatisticQuery,
  useGetStatisticsQuery,
  useUpdateStatisticMutation,
  useUpdateHomeMutation,
  useUpdateAbouUsMutation,
  useGetSharedQuery,
  useUpdateSharedMutation,
  useGetEvaluationQuery,
  useUpdateEvaluationMutation,
  useUploadImageMutation,
  useGetProjectQuery,
  useGetProjectsQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useDeleteUserMutation,
  useAddProjectMutation,
  useGetUsersQuery,
  useAddUserMutation,
  useLoginMutation,
} = Api;
