import React, { useState, useRef, useEffect } from 'react';

function Testimonials() {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [topPaused, setTopPaused] = useState(false);
  const [bottomPaused, setBottomPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'AI Research Lead, TechCorp',
      image: 'https://i.pravatar.cc/150?img=1',
      linkedin: 'https://linkedin.com/in/example1',
      quote: 'Akhilesh is a pleasure to work with and approaches all that he does with 100% effort and passion. His work in AI has pushed our research forward significantly.'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      title: 'CTO, DataFlow Systems',
      image: 'https://i.pravatar.cc/150?img=33',
      linkedin: 'https://linkedin.com/in/example2',
      quote: 'He consistently translated complex ML workflows into production-ready systems and demonstrated a keen eye for optimization and scalability.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Product Manager, CloudAI',
      image: 'https://i.pravatar.cc/150?img=5',
      linkedin: 'https://linkedin.com/in/example3',
      quote: 'Akhilesh has a creative approach to problem-solving and a great eye for detail, which made a big difference in our AI product launch.'
    },
    {
      id: 4,
      name: 'Prof. Michael Zhang',
      title: 'Professor, MIT',
      image: 'https://i.pravatar.cc/150?img=12',
      linkedin: 'https://linkedin.com/in/example4',
      quote: 'He is deeply knowledgeable in machine learning and always delivers exceptional results. A true researcher at heart.'
    },
    {
      id: 5,
      name: 'Priya Sharma',
      title: 'ML Engineer, DeepMind',
      image: 'https://i.pravatar.cc/150?img=9',
      linkedin: 'https://linkedin.com/in/example5',
      quote: 'Best collaborator I ever had. His expertise in deep learning and neural networks is outstanding.'
    },
    {
      id: 6,
      name: 'David Kim',
      title: 'Data Scientist, Google',
      image: 'https://i.pravatar.cc/150?img=14',
      linkedin: 'https://linkedin.com/in/example6',
      quote: 'Working with Akhilesh transformed my understanding of AI systems. His teaching and mentorship are invaluable.'
    },
    {
      id: 7,
      name: 'Lisa Anderson',
      title: 'VP Engineering, StartupXYZ',
      image: 'https://i.pravatar.cc/150?img=10',
      linkedin: 'https://linkedin.com/in/example7',
      quote: 'His ability to bridge the gap between research and production is remarkable. A rare talent in the AI space.'
    },
    {
      id: 8,
      name: 'Arjun Patel',
      title: 'Research Scientist, OpenAI',
      image: 'https://i.pravatar.cc/150?img=15',
      linkedin: 'https://linkedin.com/in/example8',
      quote: 'Akhilesh brings innovation and precision to every project. His contributions have been game-changing for our team.'
    },
    {
      id: 9,
      name: 'Sofia Martinez',
      title: 'AI Consultant, Independent',
      image: 'https://i.pravatar.cc/150?img=20',
      linkedin: 'https://linkedin.com/in/example9',
      quote: 'His dedication to excellence and continuous learning sets him apart. A pleasure to work with on complex AI challenges.'
    },
    {
      id: 10,
      name: 'James Wilson',
      title: 'Senior Developer, Meta',
      image: 'https://i.pravatar.cc/150?img=13',
      linkedin: 'https://linkedin.com/in/example10',
      quote: 'Akhilesh has an incredible ability to explain complex concepts simply. His work ethic is unmatched.'
    }
  ];

  // Split testimonials for two rows (5 each)
  const topRowTestimonials = testimonials.slice(0, 5);
  const bottomRowTestimonials = testimonials.slice(5, 10);

  // Auto-advance top row every 3 seconds
  useEffect(() => {
    if (!topPaused) {
      const interval = setInterval(() => {
        setTopIndex((prev) => (prev + 1) % topRowTestimonials.length);
      }, 3000); // 3 second delay
      return () => clearInterval(interval);
    }
  }, [topPaused, topRowTestimonials.length]);

  // Auto-advance bottom row every 3 seconds
  useEffect(() => {
    if (!bottomPaused) {
      const interval = setInterval(() => {
        setBottomIndex((prev) => (prev + 1) % bottomRowTestimonials.length);
      }, 3000); // 3 second delay
      return () => clearInterval(interval);
    }
  }, [bottomPaused, bottomRowTestimonials.length]);

  // Get 3 visible testimonials starting from current index
  const getVisibleTestimonials = (testimonials, startIndex) => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTopRow = getVisibleTestimonials(topRowTestimonials, topIndex);
  const visibleBottomRow = getVisibleTestimonials(bottomRowTestimonials, bottomIndex);

  return (
    <div className="relative w-full bg-transparent py-20 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
          <span className="text-white">Voice of</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Creative Minds
          </span>
        </h2>
        <p className="text-white/70 text-base md:text-lg mt-6 max-w-3xl mx-auto">
          What my collaborators, clients and students say about working together with me to build delightful and scalable solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Top Row - 3 boxes */}
        <div 
          className="mb-6 overflow-hidden"
          onMouseEnter={() => setTopPaused(true)}
          onMouseLeave={() => setTopPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTopRow.map((testimonial, index) => (
              <a
                key={`top-${testimonial.id}-${topIndex}-${index}`}
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer animate-fadeIn"
                onMouseEnter={() => setTopPaused(true)}
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                    draggable="false"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/80 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row - 3 boxes */}
        <div 
          className="overflow-hidden"
          onMouseEnter={() => setBottomPaused(true)}
          onMouseLeave={() => setBottomPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleBottomRow.map((testimonial, index) => (
              <a
                key={`bottom-${testimonial.id}-${bottomIndex}-${index}`}
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer animate-fadeIn"
                onMouseEnter={() => setBottomPaused(true)}
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                    draggable="false"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/80 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Dots for Top Row */}
        <div className="flex justify-center gap-3 mt-8">
          {topRowTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setTopIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                topIndex === index 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;