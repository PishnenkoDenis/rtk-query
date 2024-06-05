import React from "react";
import { useEffect } from "react";
import { userActionThunk } from "../store/user/user.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export const User = () => {
  const { user, isLoading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActionThunk(1));
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h3>...Loading</h3>}
      {error && <h3>{error}</h3>}
      <h3>User: {user.title}</h3>
    </div>
  );
};
