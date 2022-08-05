import React from 'react';

function MinutesToHours() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  }
  const reset = () =>setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>  
        <input 
          value={inverted ? amount * 60 : amount}  
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={inverted}
          />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>  
        <input 
          value={inverted ? amount : Math.round(amount / 60)}  
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={!inverted}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>
        {inverted ? "Turn Back" : "Invert"}
      </button>
    </div>
  );
}
function KmToMiles() {
  return (
    <div>
      <h1> Hello </h1>
    </div>
  )

}
function App() {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
        <select value={index} onChange={onSelect}> 
          <option value="xx">Select your units</option>  
          <option value="0">Minutes & Hours</option>  
          <option value="1">Km & Miles</option>  
        </select>
        {index === "xx" ? "Please Select your units" : null}
        {index === "0" ? <MinutesToHours /> : null}
        {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;