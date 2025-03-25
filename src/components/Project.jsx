import React from 'react';

function Project({ title, description, githubLink, languages, Framework, image }) {
  return (
    <div className="border rounded-lg p-6 shadow bg-white space-y-4">
      {/* 标题 + GitHub 链接右侧对齐 */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline text-sm"
        >
          GitHub →
        </a>
      </div>

      {/* Description 支持 bullet point 或普通文本 */}
      {Array.isArray(description) ? (
        <ul className="list-disc pl-6 space-y-1 text-left">
          {description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-left">{description}</p>
      )}

      {/* Demo 图片示意 */}
      {image && (
        <div className="mt-4 overflow-hidden rounded-lg shadow-md">
          <img 
            src={image} 
            alt={`${title} demo`} 
            className="w-full h-64 object-cover hover:object-contain hover:h-auto"
            />
        </div>
      )}
      {/* 技术栈信息 */}
      <div className="text-sm text-gray-600 space-y-1">
        {languages && <p><strong>Languages:</strong> {languages}</p>}
        {Framework && <p><strong>Frameworks:</strong> {Framework}</p>}
      </div>

    </div>
  );
}

export default Project;
