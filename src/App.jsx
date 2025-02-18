import { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseItem from "./components/ExpenseItem";
import ExpensesContainer from "./components/ExpensesContainer";

const oldData = [
  {
    id: 1,
    title: "Item 1",
    price: 1111,
    date: new Date(2025, 0, 28),
  },
  {
    id: 2,
    title: "Item 2",
    price: 500,
    date: new Date(2023, 7, 18),
  },
  {
    id: 3,
    title: "Item 3",
    price: 2000,
    date: new Date(2025, 4, 5),
  },
  {
    id: 4,
    title: "Item 4",
    price: 900,
    date: new Date(2024, 7, 12),
  },
];
function App() {
  const [data, setData] = useState(oldData);
  const getNewItem = (data2) => {
    setData([data2, ...data]);
  };
  const id = Math.max(...data.map((el) => el.id));
  console.log(id);
  return (
    <div>
      <AddExpense getNewItem={getNewItem} id={id} />
      <ExpensesContainer data={data} />
    </div>
  );
}

export default App;
