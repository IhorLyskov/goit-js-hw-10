import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
  const name = e.target.value.trim();
  if (name.length) fetchCountries(name).then(outputCountries);
}

function outputCountries(countries) {
  if (countries === undefined) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
  } else if (countries.length === 1) {
    outputOneCountry(countries[0]);
  } else if (countries.length < 11) {
    outputSomeCountries(countries);
    console.log(countries);
  } else {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

function outputOneCountry(country) {
  console.log(country.name.official);
  for (let i = 0; i < country.capital.length; i += 1) {
    console.log(country.capital[i]);
  }
  console.log(country.population);
  console.log(country.flags.svg);
  for (const languageKey in country.languages) {
    console.log(country.languages[languageKey]);
  }
}

function outputSomeCountries(countries) {
  console.log(countries);
}
