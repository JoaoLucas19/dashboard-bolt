import React, { useState } from 'react';
import { CheckCircle, Circle, X, Plus } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Review project proposal',
    completed: false,
    dueDate: 'Today',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Meeting with design team',
    completed: false,
    dueDate: 'Tomorrow',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Update documentation',
    completed: true,
    dueDate: 'Yesterday',
    priority: 'low'
  },
  {
    id: 4,
    title: 'Prepare quarterly report',
    completed: false,
    dueDate: 'Next week',
    priority: 'high'
  }
];

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const addTask = () => {
    if (newTaskTitle.trim() === '') return;
    
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
      priority: 'medium'
    };
    
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };
  
  const getPriorityClasses = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Tasks</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Manage your current tasks</p>
      </div>
      
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg py-2 px-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded-r-lg transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
            <div className="flex items-center">
              <button
                onClick={() => toggleTask(task.id)}
                className="flex-shrink-0 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {task.completed ? (
                  <CheckCircle size={20} className="text-green-500 dark:text-green-400" />
                ) : (
                  <Circle size={20} />
                )}
              </button>
              
              <div className="ml-3 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className={`text-sm ${
                    task.completed 
                      ? 'text-gray-500 dark:text-gray-400 line-through' 
                      : 'text-gray-800 dark:text-gray-200'
                  }`}>
                    {task.title}
                  </p>
                  
                  <div className="flex items-center mt-1 sm:mt-0">
                    {task.dueDate && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
                        {task.dueDate}
                      </span>
                    )}
                    
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityClasses(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => removeTask(task.id)}
                className="ml-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {tasks.filter(t => t.completed).length} of {tasks.length} tasks complete
        </p>
      </div>
    </div>
  );
};

export default TaskList;