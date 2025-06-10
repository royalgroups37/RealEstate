// components/AlumniStudents.js

const alumni = Array(4).fill({
  name: 'MR. Vamsi',
  batch: '2023 - 2024',
  image: '/1stranker.jpg', // Replace with your actual image path
});

const AlumniStudents = () => (
  <section className="py-10 text-center text-black">
    <h2 className="text-2xl font-semibold mb-8">OUR ALUMNI STUDENTS</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {alumni.map((student, i) => (
        <div key={i} className="flex flex-col items-center">
          <img src={student.image} alt={student.name} className="w-full h-auto rounded-md shadow-lg" />
          <p className="mt-2 font-medium">{student.name}</p>
          <p className="text-sm text-gray-500">{student.batch}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AlumniStudents;
