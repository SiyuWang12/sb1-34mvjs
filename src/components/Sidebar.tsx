import React from 'react';
import { FileText, History, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <FileText className="mr-2" />
              新建报告
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <History className="mr-2" />
              历史记录
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <Settings className="mr-2" />
              设置
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;