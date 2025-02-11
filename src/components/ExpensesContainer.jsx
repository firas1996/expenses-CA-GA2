import React, { useState } from "react";
import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart";
import Filter from "./Filter";
const ExpensesContainer = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((el) => el.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  // console.log(years);
  let filtredData = data.filter((item) => {
    return selectedYear === "All"
      ? true
      : item.date.getFullYear().toString() === selectedYear;
  });
  console.log(filtredData);
  return (
    <div className="expenses-container">
      <Filter
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <Chart data={filtredData} />
      {filtredData.map((expense) => {
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
};

export default ExpensesContainer;
