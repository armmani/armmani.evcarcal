import { useState } from 'react'


function App() {
  const [battery, setBattery] = useState("60.22");
  const [time, setTime] = useState("7.5");
  const [ampere, setAmpere] = useState("");
  const [result, setResult] = useState(null);
  const [energy, setEnergy] = useState(null);

  const hdlCalculate = () => {
    const batteryNum = parseFloat(battery);
    const timeNum = parseFloat(time);
    const percentToFill = parseFloat(ampere);

    if (batteryNum > 0 && timeNum > 0 && percentToFill > 0) {
      const energyNeeded = batteryNum * (percentToFill / 100); // kWh
      const powerRequired = energyNeeded / timeNum; // kW
      const amp = (powerRequired * 1000) / 220; // Ampere

      setResult(amp.toFixed(1));
      setEnergy(energyNeeded.toFixed(2));
    } else {
      setResult(null);
      setEnergy(null);
    }
  }

  return (
    <div className="p-30">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">EV Car No LIMIT (Geely EX5)</legend>

        <label className="label">Battery (kWh)</label>
        <input 
        type="number" 
        className="input" 
        placeholder="Enter Your Battery Capacity"
        value = {battery}
        onChange={ (e) => setBattery(e.target.value)} />

        <label className="label">Time (hours)</label>
        <input 
        type="number" 
        className="input" 
        placeholder="Put Your Charging Time"
        value = {time}
        onChange = { (e) => setTime(e.target.value)} />

        <label className="label">% Battery to fill</label>
        <input 
        type="number" 
        className="input" 
        placeholder="% Battery"
        value = {ampere}
        onChange={ (e) => setAmpere(e.target.value)} />
        <div className='divider'/>
        <button 
          className="btn btn-secondary"
          onClick={hdlCalculate}
        >CALCULATE</button>
        {result !== null && (
          <div>
            <p className='divider lg:divider-horizontal'>RESULT</p>
            <h1 className='text-center text-5xl'>{`${result} A`}</h1>
            <h2 className='text-center'>{`${energy} kWh charged`}</h2>
          </div>
        )}
      </fieldset>
    </div>
  )
}

export default App
