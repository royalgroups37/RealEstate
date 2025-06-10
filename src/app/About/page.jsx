import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className=" h-full tracking-wide   bg-white">
            <Header />

            <div className="">
                {/* Header Section with Image & Quote */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="/SCHOOLIMAGE.png"
                        alt="School Building"
                        className="w-full rounded-lg mb-10 mt-10"
                    />

                </div>
                <div className="max-w-7xl mx-auto px-4 py-6 text-gray-800">
                    {/* Title */}
                    <h1 className="text-2xl font-bold mb-4 text-center ">About Our School</h1>

                    {/* Intro Paragraph */}
                    <p className="mb-6 text-justify leading-loose">
                        Our school is a nurturing and inclusive learning community committed to academic excellence and holistic development. We provide a well-rounded education that balances strong academics with co-curricular activities, life skills, and character-building. With modern facilities, experienced educators, and a student-centric approach, we create an environment where every child is inspired to explore, learn, and grow. From foundational learning in primary grades to career readiness in high school, our programs are designed to support each stage of a child’s journey. We believe in empowering students to become confident, compassionate, and responsible global citizens.                    </p>


                </div>

            </div>
                  <Footer/>

        </div>
    );
};

export default About;
