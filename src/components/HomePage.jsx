import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createChart } from 'lightweight-charts';

const HomePage = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 300,
      layout: {
        background: { type: 'solid', color: '#1E293B' },
        textColor: 'white',
      },
      grid: {
        vertLines: { color: '#334155' },
        horzLines: { color: '#334155' },
      },
    });

    const lineSeries = chart.addLineSeries({ color: '#60A5FA' });
    
    // Sample data - replace this with your actual stock data
    const data = [
      { time: '2024-01-01', value: 100 },
      { time: '2024-01-02', value: 102 },
      { time: '2024-01-03', value: 101 },
      { time: '2024-01-04', value: 103 },
      { time: '2024-01-05', value: 105 },
      { time: '2024-01-06', value: 104 },
      { time: '2024-01-07', value: 107 },
    ];

    lineSeries.setData(data);

    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Stock Trading Journal</h1>
      <div ref={chartContainerRef} className="mb-8"></div>
      <Link 
        to="/journal" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Go to Trading Journal
      </Link>
    </div>
  );
};

export default HomePage;