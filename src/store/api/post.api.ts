import { IPost } from "../../types/post";
import { api } from "./api";
//метод добавления эндпоинтов в RTK Query
export const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], string>({
      query: () => "/posts",
      providesTags: () => [{ type: "Post" }],
    }),
    createPost: builder.mutation<IPost, Omit<IPost, "id">>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: () => [{ type: "Post" }],
    }),
  }),
});
