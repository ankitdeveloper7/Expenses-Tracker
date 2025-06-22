// src/components/ExpenseTrendChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

const ExpenseTrendChart = ({ expenses }) => {
  // Aggregate by date (last 7 days)
  const today = dayjs();
  const days = [...Array(7)].map((_, i) => today.subtract(i, "day").format("YYYY-MM-DD")).reverse();

  const data = days.map((date) => {
    const total = expenses
      .filter((e) => e.date === date)
      .reduce((sum, e) => sum + Number(e.amount), 0);
    return { date, amount: total };
  });

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Daily Expense Trend (Last 7 Days)</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseTrendChart;
