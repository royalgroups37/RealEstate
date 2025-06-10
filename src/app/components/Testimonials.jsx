const testimonials = [
    {
        name: "Parent 1",
        feedback: "“We’ve seen tremendous growth in our child—both academically and personally. The school truly nurtures every child’s potential.”",
        img: "/PROFILEIAMGE.png"
    },
    {
        name: "Parent 2",
        feedback: "“The teachers are incredibly dedicated and caring. My child looks forward to school every day!”",
        img: "/PROFILEIAMGE.png"
    },
    {
        name: "Parent 1",
        feedback: "“We love the balance of academics, creativity, and values. It’s a place where our child feels safe and inspired.",
        img: "/PROFILEIAMGE.png"
    },
    {
        name: "Parent 2",
        feedback: "“The communication between parents and staff is excellent. We always feel involved and informed.”",
        img: "/PROFILEIAMGE.png"
    },
    {
        name: "Parent 1",
        feedback: "“From strong leadership to supportive teachers, this school has exceeded our expectations in every way.”",
        img: "/PROFILEIAMGE.png"
    },
    {
        name: "Parent 2",
        feedback: "“The balance between academics, sports, and creativity here is excellent. Our child is growing into a well-rounded individual.",
        img: "/PROFILEIAMGE.png"
    }
];

const Testimonials = () => (
    <section className="max-w-7xl mx-auto p-6 text-black">
        <h2 className="text-2xl font-bold text-center mb-4">Testimonials</h2>
        <h4 className="text-lg text-center text-gray-500 mb-4">
            What Parents Should Know About Our School
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-4 rounded shadow">
                    <p className="italic">"{t.feedback}"</p>
                    <div className="mt-4 flex items-center gap-4">
                        <img src={t.img} className="w-12 h-12 rounded-full" alt={t.name} />
                        <div>
                            <h4 className="font-semibold">{t.name}</h4>
                            <p className="text-sm text-gray-600">Parent</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>

);

export default Testimonials;
