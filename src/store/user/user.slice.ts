import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPosts, userActionThunk } from "./user.actions";
import { IUser } from "../../types/user";

const initialState: IUser = {
  isLoading: false,
  user: {
    userId: 1,
    id: 1,
    title: "",
    body: "",
  },
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userActionThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      userActionThunk.fulfilled,
      (state, action: PayloadAction<IPosts>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = "";
      }
    );
    builder.addCase(userActionThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;
