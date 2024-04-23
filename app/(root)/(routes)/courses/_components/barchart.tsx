/** @format */
"use client";
import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar
} from "recharts";

type Props = {};

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 300) 
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 300)
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 300) 
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 100)
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 100)
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 100)
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 100) 
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 100) 
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 100) 
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 100) 
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 100) 
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 100)
  }
];

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data} margin={{ top: 0, left: -15, right: 0, bottom: 0 }}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={true}
          stroke="#F1F5F9"
          fontSize={13}
          padding={{ left: 0, right: 0 }}
          
          
        />
        <YAxis
          tickLine={false}
          axisLine={true}
          stroke="#F1F5F9"
          fontSize={13}
          tickFormatter={(value) => `$${value}`}
          padding={{ top: 0, bottom: 0 }}
          
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} stroke='#F1F5F9' fill="#F1F5F9" />
      </BarGraph>
    </ResponsiveContainer>
  );
}