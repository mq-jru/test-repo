import { useEffect, useState } from "react";

const Countries = () => {
    const [myCountries, setMyCountries] = useState([])


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => setMyCountries(json))
    //   .then(json => console.log(json))
      .catch((err) => console.log('error durring fetch', err));
  }, []); //empty dependency array

  return (
    <div>
      <h1>This is the countries PAGE</h1>
      {myCountries.map(country => {
        return (
            <div>
            <h3>{country.name.common}</h3>
            <img src={country.flags.png} alt="country-flag" width={200}/>
            </div>
        )
      })}
    </div>
  );
};

export default Countries;
