import React from 'react';
import AppointmentBanner from '../components/Home/AppointmentBanner/AppointmentBanner';
import Blogs from '../components/Home/Blogs/Blogs';
import Contact from '../components/Home/Contact/Contact';
import Doctors from '../components/Home/Doctors/Doctors';
import FeaturedService from '../components/Home/FeaturedService/FeaturedService';
import Header from '../components/Home/Header/Header';
import Services from '../components/Home/Services/Services';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import Footer from '../components/Shared/Footer/Footer';


const Home = () => {
    return (
        <section>
            <Header />
            <Services />
            <FeaturedService />
            <AppointmentBanner />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
            <Footer />
        </section>
    );
};

export default Home;