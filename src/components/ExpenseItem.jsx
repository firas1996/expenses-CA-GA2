import { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ price, title, date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-TN", { month: "long" });
  const day = date.toLocaleString("en-TN", { day: "2-digit" });
  // const [x, setX] = useState(title);
  // const updateTitleHandler = () => {
  //   setX("New Title !!");
  //   console.log(x);
  // };
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <button onClick={updateTitleHandler}>Update Title !</button> */}
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
