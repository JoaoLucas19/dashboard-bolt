import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Calendar, 
  MessageSquare,
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import NavItem from '../ui/NavItem';
import { useTheme } from '../../context/ThemeContext';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { isDarkMode } = useTheme();
  
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside 
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 
      h-screen flex flex-col transition-all duration-300 ease-in-out z-10`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        {!collapsed && (
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Dashboard
          </h1>
        )}
        <button 
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 
          hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active collapsed={collapsed} />
        <NavItem icon={<BarChart3 size={20} />} label="Analytics" collapsed={collapsed} />
        <NavItem icon={<Users size={20} />} label="Customers" collapsed={collapsed} />
        <NavItem icon={<Calendar size={20} />} label="Calendar" collapsed={collapsed} />
        <NavItem icon={<MessageSquare size={20} />} label="Messages" collapsed={collapsed} />
        <NavItem icon={<Bell size={20} />} label="Notifications" count={5} collapsed={collapsed} />
        <NavItem icon={<Settings size={20} />} label="Settings" collapsed={collapsed} />
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=75" 
            alt="User avatar" 
            className="w-8 h-8 rounded-full object-cover"
          />
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800 dark:text-white">John Smith</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;