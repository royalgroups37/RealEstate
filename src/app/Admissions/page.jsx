import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdmissionsForm = () => {
    return (
        <div className="h-full tracking-wide   bg-white">
            <Header />

            <div className=" h-full tracking-wide  bg-white max-w-8xl mx-auto"></div>
            <div className="max-w-3xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">Admissions Enquiry</h2>
                <p className="text-gray-600 mb-6">
                    Admission is the process of enrolling or being accepted into a school or program.
                </p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name of the Student *"
                        className="w-full p-3 border border-gray-300 rounded-md  text-gray-600"
                    />

                    <div className="relative">
                        <input
                            type="date"
                            className="w-full p-3 border border-gray-300 rounded-md  text-gray-400"
                            placeholder="Date of Birth : DD - MM - YYYY"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Name of the parent *"
                        className="w-full p-3 border border-gray-300 rounded-md text-gray-600"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            placeholder="Parent’s phone number"
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-600"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-600"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select className="w-full p-3 border border-gray-300 rounded-md text-gray-400">
                            <option>Admission for class</option>
                            <option>Nursery</option>
                            <option>KG</option>
                            <option>1st</option>
                            {/* Add more as needed */}
                        </select>
                        <select className="w-full p-3 border border-gray-300 rounded-md text-gray-400">
                            <option>Admission Year</option>
                            <option>2025</option>
                            <option>2026</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select className="w-full p-3 border border-gray-300 rounded-md text-gray-400">
                            <option>Transport Facility</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <select className="w-full p-3 border border-gray-300 rounded-md text-gray-400">
                            <option>Present Class</option>
                            <option>Nursery</option>
                            <option>KG</option>
                            <option>1st</option>
                            {/* Add more as needed */}
                        </select>
                    </div>

                    <textarea
                        placeholder="Any Other Information"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-md text-gray-600"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-sky-400 text-white p-3 rounded-md  hover:bg-sky-500 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
                              <Footer/>

        </div>
    );
};

export default AdmissionsForm;
