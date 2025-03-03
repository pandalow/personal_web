// Sidebar.js
import React from "react";

function Sidebar({ setCurrentPage }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 头像 + 名称 */}
      <section className="nes-container with-title is-centered w-full p-4">
        <img 
          src="145511053.png" 
          width="150px" 
          alt="Your Name" 
          className="mx-auto" 
          style={{ imageRendering: "pixelated" }} 
        />
        <h1 className="nes-text is-primary text-lg mt-2">X.Zhuang</h1>
        <p>zxj000hugh@gmail.com</p>
        <p className="nes-text text-sm text-gray-300 mt-2">
          Software Engineer & Product Manager
        </p>
        <p className="nes-text text-xs mt-2">
          LIKE TO BUILD / LIKE TO ENJOY
        </p>
        <p>He/him</p>
      </section>

      {/* 社交媒体图标 */}
      <div className="flex gap-4 mt-4">
        <i className="nes-icon twitter"></i>
        <i className="nes-icon facebook"></i>
        <i className="nes-icon instagram"></i>
        <i className="nes-icon github"></i>
        <i className="nes-icon linkedin"></i>
      </div>

      {/* 导航栏 */}
      <nav className="mt-6 w-full">
        <ul className="space-y-3 text-center">
          <li>
            <button 
              onClick={() => setCurrentPage('chatbot')}
              className="nec-btn w-full py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              Chat Me
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('aboutMe')}
              className="w-full py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              About Me
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
