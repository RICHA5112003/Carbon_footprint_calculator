import React, { useState } from 'react';
import './App.css';
import TransportPage from './TransportPage';
import DietPage from './DietPage';
import EnergyPage from './EnergyPage';
import './styles.css';
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [transportData, setTransportData] = useState({});
  const [dietData, setDietData] = useState({});
  const [energyData, setEnergyData] = useState({});
  const [totalEmissions, setTotalEmissions] = useState(null);

  const handleInternalLinkClick = () => {
    alert('This could be your internal link functionality.');
  };

  const handleTransportSubmit = (data) => {
    setTransportData(data);
    setCurrentPage('diet');
  };

  const handleDietSubmit = (data) => {
    setDietData(data);
    setCurrentPage('energy');
  };

  const handleEnergySubmit = (data) => {
    setEnergyData(data);
    calculateTotalEmissions();
  };

  const calculateTotalEmissions = () => {
    const transportEmissions = calculateTransportEmissions(transportData);
    const dietEmissions = calculateDietEmissions(dietData);
    const energyEmissions = calculateEnergyEmissions(energyData);

    const total = transportEmissions + dietEmissions + energyEmissions;
    setTotalEmissions(total.toFixed(2));
  };

  const calculateTransportEmissions = (data) => {
    const milesDriven = parseFloat(data.milesDriven) || 0;
    const vehicleTypeMultiplier = getVehicleTypeMultiplier(data.vehicleType);
    return milesDriven * vehicleTypeMultiplier;
  };

  const getVehicleTypeMultiplier = (vehicleType) => {
    switch (vehicleType) {
      case 'public':
        return 0.1;
      case 'private':
        return 0.25;
      default:
        return 0;
    }
  };

  const calculateDietEmissions = (data) => {
    const meatConsumption = parseFloat(data.meatConsumption) || 0;
    const vegetarianMealsPerWeek = parseFloat(data.vegetarianMealsPerWeek) || 0;
    const meatEmissionFactor = 5;
    const vegetarianMealEmissionFactor = 2; 
    return (meatConsumption * meatEmissionFactor) + (vegetarianMealsPerWeek * vegetarianMealEmissionFactor);
  };

  const calculateEnergyEmissions = (data) => {
    const electricityUsage = parseFloat(data.electricityUsage) || 0;
    const renewableEnergyFactor = data.renewableEnergy === 'yes' ? 0.5 : 1;
    return electricityUsage * renewableEnergyFactor;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <h1>Track Your Carbon Emissions</h1>
            <p>Calculate Your carbon footprint based on your lifestyle choices.</p>
            <button onClick={() => setCurrentPage('transport')}>Start Calculation</button>
          </div>
        );
      case 'transport':
        return <TransportPage onSubmit={handleTransportSubmit} />;
      case 'diet':
        return <DietPage onSubmit={handleDietSubmit} />;
      case 'energy':
        return <EnergyPage onSubmit={handleEnergySubmit} />;
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <header>
        {currentPage !== 'home' && (
          <button onClick={() => setCurrentPage('home')}>Get your Results</button>
        )}
      </header>
      <main>
        {renderPage()}
        {/* https://en.wikipedia.org/wiki/Carbon_footprint */}
         <p>
          <a href="https://en.wikipedia.org/wiki/Carbon_footprint" onClick={handleInternalLinkClick}>
            Learn more about Carbon Footprint
          </a>
        </p>
        </main>
      <footer>
        {totalEmissions !== null && (
          <div id="result">
            <p>Your total carbon footprint is: {totalEmissions} kg Co2</p>
          </div>
        )}
      </footer>
    </div>
  );
};

export default App;
