import React, { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import SearchBar from "./Components/SearchBar";

import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([
    
      {
        id: 1,
        name: "Internet",
        description: "Monthly subscription",
        category: "Utilities",
        amount: 3000,
        date: "2025-04-03"
      },
      {
        id: 2,
        name: "Electricity",
        description: "Monthly electricity bill",
        category: "Utilities",
        amount: 4200,
        date: "2025-04-05"
      },
      {
        id: 3,
        name: "Netflix",
        description: "Streaming subscription",
        category: "Entertainment",
        amount: 1200,
        date: "2025-04-06"
      },
      {
        id: 4,
        name: "Lunch",
        description: "Office lunch",
        category: "Food",
        amount: 600,
        date: "2025-04-07"
      },
      {
        id: 5,
        name: "Uber",
        description: "Trip to city center",
        category: "Transport",
        amount: 950,
        date: "2025-04-08"
      },
      
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
      <h1 className="header">Expense Tracker</h1>
      <p className="paragraph"> Simplicity in tracking your money. <br /> Record and view your expenses and purchases easily. </p>

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
