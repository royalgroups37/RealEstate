// components/CustomerReview.jsx

'use client';

import React from 'react';

const CustomerReview = () => {
    return (
        <>
            <section className="bg-[#1f4b43] text-white py-16 px-4 md:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-screen-xl mx-auto">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
                            What our customers are <br /> saying us?
                        </h2>
                        <p className="text-base leading-loose text-gray-100">
                            Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose injected humour and the like.
                        </p>

                        <div className="flex gap-10 mt-4">
                            <div>
                                <p className="text-2xl font-semibold mb-4" >10m+</p>
                                <p className="text-sm text-gray-100">Happy People</p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold mb-4">4.88</p>
                                <p className="text-sm text-gray-100">Overall Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col gap-6 w-full max-w-2xl">
                        <div className=" p-6 rounded-lg ">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-lg font-semibold">Cameron Williamson</p>
                                    <p className="text-sm text-gray-300">Designer</p>
                                </div>
                            </div>
                            <p className="text-base leading-relaxed">
                                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                                velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                                condimentum lobortis.
                            </p>
                        </div>

                        {/* Pagination Arrows */}
                        <div className="flex gap-4">
                            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-[#1f4b43] transition">
                                {/* Left Arrow */}
                                <svg
                                    width={13}
                                    height={13}
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.912 0.782L2.894 6.774 8.912 12.792 9.445 12.233 3.986 6.774 9.445 1.315 8.912 0.782Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <button className="p-3 rounded-full border border-white hover:bg-white hover:text-[#1f4b43] transition">
                                {/* Right Arrow */}
                                <svg
                                    width={13}
                                    height={13}
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.088 0.782L10.106 6.774 4.088 12.792 3.555 12.233 9.014 6.774 3.555 1.315 4.088 0.782Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-8 px-4 flex flex-col items-center gap-6">
                <p className="text-center text-[#1f4b43] text-lg md:text-xl font-medium">
                    Thousands of world’s leading companies trust Space
                </p>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-6xl w-full">
                    <img
                        src="/logos/b1.png"
                        alt="Company 1"
                        className="h-6 md:h-8 object-contain"
                    />
                    <img
                        src="/logos/b2.png"
                        alt="Company 2"
                        className="h-5 md:h-6 object-contain"
                    />
                    <img
                        src="/logos/b3.png"
                        alt="Company 3"
                        className="h-10 md:h-12 object-contain"
                    />
                    <img
                        src="/logos/b4.png"
                        alt="Company 4"
                        className="h-6 md:h-8 object-contain"
                    />
                    <img
                        src="/logos/b5.png"
                        alt="Company 5"
                        className="h-6 md:h-8 object-contain"
                    />
                    <img
                        src="/logos/b6.png"
                        alt="Company 6"
                        className="h-7 md:h-9 object-contain"
                    />
                </div>
            </section>
        </>
    );
};

export default CustomerReview;
