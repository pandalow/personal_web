// Sidebar.js
import React from "react";

function Sidebar({ setCurrentPage }) {
  return (
    <div className="fixed left-0 top-0 h-screen w-1/4 from-black to-gray-900 bg-gradient-to-b flex flex-col items-center p-4">
      {/* 头像 + 名称 */}
      <section className="nes-container with-title is-centered w-full p-4">
        <img
          src="145511053.png"
          width="150px"
          alt="Your Name"
          className="mx-auto"
          style={{ imageRendering: "pixelated" }}
        />
        <h1 className="nes-text is-primary text-md mt-2">X.Zhuang</h1>
     
        <p className="text-lg text-gray-100 mt-2">
          Software Engineer & Product Manager
        </p>
        <p className="text-gray-100 text-sm">zxj000hugh@gmail.com</p>
        <p className="text-gray-100 text-sm">Ab tnzr ab sevraqf</p>
        <p className="text-gray-100 text-sm">He/him</p>
      </section>

      {/* 社交媒体图标 */}
      <div className="flex gap-4 mt-4">
        <a href="mailto:zxj000hugh@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="nes-icon gmail"></i>
        </a>


        <a href="https://www.instagram.com/zhuangxiaojian9/"><i className="nes-icon instagram" ></i></a>
        <a href="https://github.com/pandalow"><i className="nes-icon github"></i></a>
        <a href="https://www.linkedin.com/in/xjzhuang000john/"><i className="nes-icon linkedin"></i></a>
      </div>

      {/* 导航栏 */}
      <nav className="mt-6 w-full">
        <ul className="space-y-3 text-center">
          <li>
            <button
              onClick={() => setCurrentPage('chatbot')}
              className="w-1/2 py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-600 transition"
            >
              Chat Me
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('aboutMe')}
              className="w-1/2 py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-600 transition"
            >
              About Me
            </button>
          </li>
          {/* <li>
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="w-full py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              Portfolio
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;