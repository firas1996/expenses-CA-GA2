import { useState } from "react";
import "./AddExpense.css";

const AddExpense = ({ getNewItem, id }) => {
  const [display, setDisplay] = useState(false);
  const displayHandler = () => {
    setDisplay(!display);
  };
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const today = new Date(Date.now()).getFullYear();
  const maxDate = `${today + 2}-12-31`;
  const minDate = `${today - 2}-01-01`;
  const submitHandler = (e) => {
    e.preventDefault();
    getNewItem({
      id: id + 1,
      title: inputs.title,
      price: +inputs.price,
      date: new Date(inputs.date),
    });
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      {/* {condition ? afficher ca si la condition est valid : sinon afficher cette partie de code} */}
      {display ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                required
                name="title"
                onChange={handelChange}
                value={inputs.title}
                placeholder="Title"
              />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                required
                name="price"
                onChange={handelChange}
                value={inputs.price}
                placeholder="Price"
                type="number"
                min="0"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                required
                name="date"
                onChange={handelChange}
                value={inputs.date}
                type="date"
                min={minDate}
                max={maxDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={displayHandler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={displayHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddExpense;
