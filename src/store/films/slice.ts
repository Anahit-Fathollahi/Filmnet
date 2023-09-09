import { createSlice,  PayloadAction } from '@reduxjs/toolkit'
import { fetchFilms } from "./action";


interface films {
     name: string;
    title: string;
    poster_image: object;
    duration: TimeRanges;
    imdb_rank_percent: number;
    categories: object;
    year: number;

}[]

type InitialState = {
  loading: boolean;
  films: films[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  films: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types


const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchFilms.fulfilled,
      (state, action: PayloadAction<films[]>) => {
        state.loading = false;
        state.films = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.loading = false;
      state.films = [];
      state.error = action.error.message || "Something went wrong";
    });
  }
})

export default filmSlice.reducer
