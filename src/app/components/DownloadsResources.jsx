// components/DownloadsResources.js
import { Download } from 'lucide-react';

const resources = [
  'Syllabi & Timetables',
  'Circulars & Notices',
  'Academic Calendar & Holiday Lists',
];

const DownloadsResources = () => (
  <section className="py-10 text-black">
    <h2 className="text-center text-2xl font-semibold mb-6">Downloads & Resources</h2>
    <div className="space-y-6 max-w-7xl mx-auto">
      {resources.map((item, i) => (
        <div key={i} className="flex justify-between items-center px-6 py-4 border border-gray-300 rounded-lg  hover:shadow-md transition">
          <span>{item}</span>
          <Download className="w-5 h-5 text-gray-600" />
        </div>
      ))}
    </div>
  </section>
);

export default DownloadsResources;
