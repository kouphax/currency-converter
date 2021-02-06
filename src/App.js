import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const rates = {
  "GBP": 1,
  "EUR": 1.14,
  "USD": 1.37
}

function convert(value, from, to) {
  return ((parseFloat(value)/rates[from]) * rates[to]).toFixed(2);
}

function App() {

  const [currency, setCurrency] = useState("GBP")
  const [value, setValue] = useState("0.00")

  const [gbpValue, setGbpValue] = useState("0.00")
  const [eurValue, setEurValue] = useState("0.00")
  const [usdValue, setUsdValue] = useState("0.00")


  const onCurrencyChange = e => {
    console.log(e.target.value);
    setCurrency(e.target.value);
    setGbpValue(convert(value, e.target.value,"GBP"))
    setEurValue(convert(value, e.target.value,"EUR"))
    setUsdValue(convert(value, e.target.value, "USD"))
  }


  const onValueChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
    setGbpValue(convert(e.target.value, currency,"GBP"))
    setEurValue(convert(e.target.value, currency,"EUR"))
    setUsdValue(convert(e.target.value, currency, "USD"))
  }

  return (
    <div className="App">
      <h1>Input</h1>
      <div>
        <select onChange={onCurrencyChange} value={currency}>
          <option value="GBP">&pound;</option>
          <option value="EUR" >&euro;</option>
          <option value="USD" >&#36;</option>
        </select>
        <input type="text" value={value} onChange={onValueChange}/>
      </div>
      <h1>Output</h1>
      <table>
        <tbody>
          <tr>
            <td>&pound;</td><td>{gbpValue}</td>
          </tr>
          <tr>
            <td>&euro;</td><td>{eurValue}</td>
          </tr>
          <tr>
            <td>&#36;</td><td>{usdValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
