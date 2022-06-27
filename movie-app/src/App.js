import React, { useState, useEffect } from 'react';


function App() {
  const [Loading , setLoading] = useState(true)
  const [coins, setCoins] = useState([])

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(res => res.json())
    .then(result => {
      setCoins(result)
      setLoading(false)
    })
  },[])
  return (
    <div className="App">
      <h1>The Coins!  {Loading ? null : (coins.length)}</h1>
      {Loading ? <strong>Loding ...</strong> : 
        <ul>
        {coins.map(el=>{
          return <li key={el.id}>
            {el.name},  ({el.symbol}) : ${el.quotes.USD.price}
          </li>
        })}
      </ul>
      }
    </div>
  );
}

export default App;
