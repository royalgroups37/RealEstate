import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FacultyGrid = () => {
    const facultyMembers = Array(9).fill({
        name: 'MR . Vamsi',
        qualification: 'BA, B.Ed, MBA',
        image: "/PROFILEIAMGE.png", // use a common image or make this dynamic
    });

    return (
        <div>
            <Header />

            <section className=" h-full tracking-wide   bg-white py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 uppercase text-gray-800">Our Faculty</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-20">
                    {facultyMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-60 h-80 relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover   rounded shadow"
                                />
                            </div>
                            <p className="mt-4 font-semibold text-gray-700">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.qualification}</p>
                        </div>
                    ))}
                </div>
            </section>
                              <Footer/>

        </div>
    );
};

export default FacultyGrid;
