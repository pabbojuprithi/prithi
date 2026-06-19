import React from 'react';
import stackImage from '../assets/about/image.png';
import pythonImage from '../assets/about/python.png';
import sqlImage from '../assets/about/sql.png';
import streamlitImage from '../assets/about/streamlit.png';
import numpyImage from '../assets/about/numpy.png';
import matplotlibImage from '../assets/about/matplotlib.png';

const About = () => {
  const htmlUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
  const cssUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
  const bootstrapUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg";
  const pandasUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg";
  const mysqlUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
  const excelUrl = "https://img.icons8.com/color/144/microsoft-excel-2019.png";

  const technologies = [
    { name: "Python", src: pythonImage },
    { name: "HTML5", src: htmlUrl },
    { name: "CSS3", src: cssUrl },
    { name: "Bootstrap", src: bootstrapUrl },
    { name: "Streamlit", src: streamlitImage },
    { name: "NumPy", src: numpyImage },
    { name: "Matplotlib", src: matplotlibImage },
    { name: "Pandas", src: pandasUrl },
    { name: "MS Excel", src: excelUrl },
    { name: "MySQL", src: mysqlUrl }
  ];

  return (
    <section id="about" className="bg-[#1A1A2E] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Hello!</h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl text-indigo-100/90 font-medium">
            <p>
              Hi, my name is <span className="text-[#818CF8] text-xl font-black tracking-wide uppercase">Pabboju Prithi</span>. I am an <span className="text-white font-bold">aspiring software developer</span> based in Hyderabad, India.
            </p>
            
            <div className="border-l-2 border-[#818CF8] pl-4 py-1">
              <h4 className="text-white text-xs uppercase tracking-wider font-bold mb-1">Career Objective</h4>
              <p className="text-indigo-200/90 text-sm md:text-base font-normal leading-relaxed">
                To associate with an organization that provides me an opportunity to become a successful software professional, improve my knowledge with the latest trends and to be a part of the team that works dynamically towards the growth of the organization.
              </p>
            </div>

            <div className="border-l-2 border-[#818CF8] pl-4 py-1">
              <h4 className="text-white text-xs uppercase tracking-wider font-bold mb-1">Summary</h4>
              <p className="text-indigo-200/90 text-sm md:text-base font-normal leading-relaxed">
                Strong knowledge of Python, HTML, and CSS. Interested in web and application development, with a focus on problem-solving and learning new technologies. Looking for a developer role to start my career and improve my coding skills.
              </p>
            </div>

            <p>
              I have one year of full-time apprenticeship experience as a Data Analyst at <span className="text-white font-bold">TGSRTC</span> in Hyderabad, where I delivered AI-backed bus demand forecasting, dynamic scheduling dashboards, driver performance insights, and depot operations analytics using Python, Streamlit, SQL, and XGBoost.
            </p>
          </div>

          {/* Detailed Skills Grid (Responsive) */}
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-6 md:gap-8 mt-8">
            {technologies.map((tech, idx) => (
              <div 
                key={tech.name}
                data-aos="zoom-in" 
                data-aos-delay={300 + (idx * 50)}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-2 bg-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <img 
                    src={tech.src} 
                    alt={tech.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter text-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Strengths & Hobbies section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 pt-8 border-t border-indigo-500/20">
            <div>
              <p className="text-white uppercase tracking-wider text-xs mb-3 font-bold">Strengths</p>
              <ul className="space-y-2 text-sm text-indigo-200/90 font-medium">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#818CF8] rounded-full shrink-0" />
                  Positive attitude
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#818CF8] rounded-full shrink-0" />
                  Quick learning & Comprehensive Problem Solving Abilities
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white uppercase tracking-wider text-xs mb-3 font-bold">Hobbies</p>
              <ul className="space-y-2 text-sm text-indigo-200/90 font-medium">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#818CF8] rounded-full shrink-0" />
                  Playing Badminton & Chess
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#818CF8] rounded-full shrink-0" />
                  Listening to music
                </li>
              </ul>
            </div>
          </div>

          {/* Education & Context Row */}
          <div className="mt-10 pt-8 border-t border-indigo-500/20 flex flex-col sm:flex-row gap-6 justify-between items-start text-sm font-semibold text-indigo-200/80">
            <div>
              <p className="text-white uppercase tracking-wider text-xs mb-1.5 font-bold">Education</p>
              <p className="text-white text-base font-black">B.Tech in Computer Science & Engineering</p>
              <p className="font-medium text-indigo-300">JNTU, 2019–2023 • 70%</p>
            </div>
            <div>
              <p className="text-white uppercase tracking-wider text-xs mb-1.5 font-bold">Current Focus</p>
              <p className="text-white text-base font-black">Web & Data Applications</p>
              <p className="font-medium text-indigo-300">Python • HTML5 • CSS3 • Bootstrap • Streamlit</p>
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-white opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-white opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
