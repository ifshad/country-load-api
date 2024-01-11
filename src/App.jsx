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
        {
          countries.map(
            country => <h3 key={country.cca2}>{country.name.common}</h3>
          )
        }
      </div>
    </div>
  );
};

export default App;