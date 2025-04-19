import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  count?: number;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  label, 
  active = false, 
  collapsed = false,
  count
}) => {
  return (
    <a
      href="#"
      className={`
        flex items-center px-2 py-2.5 text-sm font-medium rounded-lg transition-colors
        group relative
        ${active 
          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }
      `}
    >
      <div className={`${active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
        {icon}
      </div>
      
      {!collapsed && (
        <span className="ml-3 truncate">{label}</span>
      )}
      
      {!collapsed && count && (
        <span className="ml-auto bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 py-0.5 px-2 rounded-full text-xs font-medium">
          {count}
        </span>
      )}
      
      {collapsed && count && (
        <span className="absolute -right-1 -top-1 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px]">
          {count}
        </span>
      )}
      
      {collapsed && (
        <span className="absolute left-full ml-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 py-1 px-2 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      )}
    </a>
  );
};

export default NavItem;