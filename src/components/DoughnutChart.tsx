import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions, ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {

    const data = [
        {
            label: "Facebook",
            value: 80,
            color: "#FF9898",
        },
        {
            label: "Others",
            value: 15,
            color: "#222228",
        },
        {
            label: "Google",
            value: 55,
            color: "#8054FF",
        },
    ]

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        cutout: '70%',
        plugins: { legend: { display: false } },
    };

    const finalData: ChartData<'doughnut'> = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 0,
            },
        ],
    };

    return <Doughnut className="doughnut-chart" data={finalData} options={options}  />;
}