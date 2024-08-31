import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (expense.trim()) {
      onAddExpense(expense);
      setExpense('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
