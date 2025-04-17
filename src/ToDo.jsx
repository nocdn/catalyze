import React, { useState } from "react";
import { X } from "lucide-react";

function ToDo() {
  const [toDoItems, setItems] = useState([
    { title: "learn react", priority: "high" },
    { title: "take out bins", priority: "low" },
  ]);

  function addItem(event) {
    const newItemTitle = document.getElementById("itemInput").value;
    document.getElementById("itemInput").value = "";
    const newItemPriority = document.getElementById("prioritySelect").value;
    console.log("adding new item with title", newItemTitle);
    console.log("its priority is", newItemPriority);

    setItems((t) => [...t, { title: newItemTitle, priority: newItemPriority }]);
  }

  function removeItem(titleToRemove) {
    setItems(toDoItems.filter((item) => item.title !== titleToRemove));
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <input
          id="itemInput"
          type="text"
          placeholder="new todo item"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addItem();
            }
          }}
        />
        <select name="" id="prioritySelect">
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
      <ul>
        {toDoItems.map((item, index) => (
          <li
            className="flex items-center"
            style={{
              color:
                item.priority === "high"
                  ? "red"
                  : item.priority === "medium"
                  ? "orange"
                  : "green",
            }}
            key={index}
          >
            {item.title}
            <X
              className="ml-auto hover:text-red-700 cursor-pointer"
              size={17}
              onClick={() => {
                removeItem(item.title);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
