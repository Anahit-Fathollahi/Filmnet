import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../utils/service";

export const fetchFilms = createAsyncThunk(
  "film/fetchFilms",
  async (offset: number, thunkAPI) => {
    const perSatate = thunkAPI.getState()?.film?.films || [];

    const updateData = await callApi(`video-contents?offset=${offset}&count=24`)
      .then((response) => response?.data?.data || [])
      .catch(() => []);
    return [...perSatate, ...updateData];
  }
);
