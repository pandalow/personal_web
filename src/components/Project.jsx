import React from 'react';

function Project({ title, description, githubLink, image, logo }) {
  return (
    <div className="nes-container flex flex-col items-center w-1/2 p-4 rounded-lg shadow-md">
      {/* 项目 Logo */}
      {logo && <img src={logo} alt={`${title} Logo`} className="w-12 h-12 mb-4" />}

      {/* 项目图片 */}
      {image && <img src={image} alt={`${title} Screenshot`} className="w-full rounded-lg mb-4" />}

      {/* 标题 */}
      <h3 className="title">{title}</h3>

      {/* 描述 */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>

      {/* GitHub 按钮 */}
      <a href={githubLink} className="nes-btn is-primary mt-4">GitHub</a>
    </div>
  );
}

export default Project;
