import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SecondaryClassPage = () => {
    return (
        <div className=" h-full tracking-wide   bg-white">
            <Header />

            <div className="">
                {/* Header Section with Image & Quote */}
                   <div className="w-full overflow-hidden">
        <img
          src="/SCHOOLBANNER.png"
          alt="Back to School Kid"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[100vh] object-cover mt-10"
        />
      </div>
                <div className="max-w-7xl mx-auto px-4 py-6 text-gray-800">
                    {/* Title */}
                    <h1 className="text-2xl font-bold mb-4 text-center ">Secondary Class at School</h1>

                    {/* Intro Paragraph */}
                    <p className="mb-6 text-justify leading-loose">
                        Our Secondary classes offer a diverse curriculum with dedicated Science, Commerce, and Humanities streams, complemented by electives such as Computer Science, Fine Arts, and foreign languages. Students benefit from state-of-the-art laboratories—in Physics, Chemistry, Biology, and Computing—as well as a makerspace for hands-on experimentation and project work. Our subject-specialist faculty deliver a blend of direct instruction and flipped-classroom experiences, using digital resources and in-class problem-solving to deepen understanding. Regular one-on-one mentorship and small-group tutorials ensure that every student receives personalized support. We prepare learners for both board examinations and competitive entrance tests through targeted prep modules, career-counseling workshops, and alumni panels. A vibrant extracurricular program—including Debate Club, Model UN, and student leadership initiatives—fosters critical thinking, teamwork, and confidence beyond the classroom.
                    </p>

                    {/* Subheading */}
                    <p className=" text-xl mb-6">
                        To ensure our Secondary students benefit from varied and engaging learning experiences, we employ these teaching styles:
                    </p>

                    {/* Bullet Points */}
                    <ul className="list-inside space-y-3">
                        <li>
                            <div className="mb-3">Inquiry-Driven Projects:</div>
                            <span className="ml-5">
                                Students explore complex questions—e.g., environmental impact studies or historical investigations—
                                through guided research and data analysis.
                            </span>
                        </li>
                        <li>
                            <div className="mb-3">Socratic Seminars & Debates:</div>
                            <span className="ml-5">
                                Structured discussions challenge learners to defend viewpoints, analyze texts, and develop
                                advanced critical-thinking and speaking skills.
                            </span>
                        </li>
                        <li>
                            <div className="mb-3">Flipped & Blended Learning:</div>
                            <span className="ml-5">
                                Pre-class video lectures and readings free up classroom time for hands-on problem solving,
                                group workshops, and personalized teacher support.
                            </span>
                        </li>
                        <li>
                            <div className="mb-3">Laboratory & Field-Based Experiments:</div>
                            <span className="ml-5">
                                Rigorous practicals in science labs, coding hackathons, and field trips (e.g., museum visits,
                                ecological surveys) connect theory to real-world contexts.
                            </span>
                        </li>
                        <li>
                            <div className="mb-3">Differentiated & Tiered Instruction:</div>
                            <span className="ml-5">
                                Assignments are scaffolded by skill level—from foundational practice to enrichment tasks—
                                so each student progresses at an appropriate pace.
                            </span>
                        </li>
                        <li>
                            <div className="mb-3">Interdisciplinary Capstone Projects:</div>
                            <span className="ml-5">
                                Semester-long team projects blend subjects (e.g., math modeling of economic trends or literary
                                analysis in social studies) to foster holistic learning.
                            </span>
                        </li>
                        <li>
                            <div className="mb-3">Collaborative Problem-Solving Workshops:</div>
                            <span className="ml-5">
                                Small groups tackle case studies, design challenges, or programming tasks, promoting peer learning,
                                leadership, and teamwork.
                            </span>
                        </li>
                        <li>
                            <div className="mb-3">Reflective & Metacognitive Activities:</div>
                            <span className="ml-5">
                                Journals, self-assessment checklists, and goal-setting exercises encourage students to monitor
                                their own learning strategies and outcomes.
                            </span>
                        </li>
                    </ul>

                </div>

            </div>
            <Footer />

        </div>
    );
}
export default SecondaryClassPage;