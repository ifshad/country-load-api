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
        {
          countries.map(
            (country , index) => 
            <div key={country.cca2}>
              <p>{`${index+1}.${country.name.common}`}</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default App;