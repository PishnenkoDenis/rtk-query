import React from "react";
import { useState } from "react";
import { postApi } from "../store/api/post.api";

export const Form = () => {
  const [post, setPost] = useState({ title: "", views: 0 });

  const [createPost, {}] = postApi.useCreatePostMutation();

  const titleHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPost({ ...post, title: e.target.value });
  const viewsHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPost({ ...post, views: Number(e.target.value) });

  const submitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPost(post).then(() => setPost({ title: "", views: 0 }));
  };

  return (
    <form
      onSubmit={submitHandle}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "150px",
        gap: "10px",
      }}
    >
      <label htmlFor="title">
        <input
          type="text"
          name="title"
          id="title"
          value={post.title}
          onChange={titleHandle}
        />
      </label>
      <label htmlFor="views">
        <input
          type="number"
          name="views"
          id="views"
          value={post.views}
          onChange={viewsHandle}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
