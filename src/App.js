import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountrySelector from './components/CountrySelactor';
import CountryComparison from './components/CountryComparison';
import './App.css'; 

function App() {
    const [country1, setCountry1] = useState(null);
    const [country2, setCountry2] = useState(null);

    const fetchCountryData = (alphaCode, countryType) => {
        axios.get(`https://restcountries.com/v2/alpha/${alphaCode}`)
            .then(response => {
                if (countryType === 'country1') {
                    setCountry1(response.data);
                } else {
                    setCountry2(response.data);
                }
            })
            .catch(error => console.error('Error fetching country data:', error));
    };

    const handleSelectCountry = (alphaCode, countryType) => {
        fetchCountryData(alphaCode, countryType);
    };

    return (
        <div className="App">
            <h1>Country Comparison</h1>
            <CountrySelector onSelectCountry={handleSelectCountry} />
            <CountryComparison country1={country1} country2={country2} />
        </div>
    );
}

export default App;
