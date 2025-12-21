import React, { useState, useRef, useEffect } from 'react';
import ankitaImg from '../images/testimonials/ankita.jpg';
import bulletImg from '../images/testimonials/bullet.jpg';
import buntyImg from '../images/testimonials/bunty.jpg';
import cortezImg from '../images/testimonials/cortez.jpg';
import darkyImg from '../images/testimonials/darkzy.jpg';
import inflaviusImg from '../images/testimonials/inflavius.jpg';
import kuteImg from '../images/testimonials/kute.jpg';
import kyleImg from '../images/testimonials/kyle.jpg';
import minatorImg from '../images/testimonials/minator.jpg';
import nexusImg from '../images/testimonials/nexus.jpg';
import samriddhiImg from '../images/testimonials/samriddhi.jpg';
import shubhaImg from '../images/testimonials/shubha.jpg';
import vaishnaviImg from '../images/testimonials/vaishnavi.jpg';
import tapishImg from '../images/testimonials/tapish.jpg';
import bishalImg from '../images/testimonials/bishal.jpg';
import chetanImg from '../images/testimonials/chetan.jpg';
import prayagImg from '../images/testimonials/prayag.jpg';
import saranImg from '../images/testimonials/saran.jpg';
import perkyImg from '../images/testimonials/perky.jpeg';

