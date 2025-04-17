import React, { useState } from "react";

function UpdatingObjects() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Aston Martin",
    model: "Vantage",
  });

  function handleYearChange(event) {
    setCar({ ...car, year: event.target.value });
  }

  return (
    <div>
      <p>
        Your favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="text" placeholder={car.year} onChange={handleYearChange} />
    </div>
  );
}

export default UpdatingObjects;
