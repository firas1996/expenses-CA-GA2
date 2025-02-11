import "./AddExpense.css";

const AddExpense = () => {
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
  const submitHandler = () => {};
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input placeholder="Title" />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input placeholder="Price" type="number" min="0" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min={minDate} max={maxDate} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
