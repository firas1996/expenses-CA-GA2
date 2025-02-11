import "./AddExpense.css";

const AddExpense = () => {
  return (
    <div className="new-expense">
      <form>
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
            <input type="date" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
