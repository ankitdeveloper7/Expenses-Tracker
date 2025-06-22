// src/pages/SalaryPlanner.jsx
import React, { useState } from "react";

const SalaryPlanner = () => {
  const [salary, setSalary] = useState("");
  const [fixed, setFixed] = useState("");
  const [rule, setRule] = useState({ needs: 50, wants: 30, savings: 20 });

  const calculateBudget = () => {
    const balance = salary - fixed;
    return {
      needs: ((rule.needs / 100) * balance).toFixed(0),
      wants: ((rule.wants / 100) * balance).toFixed(0),
      savings: ((rule.savings / 100) * balance).toFixed(0),
    };
  };

  const result = salary && fixed ? calculateBudget() : null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Salary Budget Planner</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          placeholder="Monthly Salary"
          className="p-2 border rounded"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          type="number"
          placeholder="Fixed Expenses (Rent, etc.)"
          className="p-2 border rounded"
          value={fixed}
          onChange={(e) => setFixed(e.target.value)}
        />
      </div>

      {/* Optional Custom Rule Inputs */}
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Needs %"
          className="p-2 border rounded w-1/3"
          value={rule.needs}
          onChange={(e) => setRule({ ...rule, needs: e.target.value })}
        />
        <input
          type="number"
          placeholder="Wants %"
          className="p-2 border rounded w-1/3"
          value={rule.wants}
          onChange={(e) => setRule({ ...rule, wants: e.target.value })}
        />
        <input
          type="number"
          placeholder="Savings %"
          className="p-2 border rounded w-1/3"
          value={rule.savings}
          onChange={(e) => setRule({ ...rule, savings: e.target.value })}
        />
      </div>

      {result && (
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Recommended Budget</h2>
          <ul>
            <li>🛒 Needs: ₹{result.needs}</li>
            <li>🎉 Wants: ₹{result.wants}</li>
            <li>💰 Savings: ₹{result.savings}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SalaryPlanner;
