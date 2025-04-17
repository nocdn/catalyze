import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="grid place-content-center px-4 py-3"
      >
        {color}
      </div>
      <input type="color" onChange={handleColorChange} />
    </>
  );
}

export default ColorPicker;
