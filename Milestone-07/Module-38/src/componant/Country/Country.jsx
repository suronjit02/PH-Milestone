import React from 'react';

const Country = ({ country }) => {

    console.log(country);

    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h3>Capital: {country.capital.capital}</h3>
        </div>
    );
};

export default Country;