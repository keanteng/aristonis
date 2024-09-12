'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GoodsDistributionChart = () => {
  const data = {
    labels: [
      'Beverages',
      'Snacks',
      'Cleaning Supplies',
      'Personal Care & Hygiene',
      'Pet Food',
      'Dairy Alternatives',
      'Canned & Preserved Goods',
    ],
    datasets: [
      {
        label: 'Goods Sold',
        data: [120, 150, 80, 90, 60, 70, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Distribution of Goods Sold',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Goods Category',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantity Sold',
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default GoodsDistributionChart;