import React, { useState } from 'react';
import './country.css'


const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {

    const [Visited, setVisited] = useState(false);

    const handleClick = () => {

        // if (Visited) {
        //     setVisited(false);
        // }
        // else setVisited(true);

        // setVisited(Visited ? false : true);

        setVisited(!Visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${Visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h3>Capital: {country.capital.capital}</h3>
            <h4>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</h4>
            <button onClick={handleClick}>

                {Visited ? "Visited" : "Not Visited"}
            </button>

            <button onClick={() => { handleVisitedFlag(country.flags.flags.png) }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;