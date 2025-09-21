import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countryPromise }) => {

    const countryData = use(countryPromise);

    const countries = countryData.countries;
    console.log(countries);

    return (
        <div>
            <h1>In the country: {countries.length}</h1>

            {
                countries.map(country => <Country country={country}></Country>)
            }

        </div>
    );
};

export default Countries;