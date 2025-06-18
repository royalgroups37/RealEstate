import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';


const ContactForm = () => {
    return (
        <div className="min-h-screen bg-white tracking-wide">
            <Header />
            <div className="px-6 py-12 max-w-6xl mx-auto">
                <h2 className="text-3xl  text-gray-900 mb-5">Let's Connect</h2>
                <p className="text-gray-600 mb-8 max-w-2xl">
                    We’re excited to connect with you and learn more about your real estate goals. Use the form
                    below to get in touch with Estaten. Whether you’re a prospective client, partner, or simply
                    curious about our services, we’re here to answer your questions and provide the assistance you
                    need.
                </p>

                <form className="bg-white border border-[#1F4B43] rounded-xl p-6 md:p-10 shadow-sm space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">First Name</label>
                            <input
                                type="text"
                                placeholder="Enter First Name"
                                className="w-full border border-[#1F4B43] rounded-md px-6 py-3 outline-none text-gray-500  focus:ring focus:ring-[#1F4B43]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">Last Name</label>
                            <input
                                type="text"
                                placeholder="Enter Last Name"
                                className="w-full border border-[#1F4B43] rounded-md px-4 py-3 outline-none text-gray-500 focus:ring focus:ring-[#1F4B43]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full border border-[#1F4B43] rounded-md px-4 py-3 outline-none text-gray-500 focus:ring focus:ring-[#1F4B43]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">Phone</label>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                className="w-full border border-[#1F4B43] rounded-md px-4 py-3 outline-none text-gray-500 focus:ring focus:ring-[#1F4B43]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">Inquiry Type</label>
                            <select className="w-full border border-[#1F4B43] rounded-md px-4 py-3 outline-none text-gray-500 focus:ring focus:ring-[#1F4B43]">
                                <option>Select Inquiry Type</option>
                                <option>Buy</option>
                                <option>Sell</option>
                                <option>Rent</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">How Did You Hear About Us?</label>
                            <select className="w-full border border-[#1F4B43] rounded-md px-4 py-3 outline-none text-gray-500 focus:ring focus:ring-[#1F4B43]">
                                <option>Select</option>
                                <option>Google</option>
                                <option>Social Media</option>
                                <option>Referral</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">Message</label>
                        <textarea
                            placeholder="Enter your Message here."
                            rows={4}
                            className="w-full border border-[#1F4B43] rounded-md px-4 py-3 outline-none text-gray-500 focus:ring focus:ring-[#1F4B43]"
                        ></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I agree with Terms of Use and Privacy Policy
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#1F4B43] text-white px-6 py-3 rounded-md hover:bg-[#163d37] transition"
                        >
                            Send Your Message
                        </button>
                    </div>

                </form>
            </div>
            <Footer />

        </div>
    );
};

export default ContactForm;
