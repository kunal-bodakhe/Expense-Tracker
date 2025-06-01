
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';





const ExpenseChart = () => {

  let original=JSON.parse(localStorage.getItem("expenses"));

  const Food=original.filter((expense)=>expense.category==="Food");
  const Groceries=original.filter((expense)=>expense.category==="Groceries");
  const Travel=original.filter((expense)=>expense.category==="Travel");
  const Health=original.filter((expense)=>expense.category==="Health");

  const data = [
    { name: 'Food', value: Food.length },
    { name: 'Groceries', value: Groceries.length },
    { name: 'Travel', value: Travel.length },
    { name: 'Health', value: Health.length },
  ];
  const COLORS = ['#FFBB28','#00C49F','#0088FE', '#FF8042'];
  return (
    <PieChart width={500} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};


export default ExpenseChart;

