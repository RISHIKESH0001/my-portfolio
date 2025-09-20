import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Adjusted animations for mobile
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section 
      ref={ref} 
      className="min-h-[90vh] md:min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 font-sans"
    >
      <motion.div 
        style={{ 
          x,
          opacity,
          scale
        }}
        className="w-full max-w-4xl px-4 sm:px-6 md:px-8 py-8 md:py-12"
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 text-gray-800 font-serif tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About <span className="text-blue-600">Rishikesh</span> Chowdhury
        </motion.h1>
        
        <div className="space-y-6 md:space-y-8">
          <motion.p 
            className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-light"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hello! I'm <span className="font-medium">Rishikesh Chowdhury</span>, a 23-year-old final-year BTech student specializing in Electronics and Communication Engineering (ECE) at Gargi Memorial Institute of Technology (GMIT). My journey combines technical expertise with creative expression.
          </motion.p>
          
          <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-gray-800 border-b pb-2 border-gray-200">
                📚 Education
              </h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">Matriculation</span> — Niva Ananda Vidyalaya — <span className="text-blue-600">65%</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">Higher Secondary</span> — Kalighat High School — <span className="text-blue-600">74%</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">BTech (ECE)</span> — Gargi Memorial Institute of Technology — <span className="text-blue-600">7.82 CGPA</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-gray-800 border-b pb-2 border-gray-200">
                💻 Technical Skills
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Proficient in <span className="font-medium text-blue-600">Java, C, SQL, HTML, CSS, JS</span> and <span className="font-medium text-blue-600">Bootstrap</span>. I build efficient solutions with clean code and thoughtful design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-gray-800 border-b pb-2 border-gray-200">
                🎨 Creative Pursuits
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                When not coding, I express myself through <span className="font-medium">art sketches</span>, immersive <span className="font-medium">gaming</span> experiences, and exploring <span className="font-medium">music</span> across genres.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-2 md:pt-4"
            >
              <p className="text-base sm:text-lg md:text-xl text-gray-800 italic">
                "Eager to contribute my skills in software development and web design while continuing to learn and grow."
              </p>
              <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-700">
                Let's connect and create something remarkable!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;