import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Month", "Kaino Plus", "Kaino Basic", "Kaino Social"],
    ["Jan", 120, 30, 70],
    ["Feb", 85, 50, 70],
    ["Mar", 40, 50, 70],
    ["Apr", 130, 50, 45],
    ["May", 165, 54, 45],
    ["Jun", 80, 50, 45],
    ["Jul", 80, 50, 45],
    ["Aug", 80, 50, 45],
    ["Sep", 80, 50, 45],
    ["Oct", 80, 50, 45],
    ["Nov", 80, 50, 45],
    ["Dec", 80, 50, 45],
];

export const options = {
    legend: { position: "none" },
    series: [
        { color: "#C6164F" },
        { color: "#6759D1" },
        { color: "#4EAF96" },
    ]
};

export function FinanceHomeChart() {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            data={data}
            options={options}
        />
    );
}
