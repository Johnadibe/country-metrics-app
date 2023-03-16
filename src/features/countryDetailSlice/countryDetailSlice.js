import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = 'https://restcountries.com/v3.1/name/';

const initialState = {
  detailCountry: [],
  status: 'idle',
  error: null,
  countrySelected: '',
};

export const fetchCountryDetail = createAsyncThunk(
  'countryDetail/fetchCountryDetail',
  async (countrySelected) => {
    try {
      const response = await fetch(`${API + countrySelected}`);
      return response.json();
    } catch (error) {
      return error.message;
    }
  },
);

export const countryDetailSlice = createSlice({
  name: 'countryDetail',
  initialState,
  reducers: {
    countrySelectedAction: (state, action) => ({
      ...state,
      countrySelected: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryDetail.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCountryDetail.fulfilled, (state, action) => ({
        ...state,
        detailCountry: (action.payload).map((country) => ({
          id: country.name.common,
          name: country.name.common,
          capital: country.capital,
          population: country.population,
          map: `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${country.cca2.toLowerCase()}/vector.svg`,
          flag: country.flags.png,
          area: country.area,
          timezones: country.timezones[0],
          ccn3: country.ccn3,
          latitude: country.latlng[0],
          longitude: country.latlng[1],
          languages: country.languages,
          coatOfArms: country.coatOfArms,
        })),
        status: 'succeeded',
      }))
      .addCase(fetchCountryDetail.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const { countrySelectedAction } = countryDetailSlice.actions;
export default countryDetailSlice.reducer;
