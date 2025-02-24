import React from 'react';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import HighlightedCompany from './components/HighlightedCompany';
import JobSection from './components/JobSection';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';
import Company from './components/Company';
import DetailCompany from './components/DetailCompany';
import Pagination from './components/Pagination';

import './styles/background.css';
// import './styles/navbar.css';





const App = () => {
    return (
        <div >
            <Navbar />
            <div className="banner-background"></div>
            <div className="background"></div>
            <SearchBar />
            <div className="container main-container">
                <HighlightedCompany />
                <JobSection />
                <FilterBar />
                <div className="content-container">
                    <Company />
                    <DetailCompany />
                </div>
               
                <Pagination />
            </div>
            <Footer />
        </div>
    );
};

export default App;