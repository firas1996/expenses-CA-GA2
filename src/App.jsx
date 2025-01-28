import ExpenseItem from "./components/ExpenseItem";

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
      price: 700,
      date: new Date(2024, 7, 12),
    },
  ];
  return (
    <div>
      {data.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}

export default App;
