import ExpenseItem from "./components/ExpenseItem";
import ExpensesContainer from "./components/ExpensesContainer";

function App() {
  const data = [
    {
      id: 1,
      title: "Item 1",
      price: 1111,
      date: new Date(2025, 0, 28),
    },
    {
      id: 2,
      title: "Item 2",
      price: 1500,
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
      price: 700,
      date: new Date(2024, 7, 12),
    },
  ];
  return (
    <div>
      <ExpensesContainer data={data} />
    </div>
  );
}

export default App;
