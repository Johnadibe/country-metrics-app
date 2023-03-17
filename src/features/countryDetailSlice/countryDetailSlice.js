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
      const response = await fetch(`${API}${countrySelected}`);
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
        detailCountry: action.payload.map((countryName) => ({
          id: countryName.name.common,
          name: countryName.name.common,
          capital: countryName.capital,
          population: countryName.population,
          map: `https://raw.githubusercontent.com/djaiss/mapsicon/master/all/${countryName.cca2.toLowerCase()}/vector.svg`,
          flag: countryName.flags.png,
          area: countryName.area,
          timezones: countryName.timezones[0],
          ccn3: countryName.ccn3,
          latitude: countryName.latlng[0],
          longitude: countryName.latlng[1],
          languages: countryName.languages,
          coatOfArms: countryName.coatOfArms,
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
