import { Country } from "./Country";
import { FaSpinner } from "react-icons/fa";
import { IconContext } from "react-icons";

export const Countries = ({data, loading, search, region1 }) => {
  

  const filteredCountries = data
    .filter(country => country.common.toLowerCase().includes(search.toLowerCase()))
    .filter(country => country.region.includes(region1));

  if (loading) {
    return (
      <IconContext.Provider
        value={{ style: { fontSize: "6rem" }, className: "spinner" }}
      >
        <div className="loading">
          <FaSpinner />
          <p>Loading...</p>
        </div>
      </IconContext.Provider>
    );
  }

  return (
    <div className="countries">
      <div className="container countries-container">
        {filteredCountries.map((country) => {
          const { common, svg, population, region, capital } = country;
          return (
            <Country
              key={common}
              name={common}
              flag={svg}
              population={population}
              region={region}
              capital={capital}
            />
          );
        })}
      </div>
    </div>
  );
};
