import React, { useState } from 'react';

const EnergyPage = ({ onSubmit }) => {
  const [energyData, setEnergyData] = useState({
    electricityUsage: '',
    renewableEnergy: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(energyData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Energy Emissions</h2>
      <label htmlFor="electricityUsage">Average monthly electricity usage (kWh):</label>
      <input
        type="number"
        id="electricityUsage"
        value={energyData.electricityUsage}
        onChange={(e) => setEnergyData({ ...energyData, electricityUsage: e.target.value })}
        required
      />

      <label htmlFor="renewableEnergy">Do you use renewable energy sources?</label>
      <select
        id="renewableEnergy"
        value={energyData.renewableEnergy}
        onChange={(e) => setEnergyData({ ...energyData, renewableEnergy: e.target.value })}
        required
      >
        <option value="">Select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <button type="submit">Click here to go Calculate</button>
    </form>
  );
};

export default EnergyPage;
