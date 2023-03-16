import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const API = 'https://restcountries.com/v3.1/region/europe';
const API = 'https://restcountries.com/v3.1/all';

const initialState = {
  countriesData: [], // Getting Data for all the countries
  status: 'idle',
  error: null,
  searchResult: '',
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const response = await fetch(API);
      return response.json();
    } catch (error) {
      return error.message;
    }
  },
);

export const homeSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    search: (state, action) => ({
      ...state, searchResult: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state, status: 'loading',
      }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        countriesData: action.payload.map((country) => ({
          id: country.cca3,
          name: country.name.common,
          capital: country.capital,
          population: country.population,
          map: `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${country.cca2.toLowerCase()}/vector.svg`,
        })),
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const { search } = homeSlice.actions;
export default homeSlice.reducer;
