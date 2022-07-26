import { Link } from "wouter";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IconContext } from "react-icons";

export const Countryinfo = ({ param, data }) => {
  const { country1 } = param;
  const clearCountry = country1.replace(/%20/g, " ");
  const filterPerName = data.filter(
    (country) => country.common === clearCountry
  );
  return (
    <div className="country-info1 container">
      <IconContext.Provider value={{ className: "arrow-left" }}>
        <Link to="/">
          <a>
            <button className="button-back" type="button">
              <AiOutlineArrowLeft />
              Back
            </button>
          </a>
        </Link>
      </IconContext.Provider>
      {filterPerName.map((country) => {
        const {
          common,
          svg,
          official,
          population,
          region,
          subregion,
          capital,
          tld,
          languages,
          currencies,
          borders,
        } = country;

        const language = Object.values(languages);
        const currency = Object.values(currencies);
        const actualCurrency = currency[0].name;

        return (
          <div className="information" key={common}>
            <div className="country-image">
              <img src={svg} alt="image-country" />
            </div>

            <div className="text-country">
              <h1>{common}</h1>

              <div className="text-information">
                <div className="first">
                  <p>
                    <span>Native Name: </span>
                    {official}
                  </p>
                  <p>
                    <span>Population: </span>
                    {population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {capital}
                  </p>
                </div>
                <div className="second">
                  <p>
                    <span>Top Level Domain: </span>
                    {tld}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {actualCurrency}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {language}
                  </p>
                </div>
              </div>

              <div className="borders">
                <p>Border Countries:</p>
                <div className="border">{makeItVisible(borders, data)}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function MapBorders(borders) {
  const borderCountry = borders.map((border) => {
    return border;
  });
  return borderCountry; // ==> [ "GTM", "USA" ]
}

function makeItVisible(borders, data) {
  if (borders === undefined) return;

  const save = [];

  const borders1 = MapBorders(borders); // ==> [ "GTM", "USA" ]

  const borderCountry = borders1.map((border) => { // ==> ['GTM'],['USA']]
    const filterPerName = data.filter((countri) => countri.cca3 === border);

    return filterPerName;
  });

  //convert to array of objects
  borderCountry.forEach((arr) => {
    save.push(arr[0])
  })
  

  return save.map(({common}) => {
    return (
        <Link to={common} key={common}>
          <a>
            <button className="borderChild" type="button">
                <p>{common}</p>
            </button>
          </a>
        </Link>
    )
  })
}


