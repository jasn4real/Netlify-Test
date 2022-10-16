// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  console.log(process.env.REACT_APP_API_KEY);

  const [drinks, setDrinks] = useState([]);

  function getDrinkOnClick() {
  
  fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  }).then(response => response.json()).then(data => {
    console.log(data);
    setDrinks(data.drinks);
  });
}

  return (
    <div>
      <button onClick={getDrinkOnClick}>Get Drinks</button>
      {
        drinks.map(d => {
          return (
            <div>
              { d.strDrink }
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
