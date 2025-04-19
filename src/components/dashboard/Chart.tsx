import React from 'react';

interface ChartProps {
  title: string;
  subtitle?: string;
  type: 'line' | 'bar' | 'donut';
  height?: string;
}

const Chart: React.FC<ChartProps> = ({ 
  title, 
  subtitle, 
  type,
  height = 'h-64'
}) => {
  // This is a placeholder for a real chart component
  // In a real application, you would use a library like Chart.js, Recharts, etc.

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
          {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
        </div>
        
        <div className="flex gap-2">
          <select className="text-xs rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      
      <div className={`${height} p-4 relative`}>
        {type === 'line' && <LineChartPlaceholder />}
        {type === 'bar' && <BarChartPlaceholder />}
        {type === 'donut' && <DonutChartPlaceholder />}
      </div>
    </div>
  );
};

const LineChartPlaceholder = () => (
  <div className="w-full h-full rounded-md bg-gray-50 dark:bg-gray-750 p-4 flex items-center justify-center">
    <div className="relative w-full h-full">
      {/* X-axis */}
      <div className="absolute bottom-0 w-full h-px bg-gray-200 dark:bg-gray-700"></div>
      
      {/* Y-axis */}
      <div className="absolute left-0 h-full w-px bg-gray-200 dark:bg-gray-700"></div>
      
      {/* Chart lines */}
      <svg className="w-full h-full" viewBox="0 0 100 50">
        <path 
          d="M0,45 C10,40 20,30 30,35 C40,40 50,20 60,15 C70,10 80,25 90,20 L90,50 L0,50 Z" 
          fill="rgba(59, 130, 246, 0.1)" 
          stroke="#3B82F6" 
          strokeWidth="1.5"
        />
      </svg>
      
      {/* Chart dots */}
      <div className="absolute top-1/4 left-[30%] w-2 h-2 bg-blue-500 rounded-full"></div>
      <div className="absolute top-2/3 left-[60%] w-2 h-2 bg-blue-500 rounded-full"></div>
      <div className="absolute top-2/5 left-[90%] w-2 h-2 bg-blue-500 rounded-full"></div>
    </div>
  </div>
);

const BarChartPlaceholder = () => (
  <div className="w-full h-full rounded-md bg-gray-50 dark:bg-gray-750 p-4 flex items-end justify-between">
    <div className="w-1/12 h-1/3 bg-blue-500 rounded-t-md"></div>
    <div className="w-1/12 h-2/3 bg-blue-500 rounded-t-md"></div>
    <div className="w-1/12 h-1/2 bg-blue-500 rounded-t-md"></div>
    <div className="w-1/12 h-3/4 bg-blue-500 rounded-t-md"></div>
    <div className="w-1/12 h-2/5 bg-blue-500 rounded-t-md"></div>
    <div className="w-1/12 h-3/5 bg-blue-500 rounded-t-md"></div>
    <div className="w-1/12 h-4/5 bg-blue-500 rounded-t-md"></div>
    <div className="w-1/12 h-1/4 bg-blue-500 rounded-t-md"></div>
  </div>
);

const DonutChartPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-32 h-32">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3"
          strokeDasharray="100, 100"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="55, 100"
          className="animate-[dash_1.5s_ease-in-out]"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeDasharray="25, 100"
          strokeDashoffset="-55"
          className="animate-[dash_1.5s_ease-in-out]"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="3"
          strokeDasharray="20, 100"
          strokeDashoffset="-80"
          className="animate-[dash_1.5s_ease-in-out]"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">55%</div>
      </div>
    </div>
  </div>
);

export default Chart;