function markupOneCountry(country) {
  let template = `
    <div class="country">
        <div class="country__name-mb25 country__row-flex">
          <img src="${country.flags.svg}" alt="Flag of country" width="30">
          <span class="country__name country__name-ml8">
            ${country.name.common}
          </span>
        </div>
        <p><span class="country__header">Capital:</span>`;
  if (country.capital.length) {
    template += country.capital[0];
  }
  for (let i = 1; i < country.capital.length; i += 1) {
    template += ', ' + country.capital[i];
  }
  template += `
        </p>
        <p><span class="country__header">Population:</span>${country.population}</p>
        <p><span class="country__header">Languages:</span>`;
  const languageValues = Object.values(country.languages);
  if (languageValues.length) {
    template += languageValues[0];
  }
  for (let i = 1; i < languageValues.length; i += 1) {
    template += ', ' + languageValues[i];
  }
  template += `
    </div>
    `;
  return template;
}

function makeupCountry(country) {
  return `
    <li class="country__row-flex country__row-mtb6">
      <img src="${country.flags.svg}" alt="Flag of country" width="30">
      <span class="country__name-ml8">${country.name.common} (full name: ${country.name.official})</span>
    </li>`;
}

function makeupSomeCountries(countries) {
  return countries.reduce(
    (acc, country) => (acc += makeupCountry(country)),
    ''
  );
}

export { markupOneCountry, makeupSomeCountries };
