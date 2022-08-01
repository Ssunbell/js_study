import {useState,useEffect} from 'react';

function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [mymoney,setMoney] = useState(0);
  const [converted,setConverted] = useState(0);
  const [coinTxT,setcoinTxT] = useState('BTC');

  function onClick(){
    setMoney(0)
  }
  function change(tp){
    console.log(coins[tp.target.value])
    setConverted(coins[tp.target.value].quotes.USD.price)
    setcoinTxT(coins[tp.target.value].symbol)
  }
  function onChange(event){
    setMoney(event.target.value)
    console.log(mymoney)
  }

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers').then(
      (response) => response.json()
    ).then((json) => setCoins(json))
    setLoading(false)
  },[]);

  return (
    <div className="App">
      <h1>The Coins!</h1>

      Select Coin Converter
      <br/>
      {loading ? <strong>loading..</strong> : <select onChange={change}>
          {coins.map((coin,idx) => (<option value={idx}>{coin.name}</option>))}
        </select>}
      <div>
        <br/>
          Insert your dollors!
        <br/>
        <ul>
          <input
             value={mymoney}
             onChange={onChange} 
             type='number' 
             placeholder='Search here'/>
        </ul> 
        <button onClick={onClick}>Reset</button>
        
        <h1>{(isNaN(mymoney/converted)) ? 0 : mymoney/converted} {coinTxT}</h1>

      </div>

    </div>
  );
}

export default App;
