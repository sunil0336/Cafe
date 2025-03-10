import React from 'react'
import cup from './coffee-cup.jpg'
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Navbar from './Navbar';
import Menu from './Menu';

function LandingPage() {
    return (
        <div className="bg-amber-50 min-h-screen font-serif">
            <Navbar />

            {/* Hero Section */}
            <section
                id="home"
                className="bg-[url('./wood.jpg')] bg-cover bg-center h-screen flex items-center"
            >
                <div className="container mx-auto text-center text-white" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.8)' }}>
                    <h2 className="text-5xl font-bold mb-4" >Welcome to Woodland Cafe</h2>
                    <p className="text-xl mb-8">Experience nature's comfort in every cup</p>
                    <a
                        href="#menu"
                        className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition duration-300"
                    >
                        View Menu
                    </a>
                </div>
            </section>

            <Menu />    
            
            {/* About Section */}
            <section id="about" className="py-16 bg-amber-50">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src={cup} alt="Cafe Interior" className="rounded-lg shadow-md" />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h2 className="text-4xl font-bold mb-6 text-amber-900">About Woodland Cafe</h2>
                        <p className="text-gray-700 mb-4">
                            Nestled in the heart of the city, Woodland Cafe brings the serenity of nature to your coffee
                            experience. Our rustic ambiance and carefully crafted beverages offer a retreat from the urban
                            hustle.
                        </p>
                        <p className="text-gray-700">
                            We source our beans from sustainable farms and our teas from the finest gardens, ensuring every
                            sip is a journey through nature's best flavors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact & Location Section */}
            <section id="contact" className="py-16 bg-amber-100">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Contact & Location</h2>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="md:w-1/2 md:pl-12">
                            <h3 className="text-2xl font-semibold mb-4 text-amber-800">Contact Information</h3>
                            <ul className="space-y-4 m-10">
                                <li className="flex items-center">
                                    <MapPin className="mr-2 text-amber-700" />
                                    <span>Pune, Maharastra, India</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="mr-2 text-amber-700" />
                                    <span>(+91) 1234567890</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="mr-2 text-amber-700" />
                                    <span>cafe@cafe.com</span>
                                </li>
                                <li className="flex items-center">
                                    <Clock className="mr-2 text-amber-700" />
                                    <span>Mon-Fri: 7am-8pm, Sat-Sun: 8am-9pm</span>
                                </li>
                            </ul>
                        </div>

                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h3 className="text-2xl font-semibold mb-4 text-amber-800">Find Us</h3>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d317.73461911512607!2d73.84215788125887!3d18.526739683788886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740976956927!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#7b241c] text-amber-50 py-5">
                <div className="container mx-auto text-center text-lg">
                    <p>&copy; 2025 Cafe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage