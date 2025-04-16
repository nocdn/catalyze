import React, { useState } from "react";

function myComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(19);
  const [isEmployed, setIsEmployed] = useState(true);

  const updateName = () => {
    setName("nocdn");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div className="flex flex-col gap-1">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>{isEmployed ? "Employed" : "Unemployed"}</p>
      <div className="flex items-center gap-2">
        <button
          className="border border-gray-200 px-2 py-0.75"
          onClick={updateName}
        >
          Set Name
        </button>
        <button
          className="border border-gray-200 px-2 py-0.75"
          onClick={incrementAge}
        >
          Add Age
        </button>
      </div>
      <button
        className="border border-gray-200 px-2 py-1"
        onClick={toggleEmployedStatus}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default myComponent;
