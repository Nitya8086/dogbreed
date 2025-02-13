import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dog.ceo/api/breeds/list/all"; 

export const fetchBreeds = createAsyncThunk("dogBreeds/fetchBreeds", async () => {
  const response = await axios.get(API_URL);
  return response.data.message;
});

const dogBreedsSlice = createSlice({
  name: "dogBreeds",
  initialState: {
    breeds: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.loading = false;
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dogBreedsSlice.reducer;
