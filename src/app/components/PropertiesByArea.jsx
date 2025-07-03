'use client';

import React from 'react';

const areas = [
    { name: 'Madhapur', properties: 8, image: '/Madapur.png' },
    { name: 'Hi-Tech City', properties: 0, image: '/hitechCity.png' },
    { name: 'Gachibowli', properties: 0, image: '/Gachibowli.png' },
    { name: 'Kukatpally', properties: 2, image: '/Kukkapally.png' },
    { name: 'LB Nagar', properties: 1, image: '/Lbnagar.png' },
    { name: 'Ameerpet', properties: 0, image: '/Ameerpet.png' },
    { name: 'Secunderabad', properties: 3, image: '/Secundeabad.png' },
    { name: 'Kondapur', properties: 2, image: '/kondapur.png' },
    { name: 'Manikonda', properties: 0, image: '/manikonda.png' },
];

const PropertiesByArea = () => {
    return (
        <section className="py-16 px-4 text-center">
            <h2 className="text-3xl font-semibold text-[#1f4b43]">Properties by Area</h2>
            <p className="text-gray-500 mt-2 mb-10">Lorem ipsum dolor sit amet</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {areas.map((area, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center space-x-4 group hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={area.image}
                            alt={area.name}
                            className="w-24 h-24 rounded-lg object-cover shadow-md"
                        />
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[#1f4b43] font-bold text-md">{area.name}</h3>
                            <p className="text-sm text-gray-500">{area.properties} Properties</p>
                        </div>
                    </div>

                ))}
            </div>
        
        </section>
    );
};

export default PropertiesByArea;
