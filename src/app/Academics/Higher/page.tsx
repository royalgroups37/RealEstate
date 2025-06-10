'use client';
import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SecondaryHighClassPage = () => {
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

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          High School Classes at School
        </h1>

        {/* Introduction */}
        <p className="mb-6 text-justify leading-relaxed text-sm md:text-base">
          Our high school offers a comprehensive curriculum across Science, Commerce, and Humanities streams, enriched by electives like Computer Science, Visual Arts, and Modern Languages to suit diverse interests. Students engage in rigorous coursework supported by fully-equipped Physics, Chemistry, Biology, and Computer labs, as well as a dedicated makerspace for engineering and design projects. Our experienced faculty blend direct instruction with flipped-classroom techniques and real-world case studies, ensuring concepts are both understood and applied. Personalized mentorship and small-group tutorials help learners refine study strategies and tackle challenging topics. We provide targeted exam preparation for board and competitive tests, alongside career-counseling sessions and college application guidance. Beyond academics, leadership opportunities in clubs like Debate, Model UN, and Student Council foster confidence, teamwork, and critical thinking.
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-4 font-medium">
          To ensure our High School students experience a rich and varied learning environment, we integrate the following teaching styles:
        </p>

        {/* Bullet Points */}
        <ul className="space-y-6 text-sm md:text-base">
          {[
            {
              title: "Inquiry-Based Research",
              desc: "Students tackle real-world questions (e.g., climate change impacts, ethical dilemmas) through guided research, data analysis, and presentations.",
            },
            {
              title: "Flipped & Blended Learning",
              desc: "Core content is reviewed at home via videos or readings, freeing class time for hands-on labs, group problem-solving, and personalized coaching.",
            },
            {
              title: "Socratic Seminars & Debates",
              desc: "Structured discussions and formal debates on literature, current events, or scientific topics sharpen critical thinking and persuasive communication.",
            },
            {
              title: "Laboratory & Fieldwork",
              desc: "Advanced experiments in science labs and off-campus investigations (ecological surveys, historical site visits) link theory directly to practice.",
            },
            {
              title: "Interdisciplinary Capstone Projects",
              desc: "Semester-long team projects blend subjects—such as coding economic models or producing a social-studies documentary—to foster holistic skills.",
            },
            {
              title: "Differentiated & Tiered Tasks",
              desc: "Assignments are customized by proficiency level, offering foundational practice for some and enrichment challenges for others to match individual pace.",
            },
            {
              title: "Collaborative Workshops & Hackathons",
              desc: "Intensive group sessions—like coding hackathons, design sprints, or case-study analyses— cultivate creativity, leadership, and teamwork.",
            },
            {
              title: "Reflective Learning & Metacognition",
              desc: "Regular journaling, self-assessment checklists, and goal-setting conferences encourage students to evaluate their learning strategies and outcomes.",
            },
          ].map(({ title, desc }, i) => (
            <li key={i}>
              <p className="font-semibold mb-1">{title}</p>
              <p className="ml-4">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default SecondaryHighClassPage;
