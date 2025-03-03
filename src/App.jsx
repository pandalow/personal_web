// App.js
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('chatbot');

  return (
    // 外层容器不再使用 h-screen，而是让高度自适应内容
    <div className="flex m-8 items-stretch">
      {/* 侧边栏部分 */}
      <div className="w-1/3 bg-blue-950 text-white p-6">
        <Sidebar setCurrentPage={setCurrentPage} />
      </div>
      {/* 主内容部分 */}
      <div className="w-2/3 bg-gray-100 p-6">
        <MainContent currentPage={currentPage} />
      </div>
    </div>
  );
}

export default App;
