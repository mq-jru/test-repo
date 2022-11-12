import { useEffect, useState } from "react";
import '../style.scss';



const Countries = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [myCountries, setMyCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setMyCountries(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        //Note: important to handle errors here instead of a catch() block
        //so that we don't swallow
        // exceptions from actual bugs in components.
      );
    //   .then(json => console.log(json))
  }, []); //empty dependency array

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        {/* <h1>This is the countries PAGE</h1> */}
        <ul className="card-grid">
          {myCountries.map((country) => {
            return (
              <li>
                <article className="card" key={country.callingCodes}>
                  <div className="card-image">
                    <img src={country.flags.png} alt={country.name.common} width={200} />
                  </div>
                  <div className="card-content">
                    <h2 className="card-name">{country.name.common}</h2>
                    <ol className="class-list">
                      <li>
                        Population: <span>{country.population}</span>
                      </li>
                      <li>
                        Region:
                        <span>{country.region}</span>
                      </li>
                      <li>
                        Capital:
                        <span>{country.capital}</span>
                      </li>
                    </ol>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Countries;
