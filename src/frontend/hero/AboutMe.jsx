import React, { useState } from 'react';
import profileImg from '../images/aboutme/profileimg.png';
import deskImg from '../images/aboutme/tenor.gif';

function AboutMe() {
  const [isHoveringDesk, setIsHoveringDesk] = useState(false);

  const educationData = [
    {
      degree: 'B.Tech Computer Science with Data Science Specialization',
      institution: 'D. Y. Patil College of Engineering & Technology, Kolhapur',
      year: '2025'
    },
    {
      degree: 'HSC',
      institution: 'Kendriya Vidyalaya (KV), Nagpur',
      year: '2021'
    },
    {
      degree: 'SSC',
      institution: 'Bharti Krishna Vidhya Vihar, Nagpur',
      year: '2019'
    }
  ];

  const certifications = [
    {
      title: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
      institution: 'Amazon Web Services (AWS)',
      year: '2023',
      link: 'https://www.credly.com/badges/d325a367-bf73-4259-b36d-8697c71c42b4'
    },
    {
      title: "Google Foundations: Data, Data, Everywhere",
      institution: 'Coursera',
      year: '2023',
      link: 'https://coursera.org/verify/KYSL98NB74FL'
    },
    {
      title: 'AWS Academy Graduate - AWS Academy Data Analytics',
      institution: 'Amazon Web Services (AWS)',
      year: '2023',
      link: 'https://www.credly.com/badges/62d62924-04d1-4183-88b6-10c984de7468/public_url'
    }
  ];

  const researchPapers = [
    {
      title: 'A No-Code, Drag And Drop Platform For Building Customizable Business Chatbots',
      institution: 'D. Y. Patil College of Engineering & Technology, Kolhapur',
      year: '2025',
      link: 'https://ijcrt.org/viewfull.php?&p_id=IJCRT2505387'
    }
  ];

  const interests = [
    'Music','Marvel Rivals','Volleyball','AI & Human Behavior','Beaches','Souls-like Games'
  ];

  return (
    <div className="relative w-full bg-transparent min-h-screen py-12 md:py-16 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
            <span className="text-white">Curiosity Meets</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Engineering
            </span>
          </h2>
          <p className="text-white/70 text-lg mt-6">
            My journey, education, and what drives me.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Image with refined gradient overlay */}
            <div className="group relative rounded-3xl overflow-hidden h-[360px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20"></div>
              <img 
                src={profileImg} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
            </div>

            {/* About Me Text - 3 paragraphs, smaller text */}
            <div className="group relative bg-black border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 h-[624px] flex flex-col">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-5 group-hover:text-purple-300 transition-colors duration-300">
                About Me
              </h3>
              <div className="space-y-3 text-white/70 text-sm md:text-base leading-relaxed flex-1">
                <p>
                  Hello! I'm Akhilesh, a Machine Learning Engineer and AI researcher driven by curiosity about how intelligent systems are built and how data becomes insight. My journey began with a desire to understand complex patterns and systems, which gradually shaped a multidisciplinary approach. Today, I work across machine learning, data science, and system design to build meaningful AI solutions.
                </p>
                <p>
                  I focus on building applied AI systems, from training deep learning models to designing data pipelines and deploying scalable solutions. I enjoy working at the intersection of research and real-world impact, translating complex ideas into practical systems. My work emphasizes performance, reliability, and production readiness.
                </p>
                <p>
                  Beyond technical work, I'm endlessly curious by nature. I enjoy exploring research papers, experimenting with new tools, and learning across disciplines. I believe meaningful innovation happens when curiosity meets structure, and when ideas move from exploration to execution.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-5 pt-5 border-t border-white/10">
                <blockquote className="text-white/90 text-sm md:text-base italic font-light">
                  "you <span className="font-semibold not-italic">Explore</span> with curiosity, you <span className="font-semibold not-italic">Engineer</span> with structure."
                </blockquote>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Top Row: Education and Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[360px]">
              {/* Education */}
              <div className="group relative bg-black border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 h-full flex flex-col">
                <h3 className="text-white text-base md:text-lg font-semibold mb-3 flex items-center gap-2 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-lg">🎓</span>
                  Education
                </h3>
                <div className="space-y-2.5 flex-1">
                  {educationData.map((edu, index) => (
                    <div key={index} className="pb-2.5 border-b border-white/10 last:border-0 last:pb-0">
                      <h4 className="text-white font-medium text-xs md:text-sm leading-tight mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-white/50 text-[10px] md:text-xs">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
              </div>

              {/* Certifications - Clickable */}
              <div className="group relative bg-black border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 h-full flex flex-col">
                <h3 className="text-white text-base md:text-lg font-semibold mb-3 flex items-center gap-2 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-lg">📜</span>
                  Certifications
                </h3>
                <div className="space-y-2.5 flex-1">
                  {certifications.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pb-2.5 border-b border-white/10 last:border-0 last:pb-0 hover:bg-white/5 rounded-lg px-2 py-1 -mx-2 -my-1 mb-1.5 last:mb-0 transition-all duration-200 cursor-pointer"
                    >
                      <h4 className="text-white font-medium text-xs md:text-sm leading-tight mb-1 hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-white/50 text-[10px] md:text-xs">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[240px]">
              {/* Interests */}
              <div className="group relative bg-black border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 h-full flex flex-col">
                <h3 className="text-white text-sm md:text-base font-semibold mb-3 flex items-center gap-2 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-base">💜</span>
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2 content-start flex-1">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-purple-500/20 border border-purple-400/30 rounded-lg text-white/90 text-[10px] md:text-xs hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-200 h-fit"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
              </div>

              {/* Research Papers - Clickable */}
              <div className="group relative bg-black border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 h-full flex flex-col">
                <h3 className="text-white text-base md:text-lg font-semibold mb-3 flex items-center gap-2 group-hover:text-purple-300 transition-colors duration-300">
                  <span className="text-lg">📄</span>
                  Research Papers
                </h3>
                <div className="space-y-2.5 flex-1">
                  {researchPapers.map((paper, index) => (
                    <a
                      key={index}
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pb-2.5 border-b border-white/10 last:border-0 last:pb-0 hover:bg-white/5 rounded-lg px-2 py-1 -mx-2 -my-1 mb-1.5 last:mb-0 transition-all duration-200 cursor-pointer"
                    >
                      <h4 className="text-white font-medium text-xs md:text-sm leading-tight mb-1 hover:text-purple-300 transition-colors">
                        {paper.title}
                      </h4>
                      <p className="text-white/50 text-[10px] md:text-xs">
                        {paper.institution} • {paper.year}
                      </p>
                    </a>
                  ))}
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
              </div>
            </div>

            {/* Desk Setup GIF - PROJECT STYLE HOVER */}
            <div 
              className="relative group overflow-hidden rounded-3xl h-[360px] cursor-pointer bg-gray-900 transition-all duration-300"
              onMouseEnter={() => setIsHoveringDesk(true)}
              onMouseLeave={() => setIsHoveringDesk(false)}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={deskImg} 
                  alt="Desk Setup"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay - same as projects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Content - appears on hover (desktop) or always visible (mobile) */}
              <div 
                className={`absolute inset-x-0 bottom-0 p-6 transform transition-all duration-300 ${
                  isHoveringDesk 
                    ? 'translate-y-0 opacity-100' 
                    : 'md:translate-y-4 md:opacity-0 translate-y-0 opacity-100'
                }`}
              >
                <div className="bg-black/60 backdrop-blur-md border border-white/30 rounded-xl p-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    Why Snorlax?
                  </h3>
                  <p className="text-white/100 text-sm mb-2">
                    Snorlax has been my favorite Pokémon since childhood. There's something about its calm, steady nature that I've always connected with—it stays relaxed, focused, and doesn't overcomplicate things.
                  </p>
                  <p className="text-white/100 text-sm">
                    I relate to that mindset a lot. I like working at my own pace, staying focused, enjoying simple things like good food and proper rest, and not stressing over noise that doesn't matter. For me, Snorlax is a reminder to stay calm, do the work, and let results speak.
                  </p>
                </div>
              </div>

              {/* Hover Border Glow - same as projects */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;