function Testimonials() {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [topPaused, setTopPaused] = useState(false);
  const [bottomPaused, setBottomPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Ankita Mhaishalkar',
      title: 'Software Developer, Hexaware',
      image: ankitaImg,
      linkedin: 'https://www.linkedin.com/in/ankita-mhaishalkar-89b54a230/',
      quote: 'Akhilesh is hardworking, curious, and always gives his best. Collaborating with him during college was both smooth and motivating.'
    },
    {
      id: 2,
      name: 'Ankita Thakur',
      title: 'Software Developer, Toast',
      image: bulletImg,
      linkedin: 'https://www.linkedin.com/in/thakuraa/',
      quote: 'He is receptive to feedback and consistently pushes himself to improve, both technically and professionally.'
    },
    {
      id: 3,
      name: 'Satej Kulkarni',
      title: 'Software Developer, Hexaware',
      image: buntyImg,
      linkedin: 'https://www.linkedin.com/in/satej-kulkarni/',
      quote: 'Akhilesh has strong problem-solving skills and a thoughtful approach to building reliable solutions.'
    },
    {
      id: 4,
      name: 'Manav Kesarkar',
      title: 'MSc Student, Arizona State University',
      image: cortezImg,
      linkedin: 'https://www.linkedin.com/in/manav-kesarkar/',
      quote: 'He brings a clear research mindset and structured thinking to every technical discussion.'
    },
    {
      id: 5,
      name: 'Yuvraj Gupta',
      title: 'Game Developer, Gamitronics',
      image: darkyImg,
      linkedin: 'https://www.linkedin.com/in/yuvraj-gupta-28303522b/',
      quote: 'Creative, focused, and technically strong—Akhilesh adapts quickly even across different domains.'
    },
    {
      id: 6,
      name: 'Sarthak Shrivastava',
      title: 'MBBS Aspirant',
      image: inflaviusImg,
      linkedin: 'https://www.linkedin.com/in/sarthaksh06/',
      quote: 'His discipline and analytical mindset are evident in everything he takes on.'
    },
    {
      id: 7,
      name: 'Yash Kute',
      title: 'CEO, PC Part Hunt & Shadowtrace',
      image: kuteImg,
      linkedin: 'https://www.linkedin.com/in/yashkute/',
      quote: 'Akhilesh understands both execution and impact. His contributions genuinely improved our projects.'
    },
    {
      id: 8,
      name: 'Varun Puri',
      title: 'CEO, RISE Media',
      image: kyleImg,
      linkedin: 'https://www.linkedin.com/in/varunepuri/',
      quote: 'He takes strong ownership of his work and consistently delivers results with clarity and focus.'
    },
    {
      id: 9,
      name: 'Abhayveer Oberoi',
      title: 'MBBS Aspirant',
      image: minatorImg,
      linkedin: 'https://www.linkedin.com/in/abhayveer-oberoi/',
      quote: 'Akhilesh has been a mentor figure—always encouraging structured thinking and continuous improvement.'
    },
    {
      id: 10,
      name: 'Rudranil Chowdhury',
      title: 'Student, Techno Main Salt Lake',
      image: nexusImg,
      linkedin: 'https://www.linkedin.com/in/rudranilchowdhury28/',
      quote: 'He explains complex ideas clearly and genuinely cares about helping others grow.'
    },
    {
      id: 11,
      name: 'Samruddhi Kale',
      title: 'MSc Student, University of Southern California',
      image: samriddhiImg,
      linkedin: 'https://www.linkedin.com/in/samruddhi-kale/',
      quote: 'Akhilesh stood out for his depth of understanding and consistency during our college years.'
    },
    {
      id: 12,
      name: 'Shubha Desai',
      title: 'Software Developer, Hexaware',
      image: shubhaImg,
      linkedin: 'https://www.linkedin.com/in/shubha-desai/',
      quote: 'He balances strong fundamentals with curiosity for learning new technologies.'
    },
    {
      id: 13,
      name: 'Vaishnavi Jadhav',
      title: 'MPSC Aspirant',
      image: vaishnaviImg,
      linkedin: 'https://www.linkedin.com/in/vaishnavi-jadhav-777407230/',
      quote: 'Akhilesh is patient, analytical, and always willing to help others understand difficult concepts.'
    },
    {
      id: 14,
      name: 'Tapish Verma',
      title: 'Software Developer, Katalyse.ai',
      image: tapishImg,
      linkedin: 'https://www.linkedin.com/in/tapish-verma/',
      quote: 'An exceptional engineer who built scalable systems and production-ready solutions with reliability and deep technical insight.'
    },
    {
      id: 15,
      name: 'Deeptansu Jena',
      title: 'Software Developer, Vitana',
      image: perkyImg,
      linkedin: 'https://www.linkedin.com/in/deeptansujena/',
      quote: 'Insightful, collaborative, and always open to deep technical discussions.'
    },
    {
      id: 16,
      name: 'Bishal Rijal',
      title: 'AI Automation Engineer, Katalyse.ai',
      image: bishalImg,
      linkedin: 'https://www.linkedin.com/in/bishal-rijal-dmz/',
      quote: 'Akhilesh is reliable, detail-oriented, and great at breaking down complex problems into practical solutions.'
    },
    {
      id: 17,
      name: 'Chetan Mangal',
      title: 'Back End Developer, Katalyse.ai',
      image: chetanImg,
      linkedin: 'https://www.linkedin.com/in/chetan-mangal-81518a231/',
      quote: 'He has a strong problem-solving mindset and collaborates smoothly across teams.'
    },
    {
      id: 18,
      name: 'Saravanan Periyasamy',
      title: 'Vice President of Engineering, Katalyse.ai',
      image: saranImg,
      linkedin: 'https://www.linkedin.com/in/periyasamysaravanan/',
      quote: 'Akhilesh shows maturity beyond his experience, with strong ownership, clarity of thought, and a constant drive to improve.'
    },
    {
      id: 19,
      name: 'Prayag Rai',
      title: 'AIML Developer, Katalyse.ai',
      image: prayagImg,
      linkedin: 'https://www.linkedin.com/in/prayag-rai/',
      quote: 'Creative, focused, and technically sound—Akhilesh is easy to work with and quick to adapt.'
    },
    {
      id: 20,
      name: 'Emma Thompson',
      title: 'AI Program Manager, Apple',
      image: kuteImg,
      linkedin: 'https://linkedin.com/in/example20',
      quote: 'Collaborating with Akhilesh is always a masterclass in AI innovation. His work ethic and expertise are unparalleled.'
    }
  ];

  // Split testimonials for two rows (10 each)
  const topRowTestimonials = testimonials.slice(0, 10);
  const bottomRowTestimonials = testimonials.slice(10, 20);

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