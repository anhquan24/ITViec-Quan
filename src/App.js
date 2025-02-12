import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import HighlightedEmployer from './components/HighlightedEmployer';
import JobSection from './components/JobSection';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            
    <div class="banner-background"></div>

<div class="background"></div>
            <SearchBar />
            <div className="container main-container">
            <HighlightedEmployer />
            <JobSection />
            <FilterBar />
            </div>
            <Footer />
        </div>
    );
};

export default App;