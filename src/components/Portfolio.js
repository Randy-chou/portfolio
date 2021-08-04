import React, { useState } from 'react';
import Header from './Header';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../styles/Portfolio.css';

function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className="min-vh-100 d-flex flex-column justify-content-between" id="mainBody">
            <div>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
            <Footer />
        </main>
    );
}

export default Portfolio;