import React from "react";
import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";
import Chart from "./Chart";

const ExpensesContainer = ({ data }) => {
  return (
    <div className="expenses-container">
      <Chart data={data} />
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
};

export default ExpensesContainer;
