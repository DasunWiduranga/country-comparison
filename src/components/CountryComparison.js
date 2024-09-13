import React from 'react';

const CountryComparison = ({ country1, country2 }) => {
    if (!country1 || !country2) {
        return <div>Select two countries to compare.</div>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {[country1, country2].map((country, index) => (
                <div key={index}>
                    <h3>{country.name}</h3>
                    <img src={country.flag} alt={`${country.name} flag`} width="150px" />
                    <p><strong>Capital:</strong> {country.capital}</p>
                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                    <p><strong>Area:</strong> {country.area} km²</p>
                    <p><strong>Languages:</strong> {country.languages.map(lang => lang.name).join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default CountryComparison;
