import React, { useState } from "react";
import { postApi } from "../store/api/post.api";
//авторизационные данные польз-ля для получения данных
const userId = 22;

export const Posts = () => {
  const [search, setSearch] = useState("");
  // skip - опция, которая позволяет управлять получением данных в зависимости от условий(авторизация)
  const { data, isLoading } = postApi.useGetPostsQuery(search, {
    skip: !userId,
  });

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const handleSearch = () => {};
  return (
    <div>
      {isLoading && <h3>...Loading</h3>}
      <input type="search" value={search} onChange={handleSearchInput} />
      <button onClick={handleSearch}>Search</button>
      {data && data.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
};
