'use client';
import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PrimaryClassPage = () => {
  return (
    <div className="min-h-screen bg-white tracking-wide">
      <Header />

      {/* Banner Image */}
      <div className="w-full overflow-hidden">
        <img
          src="/SCHOOLBANNER.png"
          alt="Back to School Kid"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[100vh] object-cover mt-10"
        />
      </div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Primary Class at School
        </h1>

        {/* Intro Paragraph */}
        <p className="mb-6 text-justify leading-relaxed text-sm md:text-base">
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
        <p className="text-lg md:text-xl mb-4 font-medium">
          To ensure that our Primary students enjoy varied and effective learning experiences, we employ these teaching styles:
        </p>

        {/* Bullet Points */}
        <ul className="space-y-6 text-sm md:text-base">
          {[
            {
              title: "Play-Based Inquiry",
              desc: "Children explore concepts through guided play—investigating nature, building with blocks, and using story prompts to spark questions and discovery.",
            },
            {
              title: "Interactive Read-Aloud & Storytelling",
              desc: "Teachers use animated storytelling and group reading sessions to develop listening skills, vocabulary, and a love for literacy.",
            },
            {
              title: "Hands-On Learning Stations",
              desc: "Rotating centers for math manipulatives, art projects, sensory tables, and simple science experiments help engage multiple senses.",
            },
            {
              title: "Collaborative Circle Time",
              desc: "Daily morning circles and small-group discussions build social skills, turn-taking, and confidence through sharing ideas and experiences.",
            },
            {
              title: "Demonstration & Guided Practice",
              desc: "New skills—writing letters, basic arithmetic, or craft techniques—are modeled step-by-step, then practiced with teacher support.",
            },
            {
              title: "Thematic Project Corners",
              desc: "Quarterly mini-projects (e.g., garden planting, weather charting) integrate literacy, numeracy, and science in an age-appropriate format.",
            },
            {
              title: "Differentiated Learning Tasks",
              desc: "Activities are scaffolded by ability—color matching for beginners, pattern sequencing for more advanced—to meet each child at their level.",
            },
            {
              title: "Music, Movement & Story-Drama",
              desc: "Songs, dance routines, and role-play bring core lessons to life, reinforcing memory and motor skills in a fun, active way.",
            },
          ].map(({ title, desc }, i) => (
            <li key={i}>
              <p className="font-semibold mb-1">{title}</p>
              <p className="ml-4">{desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <Footer />

    </div>
  );
};

export default PrimaryClassPage;
