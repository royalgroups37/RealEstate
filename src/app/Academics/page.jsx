import React from 'react';

const PrimaryClassPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      {/* Header Section with Image & Quote */}
      <div className="flex flex-col md:flex-row items-center mb-10 gap-6">
        <img
          src="/primary-kid.png" // Replace with actual image path
          alt="Back to School Kid"
          className="w-40 md:w-60"
        />

        <div className="bg-purple-100 p-6 rounded-lg shadow max-w-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">
            "Foundations of Fun & Learning"
          </h3>
          <p className="text-sm text-purple-600">
            “Foundations of Fun & Learning” combines playful, hands-on activities
            with essential literacy and numeracy lessons, fostering curiosity and
            confidence in every young learner.
          </p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-center">Primary Class at School</h1>

      {/* Intro Paragraph */}
      <p className="mb-6">
        Our Primary classes nurture young learners with a balanced blend of play-based
        exploration and structured lessons in literacy, numeracy, and environmental awareness.
        Each classroom is equipped with interactive learning stations—story corners, math
        manipulatives, and art nooks—that encourage hands-on discovery. Experienced teachers
        guide children through daily routines that build solid skills, teamwork, and emotional
        resilience. Weekly themes and project-based activities connect classroom concepts to
        real-world experiences, from planting seeds in our school garden to simple science
        experiments. Small class sizes and a warm, inclusive atmosphere ensure every child
        receives personalized attention and develops a lifelong love of learning.
      </p>

      {/* Subheading */}
      <p className="font-semibold mb-4">
        To ensure that our Primary students enjoy varied and effective learning experiences, we employ these teaching styles:
      </p>

      {/* Bullet Points */}
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>Play-Based Inquiry:</strong> Children explore concepts through guided play—investigating nature,
          building with blocks, and using story prompts to spark questions and discovery.
        </li>
        <li>
          <strong>Interactive Read-Aloud & Storytelling:</strong> Teachers use animated storytelling and group
          reading sessions to develop listening skills, vocabulary, and a love for literacy.
        </li>
        <li>
          <strong>Hands-On Learning Stations:</strong> Rotating centers for math manipulatives, art projects,
          sensory tables, and simple science experiments help engage multiple senses.
        </li>
        <li>
          <strong>Collaborative Circle Time:</strong> Daily morning circles and small-group discussions build
          social skills, turn-taking, and confidence through sharing ideas and experiences.
        </li>
        <li>
          <strong>Demonstration & Guided Practice:</strong> New skills—writing letters, basic arithmetic, or
          craft techniques—are modeled step-by-step, then practiced with teacher support.
        </li>
        <li>
          <strong>Thematic Project Corners:</strong> Quarterly mini-projects (e.g., garden planting, weather
          charting) integrate literacy, numeracy, and science in an age-appropriate format.
        </li>
        <li>
          <strong>Differentiated Learning Tasks:</strong> Activities are scaffolded by ability—color matching
          for beginners, pattern sequencing for more advanced—to meet each child at their level.
        </li>
        <li>
          <strong>Music, Movement & Story-Drama:</strong> Songs, dance routines, and role-play bring core
          lessons to life, reinforcing memory and motor skills in a fun, active way.
        </li>
      </ul>
    </div>
  );
};

export default PrimaryClassPage;
