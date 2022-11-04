import React, { useEffect, useState} from 'react';
import './Country.css'
const Country = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
        {
                countries.map(country => <SingelCountry name={country.name.common} area ={country.area}></SingelCountry>)
        }
            


        </div>
    );
};


function SingelCountry(props) {
    return (
        <div className='all_country'>
            <div className='country'>
                <p>Country Name : {props.name} </p>
                <p>Country Area : {props.area} </p>
            </div>
        </div>
    )
}









export default Country;