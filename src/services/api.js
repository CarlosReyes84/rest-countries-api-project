export const getResponse = ()  => {
    return fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => getCountries(data))
}

const getCountries = data =>  {
    const countries = data.map(country => {
        const { name, flags, region, population, capital, subregion, tld, currencies, languages, borders, cca3} = country;
        const { common, official } = name;
        const { svg } = flags;

        return { common, svg, region, population, capital, official, subregion, tld, currencies, languages, borders, cca3 };
    })

    return countries; // => [{common: '', png: ''}, {common: '', png: ''}]
}
