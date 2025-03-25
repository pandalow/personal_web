import Project from "./Project";
import projects from '../contents/portfolio.json';

function Portfolio() {
  return (
    <div className="nes-container with-title is-centered">
      {/* 标题保持居中 */}
      <h2 className="title text-lg font-bold">Portfolio</h2>

      {/* 加 space-y-6 产生上下间距，去掉居中，文字左对齐 */}
      <div className="flex flex-col space-y-6 text-left">
        {projects.map((proj, index) => (
          <Project 
            key={index}
            title={proj.title}
            description={proj.description}
            githubLink={proj.githubLink}
            languages={proj.languages}
            Framework={proj.Framework}
            image={proj.image}
            logo={proj.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
