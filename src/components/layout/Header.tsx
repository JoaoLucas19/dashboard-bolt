import React, { useState } from 'react';
import { Search, Bell, Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className="h-16 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0">
      <div className="px-4 h-full flex items-center justify-between">
        <div className="md:hidden">
          <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Menu size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        
        <div className={`${isSearchActive ? 'w-full md:w-96' : 'w-40 md:w-64'} relative transition-all duration-300`}>
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              5
            </span>
          </button>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-gray-300" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>
          
          <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
          
          <button className="flex items-center">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=75" 
              alt="User avatar" 
              className="w-8 h-8 rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;