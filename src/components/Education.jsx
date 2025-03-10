import React from 'react';

const Education = () => {
  const educationHistory = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University Name",
      location: "City, Country",
      period: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Deep Learning Applications in Natural Language Processing'.",
      achievements: [
        "Graduated with honors (GPA: 3.9/4.0)",
        "Published research paper in international conference",
        "Received departmental scholarship for academic excellence"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University Name",
      location: "City, Country",
      period: "2016 - 2020",
      description: "Focused on software development and computer architecture. Completed capstone project on 'Real-time Data Processing Systems'.",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "Led team to win 2nd place in national hackathon",
        "Teaching assistant for Introduction to Programming"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="mt-12 space-y-12">
          {educationHistory.map((education, index) => (
            <div key={index} className="relative pl-8 border-l-4 border-primary-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 rounded-full"></div>
              
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full mb-2">
                  {education.period}
                </span>
                <h3 className="text-2xl font-bold">{education.degree}</h3>
                <p className="text-lg text-gray-600">{education.institution}, {education.location}</p>
              </div>
              
              <p className="text-gray-700 mb-4">{education.description}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {education.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;