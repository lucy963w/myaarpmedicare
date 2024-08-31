import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <ul className="expense-list">
      {expenses.map((expense, index) => (
        <li key={index} className="expense-item">
          {expense}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
