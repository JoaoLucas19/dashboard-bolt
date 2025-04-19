import React from 'react';
import StatGrid from './StatGrid';
import Chart from './Chart';
import RecentActivity from './RecentActivity';
import TaskList from './TaskList';

const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Welcome back, here's what's happening with your business today.</p>
      </div>
      
      <StatGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart 
          title="Revenue Overview" 
          subtitle="Monthly revenue performance"
          type="line"
        />
        <Chart 
          title="Sales by Category" 
          subtitle="Distribution of sales across product categories"
          type="donut"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <TaskList />
      </div>
    </div>
  );
};

export default DashboardContent;