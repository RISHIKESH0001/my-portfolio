import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';

const Left_Projects = () => {
  const sliderRef = useRef(null);
  
  const projects = [
    {
      title: "Video Gallery",
      description: "Frontend application built with HTML, CSS, Bootstrap and JavaScript for organizing and viewing video content.",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      features: [
        "Custom video player controls",
        "Category filtering system",
        "Responsive grid layout",
        "Search functionality"
      ],
      category: "Frontend",
      color: "from-purple-500 to-indigo-600",
      icon: "🎥"
    },
    {
      title: "College Management System",
      description: "Full-stack web application using ASP.NET, C#, SQL Server for college administration.",
      technologies: ["ASP.NET", "C#", "SQL Server", "HTML/CSS", "JavaScript"],
      features: [
        "Student registration module",
        "Fee Payment System",
        "Grade management",
        "Role-based access"
      ],
      category: "Full Stack",
      color: "from-teal-500 to-green-600",
      icon: "🏫"
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Project Slider */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-6"
          style={{ 
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] snap-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 0.9 }}
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-full flex flex-col"
              >
                <div className={`h-56 bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-8xl`}>
                  {project.icon}
                </div>
                
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        project.category === 'Frontend' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <FiGithub className="text-gray-700" />
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <FiExternalLink className="text-gray-700" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Left_Projects;