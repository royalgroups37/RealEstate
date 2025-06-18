import React from "react";

const articles = [
  {
    id: 1,
    category: "Apartment",
    date: "March 19, 2024",
    title: "Housing Markets That Changed the Most This Week",
    image: "/Blogs-1.jpg",
    link: "/articles/1"
  },
  {
    id: 2,
    category: "Apartment",
    date: "March 19, 2024",
    title: "Read Unveils the Best Canadian Cities for Biking",
    image: "/Blogs-2.png",
    link: "/articles/2"
  },
  {
    id: 3,
    category: "Office",
    date: "March 19, 2024",
    title: "10 Walkable Cities Where You Can Live Affordably",
    image: "/Blogs-3.png",
    link: "/articles/3"
  },
  {
    id: 4,
    category: "Shop",
    date: "March 19, 2024",
    title: "New Apartment Nice in the Best Canadian Cities",
    image: "/Blogs-4.png",
    link: "/articles/4"
  }
];

const RecentArticles = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f4b43]">
          Recent Articles & News
        </h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white border rounded-xl overflow-hidden shadow-sm transition hover:shadow-md">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <p className="text-sm text-gray-500">
                  {article.category} • {article.date}
                </p>
                <h3 className="mt-2 text-md font-semibold text-[#1f4b43]">
                  {article.title}
                </h3>
                <a
                  href={article.link}
                  className="mt-3 inline-flex items-center text-sm font-medium text-[#1f4b43] hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
