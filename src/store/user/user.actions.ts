import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/posts";

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const userActionThunk = createAsyncThunk(
  "user/fetchUserById",
  async (id: number, thunkApi) => {
    try {
      const res = (await axios.get<IPosts>(`${USER_URL}/${id}`)).data;
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue("something went wrong");
    }
  }
);
