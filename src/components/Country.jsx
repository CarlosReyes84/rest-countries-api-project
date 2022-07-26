import { Link } from "wouter"

export const Country = ({ flag, name, population, region, capital }) => {
    return (
            <Link to={name}>
                <div className="country">
                        <div className="country-image">
                            <img src={flag} alt="image-country" />
                        </div>
                        <div className="country-info">
                            <h1>{name}</h1>
                            <p><span>Population: </span>{population}</p>
                            <p><span>Region: </span>{region}</p>
                            <p><span>Capital: </span>{capital}</p>
                        </div>
                </div>
            </Link>
    )
}