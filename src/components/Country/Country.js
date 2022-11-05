import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props)
    const { area, name, population, languages, capital, altSpellings,flags } = props.country;
    return (
        <div className='country'>
            <p>Countries Name : {name.common}</p>
            <img src={flags.png} alt="Country Img" />
            <p>area : {area}</p>
            <p>Population : {population}</p>
            <p>Capital : {capital}</p>
            {/* <p>languages : {languages.vie}</p> */}
            <p>AltSpellings : {altSpellings}</p>
        </div>
    );
};

export default Country;