import React, { useState } from 'react';

const DietPage = ({ onSubmit }) => {
  const [dietData, setDietData] = useState({
    meatConsumption: '',
    vegetarianMealsPerWeek: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(dietData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Diet Emissions</h2>
      <label htmlFor="meatConsumption">How often do you consume non-veg meals per week?</label>
      <input
        type="number"
        id="meatConsumption"
        value={dietData.meatConsumption}
        onChange={(e) => setDietData({ ...dietData, meatConsumption: e.target.value })}
        required
      />

      <label htmlFor="vegetarianMealsPerWeek">How often do you consume Veg meals per week?</label>
      <input
        type="number"
        id="vegetarianMealsPerWeek"
        value={dietData.vegetarianMealsPerWeek}
        onChange={(e) => setDietData({ ...dietData, vegetarianMealsPerWeek: e.target.value })}
        required
      />

      <button type="submit">Click here to go Next</button>
    </form>
  );
};

export default DietPage;
