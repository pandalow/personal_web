import resume from "../contents/resume.json";

function Resume() {
  return (
    <div className="w-full ">
      {/* Summary Section */}
      <section className="nes-container with-title is-centered mb-6">
        <h2 className="title text-lg font-bold">Summary</h2>
        <div>
          <p className="text-gray-700">{resume.summary}</p>
        </div>
      </section>

      {/* Strength & Skills Section */}
      <section className="nes-container with-title is-centered mb-6">
        <h2 className="title text-lg font-bold">Strength & Skills</h2>
        <div className="mt-3">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {resume.strength_skills.map((skill, index) => (
              <li key={index} className="text-md">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section className="nes-container with-title is-centered">
        <h2 className="title text-lg font-bold">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
          {resume.experience.map((exp, index) => (
            <div key={index} className="nes-container p-4 rounded-lg shadow-md">
              <h4 className="text-md font-bold">{exp.title}</h4>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.location}</p>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
