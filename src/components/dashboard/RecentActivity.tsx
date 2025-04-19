import React from 'react';
import { ShoppingCart, FileText, UserPlus, CreditCard, AlertTriangle } from 'lucide-react';

interface ActivityItem {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  color: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    title: 'New Order',
    description: 'John Doe placed a new order for $250.00',
    time: '2 minutes ago',
    icon: <ShoppingCart size={16} />,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
  },
  {
    id: 2,
    title: 'Invoice Paid',
    description: 'Invoice #12345 has been paid by Jane Smith',
    time: '15 minutes ago',
    icon: <FileText size={16} />,
    color: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
  },
  {
    id: 3,
    title: 'New Customer',
    description: 'Sam Johnson has registered as a new customer',
    time: '1 hour ago',
    icon: <UserPlus size={16} />,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
  },
  {
    id: 4,
    title: 'Payment Failed',
    description: 'Payment for order #55123 failed to process',
    time: '3 hours ago',
    icon: <CreditCard size={16} />,
    color: 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400'
  },
  {
    id: 5,
    title: 'System Alert',
    description: 'Server CPU usage exceeded 90% threshold',
    time: '5 hours ago',
    icon: <AlertTriangle size={16} />,
    color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
  }
];

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Recent Activity</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Latest activities from your system</p>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
            <div className="flex">
              <div className={`flex-shrink-0 rounded-lg p-2 ${activity.color}`}>
                {activity.icon}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
          View all activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;