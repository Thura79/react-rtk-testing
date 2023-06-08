import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clogApi = createApi({
  reducerPath: "clogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["clogApi"],
  endpoints: (builder) => ({
    getClogsbyName: builder.query({
      query: () => "/blogs",
      providesTags: ["clogApi"],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["clogApi"],
    }),
    getCreateBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",

        method: "POST",

        body: blog,
      }),
      invalidatesTags: ["clogApi"],
    }),

    getDeleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        body: id
      }),
      invalidatesTags: ["clogApi"]
    }),

    getEditBlogSingle: builder.mutation({
      query: (newData) => ({
        url: `/blogs/${newData?.id}`,
        method: "PATCH",
        body: newData
      }),
      invalidatesTags: ["clogApi"]
    })
  }),
});

export const {
  useGetClogsbyNameQuery,
  useGetSingleBlogQuery,
  useGetCreateBlogMutation,
  useGetDeleteBlogMutation,
  useGetEditBlogSingleMutation
} = clogApi;
