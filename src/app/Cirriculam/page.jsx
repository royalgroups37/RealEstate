import React from 'react';
import Header from '../components/Header';

const CurriculumPage = () => {
  return (
    <div className="min-h-screen bg-white tracking-wide">
      <Header />

      {/* Image Section */}
      <div className="w-full overflow-hidden">
        <img
          src="/CURRICULUMIMAGE.png"
          alt="Curriculum Overview"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover mt-10"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Curriculum Overview at Our School
        </h1>

        {/* Intro Paragraph */}
        <p className="text-justify leading-relaxed text-sm md:text-base">
          Our curriculum is thoughtfully designed to guide students through a seamless progression from foundational skills to advanced concepts. Each grade level features a balanced mix of core subjects—like mathematics, languages, and sciences—and dynamic electives such as art, music, and coding. We align all learning objectives with national and international standards to ensure both academic rigor and global relevance. Thematic units weave in 21st-century skills—critical thinking, collaboration, and digital literacy—across every subject. Regular curriculum reviews, teacher training, and feedback loops keep content fresh, engaging, and responsive to student interests. A downloadable roadmap outlines key topics, learning milestones, and recommended resources for each term, helping families stay informed and support their child’s journey.
        </p>
      </div>
    </div>
  );
};

export default CurriculumPage;
