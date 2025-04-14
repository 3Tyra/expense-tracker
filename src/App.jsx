import React, { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import SearchBar from "./Components/SearchBar";

import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Groceries",
      description: "Weekly groceries",
      category: "Food",
      amount: 2500,
      date: "2025-04-01"
    },
    {
      id: 2,
      name: "Gas",
      description: "Car fuel",
      category: "Transport",
      amount: 1500,
      date: "2025-04-02"
    },
    {
      id: 3,
      name: "Internet",
      description: "Monthly subscription",
      category: "Utilities",
      amount: 3000,
      date: "2025-04-03"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (idToDelete) => {
    const updatedExpenses = expenses.filter(exp => exp.id !== idToDelete);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p> Simplicity in tracking your money. <br /> Record and view your expenses and purchases easily. </p>

      <div className="main-layout">
        <div className="left-panel">
          <h2>Add Expense</h2>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="right-panel">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
