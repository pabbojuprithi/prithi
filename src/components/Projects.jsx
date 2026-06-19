import React, { useState } from 'react';
import { motion } from 'framer-motion';
import accuracyImage from '../assets/projects/dashboard_accuracy.png';
import overviewImage from '../assets/projects/operations_overview.png';

const Projects = () => {
  const [activeScreen, setActiveScreen] = useState('accuracy');

  const tgsrtcFeatured = {
    title: "TGSRTC Dynamic Scheduling & Demand Prediction System",
    role: "Data Analyst Apprentice",
    tags: ["Python", "XGBoost", "Pandas", "SQL", "Streamlit", "Machine Learning"],
    description: "Developed an AI-Based Bus Demand Prediction & Scheduling System using XGBoost to forecast passenger KMs and optimize scheduling, combined with a Streamlit dashboard for real-time monitoring.",
    highlights: [
      "Forecasted passenger KMs and optimized scheduling to improve dispatch efficiency.",
      "Built a Depot Operations Analytics Dashboard for real-time reporting across 97 depots.",
      "Automated key performance indicators (KPI) calculations, reducing manual verification effort."
    ]
  };

  const otherProjects = [
    {
      title: "Artificial Intelligence Methods of Oil Industry",
      role: "Team Leader",
      tags: ["Python", "HTML", "CSS", "Neural Networks", "SVM"],
      description: "Investigated artificial neural networks (ANN) and support vector machines (SVM) for geological interpretation, price forecasting, and flow regime prediction in exploration and production.",
      highlights: [
        "Led the team as Team Leader to analyze data mining methods at all stages of oil production.",
        "Created models that enable mining sectors to achieve better exploration results with less cost."
      ]
    },
    {
      title: "Depot Operation Analytics: Driver Optimism",
      role: "Data Analyst Apprentice",
      tags: ["Python", "Streamlit", "SQL", "Data Analytics"],
      description: "Designed a system to analyze driver absenteeism patterns and optimize schedules around driver availability.",
      highlights: [
        "Built the user interface using Streamlit for real-time analytics monitoring.",
        "Implemented backend logic in Python for processing, sorting, and filtering driver records."
      ]
    },
    {
      title: "Driver Performance Insights Engine",
      role: "Data Analyst Apprentice",
      tags: ["Python", "SQL", "Performance Analytics"],
      description: "Developed an analytics evaluation engine to calculate driver metrics and performance indices.",
      highlights: [
        "Ranked drivers based on operational KPIs to speed up regular performance evaluations."
      ]
    },
    {
      title: "Disease Prediction System",
      role: "Developer",
      tags: ["Python", "ML Models", "Streamlit", "Predictive Health"],
      description: "Created a machine learning disease prediction application featuring a quick input dashboard.",
      highlights: [
        "Trained multiple classification ML models to output real-time disease predictions.",
        "Built an interactive Streamlit UI for immediate patient parameter screening."
      ]
    }
  ];

  return (
    <section id="projects" className="bg-[#f9fafb] py-24 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <span className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Projects & Work Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Featured Systems & Applications
          </h2>
          <p className="text-gray-500 font-medium max-w-xl">
            A selection of software development and data analytics projects built for optimization, forecasting, and real-time visualization.
          </p>
        </div>

        {/* Featured Project Card */}
        <div className="grid grid-cols-1 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-100">
                    {tgsrtcFeatured.role}
                  </span>
                  {tgsrtcFeatured.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-neutral-50 text-neutral-600 text-xs font-bold rounded-full border border-neutral-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-black mb-4 text-gray-900 group-hover:text-[#818CF8] transition-colors">
                  {tgsrtcFeatured.title}
                </h3>
                <p className="text-gray-600 text-base mb-6 leading-relaxed font-medium">
                  {tgsrtcFeatured.description}
                </p>
                <ul className="space-y-3">
                  {tgsrtcFeatured.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-[#818CF8] rounded-full shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Interactive Screen Mockup Container */}
              <div className="w-full lg:w-5/12 flex flex-col gap-4">
                {/* Sleek Browser/Tablet Mockup */}
                <div className="bg-[#1e1e2f] rounded-2xl border border-indigo-500/10 overflow-hidden shadow-2xl transition-all duration-300">
                  {/* Window Title Bar */}
                  <div className="bg-[#12121e] px-4 py-2.5 flex items-center gap-2 border-b border-indigo-950">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    <span className="text-[10px] text-indigo-200/40 font-mono ml-4 truncate">
                      {activeScreen === 'accuracy' ? 'demand_accuracy.png' : 'operations_overview.png'}
                    </span>
                  </div>
                  {/* Image Body */}
                  <div className="aspect-[16/9] w-full bg-[#131321] relative overflow-hidden flex items-center justify-center p-1.5">
                    <img 
                      src={activeScreen === 'accuracy' ? accuracyImage : overviewImage} 
                      alt={activeScreen === 'accuracy' ? 'Demand Prediction Accuracy Dashboard' : 'Operations Overview Scatter Plot'} 
                      className="w-full h-full object-contain rounded-lg shadow-inner"
                    />
                  </div>
                </div>

                {/* Interactive Navigation controls */}
                <div className="flex justify-center gap-3 text-xs font-bold font-mono">
                  <button 
                    onClick={() => setActiveScreen('accuracy')}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                      activeScreen === 'accuracy' 
                        ? 'bg-[#1A1A2E] text-white border-[#1A1A2E] shadow-md shadow-indigo-950/20' 
                        : 'bg-[#1A1A2E]/5 text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black'
                    }`}
                  >
                    Demand Accuracy
                  </button>
                  <button 
                    onClick={() => setActiveScreen('overview')}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                      activeScreen === 'overview' 
                        ? 'bg-[#1A1A2E] text-white border-[#1A1A2E] shadow-md shadow-indigo-950/20' 
                        : 'bg-[#1A1A2E]/5 text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black'
                    }`}
                  >
                    Operations Overview
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Projects Grid */}
        <h3 className="text-xl font-black text-gray-800 mb-8" data-aos="fade-up">
          More Projects & Contributions
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#818CF8] bg-indigo-50 px-2.5 py-1 rounded-full">
                    {proj.role}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-neutral-500 bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="text-xl font-black text-neutral-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {proj.title}
                </h4>
                <p className="text-neutral-600 text-sm font-medium mb-6 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <ul className="space-y-2.5 border-t border-neutral-100 pt-4 mt-auto">
                {proj.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-medium leading-relaxed">
                    <span className="mt-1 w-1 h-1 bg-[#818CF8] rounded-full shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

