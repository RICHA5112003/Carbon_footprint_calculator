import React, { useState } from 'react';

const TransportPage = ({ onSubmit }) => {
  const [transportData, setTransportData] = useState({
    milesDriven: '',
    vehicleType: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(transportData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Transport Emissions</h2>
      <label htmlFor="milesDriven\n">How many miles do you drive per week?</label>
      <input
        type="number"
        id="milesDriven"
        value={transportData.milesDriven}
        onChange={(e) => setTransportData({ ...transportData, milesDriven: e.target.value })}
        required
      />

      <label htmlFor="vehicleType"> What type of vehicle do you drive?</label>
      <select
        id="vehicleType"
        value={transportData.vehicleType}
        onChange={(e) => setTransportData({ ...transportData, vehicleType: e.target.value })}
        required
      >
        <option value="">Select vehicle type</option>
        <option value="public">Public transport</option>
        <option value="private">Private transport</option>
        {/* Add more options based on your needs */}
      </select>

      <button type="submit">Click here to go Next</button>
    </form>
  );
};

export default TransportPage;
