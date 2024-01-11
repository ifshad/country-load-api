import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [countries, setCountires] = useState([]);
  // const [country, setCountry] = useState();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountires(data))
      .catch(error => console.log(error))
  }, [])

  // console.log(country);
  return (
    <div className="min-h-screen flex justify-center items-center text-center">
      <div>
        <h2>Total Country: {countries.length}</h2>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>Who shot first?</option>
          {
            countries.map((country) =>
            <option key={country.cca2}>{country.name.common}</option>
            )
          }
        </select>
      </div>
    </div>
  );
};

export default App;