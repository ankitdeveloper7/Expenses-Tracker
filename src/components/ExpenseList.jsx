// src/components/ExpenseList.jsx
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ExpenseList = ({ expenses, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
    toast.info("Expense Deleted");
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses yet.</p>
      ) : (
        <ul className="space-y-3">
          {expenses.map((exp) => (
            <li
              key={exp.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">
                  ₹{exp.amount} - {exp.category}
                </p>
                <p className="text-sm text-gray-500">{exp.description}</p>
                <p className="text-xs text-gray-400">{exp.date}</p>
              </div>
              <button
                onClick={() => handleDelete(exp.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
