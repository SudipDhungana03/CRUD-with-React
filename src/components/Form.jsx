import React, { useState } from 'react';
import './Form.css';

const Form = ({ addItem, clearList, showAlert }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName) {
      showAlert('danger', 'Please enter an item');
      return;
    }
    addItem(itemName);
    setItemName('');
    showAlert('success', 'Item added to the list');
  };

  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
      <h2>Grocery Bud</h2>
      <div className="form-control">
        <input
          type="text"
          placeholder="e.g. eggs"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Add Item
        </button>
      </div>
      <button type="button" className="clear-btn" onClick={clearList}>
        Clear Items
      </button>
    </form>
  );
};

export default Form;
