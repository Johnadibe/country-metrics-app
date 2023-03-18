import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
import { fetchCountries, search } from "./features/homeSlice/homeSlice";
import { fetchCountryDetail } from "./features/countryDetailSlice/countryDetailSlice";

it("renders App without crashing", () => {
    const root = renderer.create(
        <Provider store={store}>
            <App />
        </Provider>,
    ).toJSON();
    expect(root).toMatchSnapshot();
});

it("renders Navbar without crashing", () => {
    const root = renderer.create( 
        <BrowserRouter>
        <Provider store={store}>
            <Navbar />
        </Provider>,
        </BrowserRouter>,
    ).toJSON();
    expect(root).toMatchSnapshot();
});

it("renders Home without crashing", () => {
    const root = renderer.create(
        <BrowserRouter>
        <Provider store={store}>
            <Home />
        </Provider>,
        </BrowserRouter>,
    ).toJSON();
    expect(root).toMatchSnapshot();
});

it("renders CountryDetail without crashing", () => {
    const root = renderer.create(
        <BrowserRouter>
        <Provider store={store}>
            <CountryDetail />
        </Provider>,
        </BrowserRouter>,
    ).toJSON();
    expect(root).toMatchSnapshot();
});

// HomeSlice and Reducer Check

describe("Country Home redux state test", () => {
    it('Should initially Country store to an empty Array', () => {
        const state = store.getState().country;
        expect(state.countriesData).toEqual([]);
      });

      it('should Country payload send correct', () => {
        const expectedPayload = { payload: 'Serbia', type: 'countries/search' };
        const actualPayload = search('Serbia');
        expect(actualPayload).toEqual(expectedPayload);
      });

      it('fetch Country data from API', async () => {
        const url = 'https://restcountries.com/v3.1/region/europe';
        const axiosSpy = jest.spyOn(axios, 'get');
        jest.setTimeout(90000);
        const dispatchSpy = jest.fn();
    
        await fetchCountries(url)(dispatchSpy);
    
        expect(axiosSpy).toHaveBeenCalledWith(url);
      });
});

// country Deatai slicer and reducer check

describe('country Detail redux state tests', () => {
  it('Should initially Country detail store to an empty Array', () => {
    const state = store.getState().countryDetail;
    expect(state.detailCountry).toEqual([]);
  });
  it('fetch Country data from API', async () => {
    const url = 'https://restcountries.com/v3.1/name/serbia';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();

    await fetchCountryDetail('Serbia', url)(dispatchSpy);

    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});