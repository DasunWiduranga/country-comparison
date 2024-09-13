import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountrySelector = ({ onSelectCountry }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry1, setSelectedCountry1] = useState('');
    const [selectedCountry2, setSelectedCountry2] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then(response => setCountries(response.data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const handleSelectCountry1 = (e) => {
        setSelectedCountry1(e.target.value);
        onSelectCountry(e.target.value, 'country1');
    };

    const handleSelectCountry2 = (e) => {
        setSelectedCountry2(e.target.value);
        onSelectCountry(e.target.value, 'country2');
    };

    return (
        <div>
            <select value={selectedCountry1} onChange={handleSelectCountry1}>
                <option value="">Select Country 1</option>
                {countries.map(country => (
                    <option key={country.alpha3Code} value={country.alpha3Code}>
                        {country.name}
                    </option>
                ))}
            </select>

            <select value={selectedCountry2} onChange={handleSelectCountry2}>
                <option value="">Select Country 2</option>
                {countries.map(country => (
                    <option key={country.alpha3Code} value={country.alpha3Code}>
                        {country.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountrySelector;
