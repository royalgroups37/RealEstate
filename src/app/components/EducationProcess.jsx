// components/EducationProcess.js
import { Book, ClipboardList, UserCheck, Users, Lightbulb, FileText } from 'lucide-react';

const features = [
  { icon: <ClipboardList />, label: 'Assessments & Feedback' },
  { icon: <Book />, label: 'Curriculum Planning' },
  { icon: <UserCheck />, label: 'Engaging Classroom Learning' },
  { icon: <FileText />, label: 'Homework & Reinforcement' },
  { icon: <Users />, label: 'Co-Curricular Excellence' },
  { icon: <Users />, label: 'Parent-Teacher Partnership' },
  { icon: <ClipboardList />, label: 'Remedial & Advanced Programs' },
  { icon: <Lightbulb />, label: 'Values & Life Skills' },
];

const EducationProcess = () => (
  <section className="py-10 text-center text-black">
    <h2 className="text-2xl font-semibold mb-2">Our Education Process</h2>
    <p className="text-gray-600 mb-8">Fostering growth through structured learning, creativity, and values.</p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {features.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="bg-blue-100 p-4 rounded-full text-blue-600">
            {item.icon}
          </div>
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EducationProcess;
