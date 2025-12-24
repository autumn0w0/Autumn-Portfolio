import React from "react";
import { Timeline } from "../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Katalyse AI",
      linkedInUrl: "https://www.linkedin.com/company/katalyse-ai/",
      content: (
        <div className="space-y-6">

          <div>
            <p className="text-xl text-neutral-200">
              <strong>Data Engineer</strong>
              <br />Jul 2025 – Oct 2025 · Hybrid · Bangalore
            </p>
            <ul className="list-disc pl-5 text-lg text-neutral-300 mt-2 space-y-1">
              <li>Designed and maintained data pipelines to support analytics and machine learning workflows.</li>
              <li>Worked with structured and semi-structured data to enable reliable ingestion and transformation.</li>
              <li>Collaborated with AI teams to ensure data quality, availability, and consistency across systems.</li>
              <li>Improved data reliability to support data-driven decision-making across products.</li>
            </ul>
          </div>

          <div>
            <p className="text-xl text-neutral-200">
              <strong>Software Engineering Intern</strong>
              <br />Jan 2025 – Jun 2025 · Hybrid · Bangalore
            </p>
            <ul className="list-disc pl-5 text-lg text-neutral-300 mt-2 space-y-1">
              <li>Developed and maintained backend services for AI-driven applications in a production environment.</li>
              <li>Built and optimized RESTful APIs with a focus on scalability, performance, and clean architecture.</li>
              <li>Collaborated with ML and product teams to integrate models into real-world systems.</li>
              <li>Improved system stability through debugging, testing, and performance optimization.</li>
            </ul>
          </div>

        </div>
      ),
    },

    {
      title: "Manga Rabbit HoméNoba",
      linkedInUrl: "https://www.linkedin.com/company/manga-rabbit/",
      content: (
        <div className="space-y-6">
          <div>
            <p className="text-xl text-neutral-200">
              <strong>Chief Technology Officer</strong>
              <br />Nov 2021 – Oct 2024
            </p>
            <ul className="list-disc pl-5 text-lg text-neutral-300 mt-2 space-y-1">
              <li>Led end-to-end technology strategy, analytics, and product development.</li>
              <li>Oversaw data-driven decision-making across content, growth, and operations.</li>
              <li>Managed cross-functional teams spanning tech, design, and media.</li>
              <li>Built internal tools and dashboards to track performance and engagement.</li>
            </ul>
          </div>

          <div>
            <p className="text-xl text-neutral-200">
              <strong>Data Analyst</strong>
              <br />May 2022 – Jul 2023
            </p>
            <ul className="list-disc pl-5 text-lg text-neutral-300 mt-2 space-y-1">
              <li>Analyzed business and content performance data to support strategic decisions.</li>
              <li>Built dashboards and reports for trend analysis and insights.</li>
              <li>Applied statistical techniques to identify growth opportunities.</li>
              <li>Worked closely with leadership to translate data into action.</li>
            </ul>
          </div>

          <div>
            <p className="text-xl text-neutral-200">
              <strong>Senior Video Editor</strong>
              <br />Nov 2021 – May 2022
            </p>
            <ul className="list-disc pl-5 text-lg text-neutral-300 mt-2 space-y-1">
              <li>Created high-quality video content using professional editing pipelines.</li>
              <li>Worked on animation, character design, and visual storytelling.</li>
              <li>Optimized videos for engagement and platform-specific formats.</li>
              <li>Collaborated with creative teams to maintain consistent branding.</li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      title: "IIT Bombay",
      linkedInUrl: "https://www.linkedin.com/school/iit-bombay/",
      content: (
        <div>
          <p className="text-xl text-neutral-200 mb-2">
            <strong>Research Intern</strong> — EdTech Society
            <br />Apr 2024 – Sep 2024 · Remote
          </p>
          <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
            <li>Conducted statistical data analysis to extract insights from large academic datasets.</li>
            <li>Applied computer vision techniques for image processing and analysis tasks.</li>
            <li>Evaluated model performance using quantitative metrics and experimental validation.</li>
            <li>Documented research findings and contributed to structured technical reports.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Google DSC",
      linkedInUrl: "https://www.linkedin.com/company/google-developer-student-clubs/",
      content: (
        <div>
          <p className="text-xl text-neutral-200 mb-2">
            <strong>Content Creator</strong> — DYPCET
            <br />Apr 2023 – Sep 2024
          </p>
          <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
            <li>Produced technical and educational content for developer-focused audiences.</li>
            <li>Supported community growth through workshops, events, and online engagement.</li>
            <li>Used analytics to track reach, engagement, and content effectiveness.</li>
            <li>Collaborated with student developers to promote tech initiatives on campus.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "RISE Media",
      linkedInUrl: "https://www.linkedin.com/company/rise-media/",
      content: (
        <div className="space-y-6">
          <div>
            <p className="text-xl text-neutral-200 mb-2">
              <strong>Content Specialist (Freelance)</strong>
              <br />Mar 2024 – Aug 2024 · Remote
            </p>
            <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
              <li>Designed data-backed content strategies focused on SEO and audience growth.</li>
              <li>Analyzed engagement metrics to refine content performance and visibility.</li>
              <li>Integrated analytical insights into editorial decision-making.</li>
              <li>Delivered consistent, high-quality content under tight deadlines.</li>
            </ul>
          </div>

          <div>
            <p className="text-xl text-neutral-200 mb-2">
              <strong>Machine Learning Intern</strong>
              <br />2023 – 2024
            </p>
            <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
              <li>Built and evaluated machine learning models for content performance prediction and trend analysis.</li>
              <li>Performed data preprocessing, feature engineering, and exploratory data analysis on engagement datasets.</li>
              <li>Automated data pipelines for loading, cleaning, and analyzing large-scale content metrics.</li>
              <li>Translated ML insights into actionable recommendations for content strategy and growth.</li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      title: "Marvel Entertainment",
      linkedInUrl: "https://www.linkedin.com/company/marvel-entertainment/",
      content: (
        <div>
          <p className="text-xl text-neutral-200 mb-2">
            <strong>Marvel Rivals – Beta Tester</strong>
            <br />Jul 2024 · Remote
          </p>
          <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
            <li>Tested gameplay mechanics, balance, and performance across multiple scenarios.</li>
            <li>Identified and documented bugs with reproducible steps and detailed reports.</li>
            <li>Provided structured feedback on UX, progression systems, and gameplay flow.</li>
            <li>Collaborated with testing teams to improve overall game stability.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "White Shadows Esports",
      linkedInUrl: "https://www.linkedin.com/company/white-shadows-esports/",
      content: (
        <div>
          <p className="text-xl text-neutral-200 mb-2">
            <strong>Machine Learning Intern</strong>
            <br />Mar 2023 – Aug 2023
          </p>
          <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
            <li>Built and trained machine learning models using PyTorch and TensorFlow.</li>
            <li>Performed data preprocessing, feature engineering, and exploratory analysis.</li>
            <li>Created visual dashboards to communicate model insights and trends.</li>
            <li>Applied ML techniques to gaming and performance analytics use cases.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "DYPCET",
      linkedInUrl: "https://www.linkedin.com/school/dypcet/",
      content: (
        <div>
          <p className="text-xl text-neutral-200 mb-2">
            <strong>Placement Coordinator</strong>
            <br />Oct 2022 – Aug 2023
          </p>
          <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
            <li>Coordinated placement activities between students, faculty, and recruiters.</li>
            <li>Managed data related to student profiles, eligibility, and recruitment drives.</li>
            <li>Organized training sessions and placement-related events.</li>
            <li>Developed leadership and program management skills in a high-responsibility role.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Birch Biosciences",
      linkedInUrl: "https://www.linkedin.com/company/birch-biosciences/",
      content: (
        <div>
          <p className="text-xl text-neutral-200 mb-2">
            <strong>Web Designer</strong>
            <br />2020 – 2021
          </p>
          <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
            <li>Designed clean and intuitive UI layouts using Figma.</li>
            <li>Translated business requirements into functional design systems.</li>
            <li>Ensured usability, consistency, and visual clarity across pages.</li>
            <li>Worked closely with stakeholders to iterate on designs.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Redwolf",
      linkedInUrl: "https://www.linkedin.com/company/redwolf/",
      content: (
        <div>
          <p className="text-xl text-neutral-200 mb-2">
            <strong>Graphic Design Artist</strong>
            <br />2019 – 2020
          </p>
          <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
            <li>Designed digital creatives for merchandise and branding campaigns.</li>
            <li>Worked with Photoshop, Illustrator, Canva, and Figma.</li>
            <li>Delivered production-ready assets under tight timelines.</li>
            <li>Maintained visual consistency across product lines.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "ComicSense",
      linkedInUrl: "https://www.linkedin.com/company/comicsense/",
      content: (
        <div>
          <p className="text-xl text-neutral-200 mb-2">
            <strong>Graphic Designer</strong>
            <br />2018 – 2019
          </p>
          <ul className="list-disc pl-5 text-lg text-neutral-300 space-y-1">
            <li>Created illustrations and promotional assets for comic-related products.</li>
            <li>Assisted in branding and visual identity development.</li>
            <li>Converted creative concepts into print and digital designs.</li>
            <li>Built a strong foundation in visual design and creative workflows.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full bg-transparent py-20 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header matching Project style with reduced bottom margin */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
            <span className="text-white">My Professional</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-6 max-w-3xl mx-auto">
            Experience, roles, and contributions across organizations.
          </p>
        </div>

        {/* Timeline */}
        <Timeline data={data} />
      </div>
    </div>
  );
}