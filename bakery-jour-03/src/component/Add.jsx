import { useState } from "react";

function Add(props) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(1);

  const updateProductName = (event) => {
    setProductName(event.target.value)
  };

  const updatePrice = (event) => {
    setPrice(event.target.value)
  };


  return (
    <div>
      <p>Bonjour ici Add</p>
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={ updateProductName}
          value={productName}
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => {props.addFunction(productName, price)}}
        >
          Add
        </button>
        <label for="customRange1" class="form-label"></label>
        <input
          type="range"
          class="form-range"
          id="customRange1"
          onChange={updatePrice}
          value={price}
          min="1"
          max="30"
        ></input>
      </div>
      <p>  {productName}</p>
        <p>  {price}</p>
    </div>
  );
}

export default Add;
