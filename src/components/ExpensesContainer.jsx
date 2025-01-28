import React from "react";
import "./ExpensesContainer.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesContainer = ({ data }) => {
  return (
    <div className="expenses-container">
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
