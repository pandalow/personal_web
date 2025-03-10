import resume from "../contents/resume.json";

function Resume() {
  return (
    <div className="w-full">
      {/* Summary Section */}
      <section className="nes-container with-title is-left mb-6">
        <h2 className="title text-lg font-bold flex items-center gap-2"><i class="nes-mario"></i> Summary</h2>
        <div>
          <p className="text-gray-700">{resume.summary}</p>
        </div>
      </section>

      {/* Strength & Skills Section */}
      <section className="nes-container with-title is-left mb-6">
        <h2 className="title text-lg font-bold flex items-center gap-2"><i class="snes-logo"></i> Strength & Skills</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {resume.strength_skills.map((skill, index) => (
            <h4 key={index} className="text-md">{skill} /</h4>
          ))}
        </div>
      </section>


      {/* Experience Section */}
      <section className="nes-container with-title is-left mb-6">
        <h2 className="title text-lg font-bold"> <i class="nes-jp-logo"></i> Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-3">
          {resume.experience.map((exp, index) => (
            <div key={index} className="p-4">
              <div className="grid grid-cols-2 items-center">
                <h4 className="text-md font-bold text-left">{exp.title}</h4>
                <img src={exp.image} alt={exp.title} className="w-20 h-20 object-contain ml-auto" />
              </div>

              <div className="grid grid-cols-2 items-center mt-2">
                <p className="text-gray-500 text-sm text-left">{exp.location}</p>
                <p className="text-gray-400 text-sm text-right">{exp.duration}</p>
              </div>

              <p className="text-gray-800 text-sm mt-3">{exp.responsibilities}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="nes-container with-title is-left mb-6">
        <h2 className="title text-lg font-bold"> <i class="nes-logo"></i> Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-3">
          {resume.education.map((edu, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 items-center">
                <h4 className="text-md font-bold text-left">{edu.degree}</h4>
                <p className="text-gray-600 text-right">{edu.university}</p>
              </div>
              <p className="text-gray-400 text-sm text-right">{edu.location}</p>
              <p className="text-gray-400 text-sm text-right">{edu.duration}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="nes-container with-title is-left">
        <h2 className="title text-lg font-bold"><i class="nes-icon coin is-large"></i> Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-3">
          {resume.certifications.map((cert, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 items-center">
                <h4 className="text-md font-bold text-left">{cert.name}</h4>
                <p className="text-gray-600 text-right">{cert.issuer}</p>
              </div>
              <p className="text-gray-400 text-sm text-right">{cert.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
