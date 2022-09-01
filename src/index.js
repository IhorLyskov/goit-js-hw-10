import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { markupOneCountry, makeupSomeCountries } from './markup';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchBoxInput, DEBOUNCE_DELAY)
);

function onSearchBoxInput(e) {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';

  const name = e.target.value.trim();
  if (name.length) {
    fetchCountries(name).then(outputCountries);
  }
}

function outputCountries(countries) {
  if (countries === undefined) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
  } else if (countries.length === 1) {
    renderOneCountry(countries[0]);
  } else if (countries.length < 11) {
    renderSomeCountries(countries);
  } else {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

function renderOneCountry(country) {
  const markup = markupOneCountry(country);
  refs.countryInfo.innerHTML = markup;
}

function renderSomeCountries(countries) {
  const markup = makeupSomeCountries(countries);
  refs.countryList.innerHTML = markup;
}
