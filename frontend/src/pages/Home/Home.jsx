import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;