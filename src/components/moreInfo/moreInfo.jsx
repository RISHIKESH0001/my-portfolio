import React from "react";
import { FiCheckCircle } from "react-icons/fi"; // Add this import

const More_Info = () => {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          
          <div className="space-y-6 text-gray-700">
            <p>
              I'm a passionate full-stack developer with expertise in React, Node.js, and modern JavaScript frameworks. 
              My technical skills are complemented by strong creative thinking abilities developed through diverse 
              experience in arts and team leadership.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Professional Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Quick learner with proven adaptability in dynamic tech environments</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Strong problem-solving skills with both critical and lateral thinking</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Punctual and reliable with excellent time management</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">Creative Background</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Passionate about multiple art forms including acting and modeling</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Experience representing teams in creative competitions</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Developed leadership and collaboration skills through artistic projects</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="pt-4">
              My unique combination of technical expertise and creative problem-solving allows me to approach 
              development challenges from multiple perspectives. I'm constantly seeking new opportunities to 
              learn, grow, and contribute to innovative projects.
            </p>
          </div>
        </div>
      </section>
    )
}

export default More_Info;