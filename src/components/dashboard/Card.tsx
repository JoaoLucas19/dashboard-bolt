import React from 'react';
import { ArrowUp, ArrowDown, MoreVertical } from 'lucide-react';

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  subtitle?: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, change, subtitle }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <span className="inline-flex items-center justify-center p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
          {icon}
        </span>
        <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{value}</p>
      
      {change && (
        <div className="flex items-center mt-2">
          <span className={`flex items-center text-sm font-medium 
            ${change.type === 'increase' 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'}`}
          >
            {change.type === 'increase' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            <span className="ml-1">{change.value}%</span>
          </span>
          {subtitle && (
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{subtitle}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;