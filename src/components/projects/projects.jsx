import React from "react";
import Right_Projects from "../../utils/projects-right";
import Left_Projects from "../../utils/projects-left";

const Projects = () => {
    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-scarlet-900 to-pink-700 py-12 md:py-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-8 md:gap-12 lg:gap-16">
                    {/* Left Projects - will stack on top on mobile */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Left_Projects />
                    </div>
                    
                    {/* Right Projects - will stack below on mobile */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Right_Projects />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;