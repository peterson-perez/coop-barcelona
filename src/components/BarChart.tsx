import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions
  } from 'chart.js';
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController
  );

export const BarChart = () => {

    const data = [
        {
            label: "June",
            value: 1023,
            color: "#9E9E9E",
        },
        {
            label: "July",
            value: 3466,
            color: "#FF9898",
        },
        {
            label: "August",
            value: 13001,
            color: "#8054FF",
        },
    ]

    const options: ChartOptions<'bar'> = {
        responsive: true,
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { display: false } },
    };

    const finalData: ChartData<'bar'> = {

        labels: data.map((item) => item.label),
        datasets: [
            {
                label: 'Active users',
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 0,
            },
        ],
    };
   

    return <Bar className="bar-chart" data={finalData} options={options} />;
}