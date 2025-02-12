import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/searchBar.css';
const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="container">
                <div className="search-bar">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle search-dropdown" type="button" data-bs-toggle="dropdown">
                            <i className="fa-solid fa-location-dot"></i> All Cities
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">All Cities</a></li>
                            <li><a className="dropdown-item" href="#">Ha Noi</a></li>
                            <li><a className="dropdown-item" href="#">Ho Chi Minh</a></li>
                            <li><a className="dropdown-item" href="#">Da Nang</a></li>
                            <li><a className="dropdown-item" href="#">Others</a></li>
                            
                        </ul>
                    </div>
                    <input type="text" className="form-control search-input" placeholder="Enter Keyword skill (Java, iOs...), job title, company..." />
                    <button className="btn btn-danger search-btn">
                        <i className="fa-solid fa-search"></i> Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;