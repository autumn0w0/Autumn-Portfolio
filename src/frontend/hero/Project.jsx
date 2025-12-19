import React, { useState } from 'react';
import ralaImg from '../images/ralasnorlax.png';
import pulseboardImg from '../images/pulseboardsnorlax.png';
import pneumoniaImg from '../images/Pneumoniasnorlax.png';
import judicioImg from '../images/judgewalasnorlax.png';
import skillbridgeImg from '../images/skillbridgesnorlax.png';

function Project() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Rala.ai',
      description: 'AI-powered design system creation and code generation.',
      image: ralaImg,
      link: 'https://github.com/yourusername/aether',
      gridClass: 'md:col-span-2 md:row-span-2 min-h-[400px]' // Large box
    },
    {
      id: 2,
      title: 'PulseBoard.ai',
      description: '3D product visualization with interactive elements.',
      image: pulseboardImg,
      link: 'https://github.com/yourusername/product-showcase',
      gridClass: 'md:col-span-1 md:row-span-1 min-h-[300px]' // Medium box
    },
    {
      id: 3,
      title: 'Pneumonia Classification on TPU',
      description: 'Medical AI for pneumonia detection using TPU acceleration.',
      image: pneumoniaImg,
      link: 'https://github.com/yourusername/auto-spares',
      gridClass: 'md:col-span-1 md:row-span-2 min-h-[400px]' // Tall box
    },
    {
      id: 4,
      title: 'Judicio',
      description: 'Real-time data visualization and analytics platform.',
      image: judicioImg,
      link: 'https://github.com/yourusername/dashboard',
      gridClass: 'md:col-span-1 md:row-span-1 min-h-[300px]' // Medium box
    },
    {
      id: 5,
      title: 'SkillBridge',
      description: 'Reusable UI components with documentation.',
      image: skillbridgeImg,
      link: 'https://github.com/yourusername/components',
      gridClass: 'md:col-span-1 md:row-span-1 min-h-[300px]' // Medium box
    }
  ];

  return (
    <div className="relative w-full bg-transparent py-20 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
            <span className="text-white">Where creativity meets</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Precision
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-6 max-w-3xl mx-auto">
            Discover my explorations and creations from my personal and professional blend of mixing data, insights and curiosity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-4 md:gap-6 mb-12">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden rounded-2xl cursor-pointer bg-gray-900 ${project.gridClass}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Content - Always visible on mobile, hover on desktop */}
              <div 
                className={`absolute inset-x-0 bottom-0 p-6 transform transition-all duration-300 ${
                  hoveredProject === project.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'md:translate-y-4 md:opacity-0 translate-y-0 opacity-100'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="flex justify-center">
          <a 
            href="https://github.com/autumn0w0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white/5 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-3"
          >
            <span className="text-white text-sm md:text-base font-medium">
              See All Projects
            </span>
            <svg 
              className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;