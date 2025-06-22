// src/components/ExpenseForm.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";

const categories = ["Rent", "Food", "Bills", "Entertainment", "Other"];

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.amount || !expense.category || !expense.date) {
      toast.error("Please fill all required fields.");
      return;
    }

    onAddExpense({ ...expense, id: Date.now() });
    toast.success("Expense Added");
    setExpense({ amount: "", category: "", description: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Add New Expense</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount (₹)"
          className="p-2 border rounded"
        />
        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
          placeholder="Description (optional)"
          className="p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
