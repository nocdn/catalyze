import React, { useState } from "react";

function UpdatingArray() {
  const [foods, setFoods] = useState(["Orange", "Kiwi", "Grape"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...foods, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of foods:</h2>
      <ul>
        {foods.map((food, index) => (
          <li
            className="cursor-pointer"
            onClick={() => {
              handleRemoveFood(index);
            }}
            key={index}
          >
            {food}
          </li>
        ))}
      </ul>
      <input type="text" name="" id="foodInput" placeholder="enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default UpdatingArray;
