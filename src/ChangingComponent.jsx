import React, { useState } from "react";

function ChangingComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function submitOrder() {
    const order = {
      name: name,
      quantity: quantity,
      comment: comment,
    };

    console.log("order", order);
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={name}
        placeholder="nocdn"
        onChange={handleNameChange}
        className="outline outline-gray-200"
      />
      <p>Name: {name}</p>
      <input
        type="text"
        value={quantity}
        placeholder="0"
        onChange={handleQuantityChange}
        className="outline outline-gray-200"
      />
      <p>Quantity: {quantity}</p>
      <textarea
        type="text"
        value={comment}
        placeholder="Comment"
        onChange={handleCommentChange}
        className="outline outline-gray-200"
      />
      <p>Comment: {comment}</p>
      <button className="mr-auto bg-gray-100 px-2 py-1" onClick={submitOrder}>
        Submit Order
      </button>
    </div>
  );
}

export default ChangingComponent;
