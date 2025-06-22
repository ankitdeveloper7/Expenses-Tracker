// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import AlertBanner from "../components/AlertBanner";
import CategoryPieChart from "../components/CategoryPieChart";
import ExpenseTrendChart from "../components/ExpenseTrendChart";

const Dashboard = () => {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-semibold">Today</h2>
          <p className="text-xl font-bold text-blue-600">₹500</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-semibold">This Week</h2>
          <p className="text-xl font-bold text-blue-600">₹2,800</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-semibold">This Month</h2>
          <p className="text-xl font-bold text-blue-600">₹8,600</p>
        </div>
      </div>

      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      <AlertBanner expenses={expenses} budgetLimit={10000} />
<CategoryPieChart expenses={expenses} />
<ExpenseTrendChart expenses={expenses} />
    </div>
  );
};

export default Dashboard;
