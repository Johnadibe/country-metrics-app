import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import homeReducer from '../../features/homeSlice/homeSlice';
import countriesDetailReducer from '../../features/countryDetailSlice/countryDetailSlice';

const store = configureStore({
  reducer: {
    country: homeReducer,
    countryDetail: countriesDetailReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
