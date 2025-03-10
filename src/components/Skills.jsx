import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3/SCSS", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "Figma", level: 70 },
        { name: "Agile/Scrum", level: 75 }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-primary-600">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;