import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countryPromise }) => {


    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedCountries = (country) => {

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {

        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);

    }

    const countryData = use(countryPromise);
    const countries = countryData.countries;


    return (
        <div>
            <h1>In the country: {countries.length}</h1>
            <h2>Total country visited: {visitedCountries.length}</h2>
            <h2>Total flag visited: {visitedFlag.length}</h2>

            <ol>

                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>

                        {country.name.common}</li>)
                }

            </ol>

            <div className='visited-flag-container'>
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag} alt="" />)
                }
            </div>

            <div className='countries'>


                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;