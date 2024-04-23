import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineGraph = () => {
  const sampleData = [25, 123, 199, 42, 23, 97, 73, 64, 40, 88, 130, 180, 165, 50, 23,20]
  const currentTraffic = 43
  const okayTraffic = 100
  const dangerTraffic = 150

  const canvasData = {
    datasets: [
      {
        label: "Home",
        borderColor: "#485B75",
        pointRadius: 0,
        fill: true,
        backgroundColor: 'rgba(173, 216, 230,1)',
        lineTension: 0.4,
        data: sampleData,
        borderWidth: 1,
        yAxisID: 'y',
        order: 3,
      },
      {
        label: 'okay',
        borderColor: 'rgba(255,215,0, 0.5)', // 75% opaque
        pointRadius: 0,
        lineTension: 0.4,
        data: new Array(sampleData.length).fill(okayTraffic),
        borderWidth: 1,
        yAxisID: 'y', // Using the main y-axis
        order: 1,
        opacity: 0.2
      },
      {
        label: 'bad',
        borderColor: 'rgba(255,0,0, 0.2)', // 75% opaque
        pointRadius: 0,
        lineTension: 0.4,
        data: new Array(sampleData.length).fill(dangerTraffic),
        borderWidth: 1,
        yAxisID: 'y', // Using the main y-axis
        order: 1,
      }

    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        labels: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19,20,21,22],
        ticks: {
          color:'#485B75',
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 200,
        ticks: {
          stepSize: 10,
          color: '#485B75',
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Crowd Traffic',
        color: "#485B75",
        font: {
          family: "Nunito",
          size: 14,
          weight: "",
        },
      },
    },
  };

  const graphStyle = {
    minHeight: "10rem",
    maxWidth: "540px",
    width: "100%",
    border: "0px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  const trafficStyle = {
    fontSize: "1rem",
    color: "#485B75",
    fontWeight: "bold",
    marginRight: "0.5rem",
    alignItems: "center",
  };

  const containerStyle = {
    display: "",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0rem",
  };

  return (
    <div style={containerStyle}>
      <div style={trafficStyle}>Current Traffic: {currentTraffic}</div>
      <div style={graphStyle}>
        <Line id="home" options={options} data={canvasData}></Line>
      </div>
    </div>
  );
};

export default LineGraph;