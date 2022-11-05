import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data =>setCountries(data));
    },[])
    return (
        <div className='all_countries'>
            {
            countries.map(country =><Country country={country} key={country.cca3}></Country> )
            }
            
        </div>
    );
};

export default Countries;




























// import React, { useEffect, useState } from 'react';
// import './Country.css'
// const Country = () => {
//     const [countries, setCountries] = useState([])
//     useEffect(() => {
//         fetch('https://restcountries.com/v3.1/all')
//             .then(res => res.json())
//         .then(data => setCountries(data))
//     },[])
//     return (
//         <div>
//         {
//                 countries.map(country => <SingelCountry country={country}></SingelCountry>)
//         }
            


//         </div>
//     );
// };


// function SingelCountry(props) {
//     const {area,name,population,languages,capital,altSpellings}=props.country
//     return (
//         <div className='country'>
//             <p>Country Name : {name.common} </p>
//             <p>Country Area : {area} </p>
//             <p>Population : {population}</p>
//             {/* <p>Language : {languages.eng}</p> */}
//             <p>Capital: {capital}</p>
//             <p>Alt Spellings : {altSpellings}</p>
//         </div>
//     )
// }
