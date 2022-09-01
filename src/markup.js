import markupCountry from './templates/markupCountry.hbs';
import markupOneCountry from './templates/markupOneCountry.hbs';

function markupSomeCountries(countries) {
  return countries.reduce(
    (acc, country) => (acc += markupCountry(country)),
    ''
  );
}

export { markupOneCountry, markupSomeCountries };
