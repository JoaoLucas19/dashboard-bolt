import React from 'react';
import Card from './Card';
import { Users, DollarSign, ShoppingCart, BarChart2 } from 'lucide-react';

const StatGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        title="Total Revenue"
        value="$24,780"
        icon={<DollarSign size={18} />}
        change={{ value: 12.5, type: 'increase' }}
        subtitle="vs last month"
      />
      
      <Card
        title="Total Customers"
        value="1,482"
        icon={<Users size={18} />}
        change={{ value: 8.2, type: 'increase' }}
        subtitle="vs last month"
      />
      
      <Card
        title="Total Orders"
        value="526"
        icon={<ShoppingCart size={18} />}
        change={{ value: 3.1, type: 'decrease' }}
        subtitle="vs last month"
      />
      
      <Card
        title="Conversion Rate"
        value="3.28%"
        icon={<BarChart2 size={18} />}
        change={{ value: 1.2, type: 'increase' }}
        subtitle="vs last month"
      />
    </div>
  );
};

export default StatGrid;