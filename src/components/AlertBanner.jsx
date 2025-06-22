// src/components/AlertBanner.jsx
import React from "react";

const AlertBanner = ({ expenses, budgetLimit = 10000 }) => {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  if (total < budgetLimit * 0.75) return null;

  let message = "";
  let color = "";

  if (total >= budgetLimit) {
    message = "⚠️ You have exceeded your budget!";
    color = "bg-red-100 text-red-700 border-red-300";
  } else {
    message = "⚠️ You are nearing your budget limit.";
    color = "bg-yellow-100 text-yellow-800 border-yellow-300";
  }

  return (
    <div className={`border-l-4 p-4 my-4 rounded ${color}`}>
      <p className="font-medium">{message}</p>
      <p className="text-sm">Total Spending: ₹{total} / ₹{budgetLimit}</p>
    </div>
  );
};

export default AlertBanner;
