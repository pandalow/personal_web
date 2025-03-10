// App.js
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('chatbot');

  return (
    // 外层容器不再使用 h-screen，而是让高度自适应内容
    <div className="flex m-8 justify-center">
      {/* 侧边栏部分 */}
      <div className="w-1/4 ">
        <Sidebar setCurrentPage={setCurrentPage} />
      </div>
      {/* 主内容部分 */}
      <div className="w-3/4 p-6">
        <MainContent currentPage={currentPage} />
      </div>
    </div>
  );
}

export default App;
