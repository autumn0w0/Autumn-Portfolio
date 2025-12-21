import React from 'react';
import profileImg from '../images/profileimg.png';
import deskImg from '../images/tenor.gif';

function AboutMe() {
    const badges = [
    'Explorer',
    'Researcher',
    'Builder',
    'Problem Solver',
    'System Thinker',
    'Polymath'
    ];


  const educationData = [
    {
      degree: 'Bachelor of Science (Honors), Physics',
      institution: 'University of Delhi',
      year: '2019'
    },
    {
      degree: 'Master of Design, User Experience Design',
      institution: 'CIT University',
      year: '2020'
    },
    {
      degree: 'Post Graduate Program in Artificial Intelligence and Machine Learning',
      institution: 'Caltech CTME',
      year: '2023'
    }
  ];

  const certifications = [
    {
      title: 'Python for Data Science',
      institution: 'IBM',
      year: '2025',
      link: '#'
    },
    {
      title: "CS50's Introduction to Computer Science",
      institution: 'Harvard',
      year: '2022',
      link: '#'
    },
    {
      title: 'Brand Management: Aligning Business, Brand and Behavior',
      institution: 'London Business School',
      year: '2025',
      link: '#'
    }
  ];

  const researchPapers = [
    {
      title: 'Winner-BrandX',
      institution: 'Competition',
      year: '2024',
      link: '#'
    },
    {
      title: 'DST-INSPIRE Scholar',
      institution: 'DST India',
      year: '2023',
      link: '#'
    }
  ];

  const interests = [
    'HCI', 'HRI', 'Psychology', 'Mixed Media Art',
    'Music', 'Poetry', 'Reading', 'Travel'
  ];

  return (
    <div className="relative w-full bg-transparent min-h-screen py-12 md:py-16 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Image - Large, separate card at top */}
            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900/50 to-purple-900/50 h-[300px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
              <img 
                src={profileImg} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
            </div>

            {/* About Me Text */}
            <div className="group relative bg-black border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 group-hover:text-purple-300 transition-colors duration-300">
                About Me
              </h3>
              <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                <p>
                  Hello! I’m Akhilesh, a Machine Learning Engineer and AI researcher—but my journey didn’t start with models or code. It began with curiosity: understanding how complex systems work, how data tells stories, and how intelligence—human or artificial—emerges from patterns. Over time, this curiosity evolved into a multidisciplinary approach that blends machine learning, data science, and system design.
                </p>
                <p>
                  Today, I focus on building applied AI systems—from training deep learning models and designing data pipelines to deploying scalable, production-ready solutions. I enjoy working at the intersection of research and real-world impact, whether it’s developing AI-driven products, experimenting with new architectures, or translating complex ideas into usable systems. I believe good AI should be reliable, interpretable, and designed with purpose.
                </p>
                <p>
                  Beyond technical work, I’m deeply curious by nature. I enjoy exploring research papers, experimenting with new tools, thinking about how systems can be improved, and learning from domains outside of tech. I’m driven by the idea that meaningful innovation happens when curiosity meets discipline—and when ideas are carried all the way from exploration to execution.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <blockquote className="text-white/90 text-sm md:text-base italic font-light">
                  "you <span className="font-semibold not-italic">Explore</span> with curiosity, you <span className="font-semibold not-italic">Engineer</span> with structure."
                </blockquote>
              </div>

              {/* Personality Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-xs hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 cursor-default"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Top Row: Education and Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Education */}
              <div className="group relative bg-black border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 flex items-center gap-2 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-lg">🎓</span>
                  Education
                </h3>
                <div className="space-y-3">
                  {educationData.map((edu, index) => (
                    <div key={index} className="pb-3 border-b border-white/10 last:border-0 last:pb-0">
                      <h4 className="text-white font-medium text-xs leading-tight mb-1.5">
                        {edu.degree}
                      </h4>
                      <p className="text-white/50 text-xs">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
              </div>

              {/* Certifications - Clickable */}
              <div className="group relative bg-black border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 flex items-center gap-2 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-lg">📜</span>
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pb-3 border-b border-white/10 last:border-0 last:pb-0 hover:bg-white/5 rounded-lg px-2 py-1 -mx-2 -my-1 mb-2 last:mb-0 transition-all duration-200 cursor-pointer"
                    >
                      <h4 className="text-white font-medium text-xs leading-tight mb-1.5 hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-white/50 text-xs">
                        {cert.institution} • {cert.year}
                      </p>
                    </a>
                  ))}
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
              </div>
            </div>

            {/* Middle Row: Interests and Research Papers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Interests */}
              <div className="group relative bg-black border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 flex items-center gap-2 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-lg">💜</span>
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-purple-500/20 border border-purple-400/30 rounded-lg text-white/90 text-xs hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
              </div>

              {/* Research Papers - Clickable (matching Certifications style) */}
              <div className="group relative bg-black border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-white text-base md:text-lg font-semibold mb-4 flex items-center gap-2 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-lg">📄</span>
                  Research Papers
                </h3>
                <div className="space-y-3">
                  {researchPapers.map((paper, index) => (
                    <a
                      key={index}
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pb-3 border-b border-white/10 last:border-0 last:pb-0 hover:bg-white/5 rounded-lg px-2 py-1 -mx-2 -my-1 mb-2 last:mb-0 transition-all duration-200 cursor-pointer"
                    >
                      <h4 className="text-white font-medium text-xs leading-tight mb-1.5 hover:text-purple-300 transition-colors">
                        {paper.title}
                      </h4>
                      <p className="text-white/50 text-xs">
                        {paper.institution} • {paper.year}
                      </p>
                    </a>
                  ))}
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
              </div>
            </div>

            {/* Desk Setup Image - Large */}
            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900/30 to-purple-900/30 h-[500px] md:h-[560px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
              <img 
                src={deskImg} 
                alt="Desk Setup"
                className="w-full h-full object-cover"
              />
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;