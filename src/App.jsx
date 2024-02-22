import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [countries, setCountires] = useState([]);
  // const [country, setCountry] = useState();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const sortedCountries = data.sort((a, b) => {
          a.name.common.localeCompare(b.name.common)
        });
        setCountires(sortedCountries);
      })
      .catch(error => console.log(error))
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const country = form.get('country');
    console.log(country);
  }
  return (
    <div className="min-h-screen flex justify-center items-center text-center">
      <div>
        <h2>Total Country: {countries.length}</h2>
        <form onSubmit={handleSubmit}>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Who shot first?</option>
            {
              countries.map((country) =>
                <option name='country' key={country.cca2}>{country.name.common}</option>
              )
            }
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;