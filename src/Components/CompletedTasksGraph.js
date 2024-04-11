import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const CompletedTasksGraph = ({ tasks }) => {
  // Count completed and remaining tasks for each phase
  const countTasksByPhase = () => {
    const tasksByPhase = {};
    tasks.forEach(task => {
      if (!tasksByPhase[task.phase]) {
        tasksByPhase[task.phase] = { completed: 0, remaining: 0 };
      }
      if (task.completed) {
        tasksByPhase[task.phase].completed++;
      } else {
        tasksByPhase[task.phase].remaining++;
      }
    });
    return tasksByPhase;
  };

  const tasksByPhase = countTasksByPhase();

  // Prepare data for the chart
  const data = {
    labels: Object.keys(tasksByPhase),
    datasets: [
      {
        label: 'Completed Tasks',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: Object.values(tasksByPhase).map(phase => phase.completed),
      },
      {
        label: 'Remaining Tasks',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: Object.values(tasksByPhase).map(phase => phase.remaining),
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Specify the scale type as 'category' for x-axis labels
      },
    },
  };

  return (
    <div className='tg'>
      <h3>graph presentation</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CompletedTasksGraph;

