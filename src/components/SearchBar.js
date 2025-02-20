import React, { useState, useRef, useEffect } from 'react';
import '../styles/searchBar.css';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("All Cities"); 
    const dropdownRef = useRef(null);

    const toggleDropdown = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setIsOpen(false); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div className="search-container">
            <div className="container">
                <div className="search-bar">
                    <div className="dropdowns" ref={dropdownRef}>
                        <button
                            className="btn btn-light dropdown-toggle search-dropdown"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            <i className="fa-solid fa-location-dot"></i> {selectedCity} {/* Hiển thị giá trị đã chọn */}
                        </button>
                        {isOpen && (
                            <>
                                <div className="overlay" onClick={toggleDropdown}></div>
                                <ul className="dropdowns-menu search-dropdown-menu">
                                    {["All Cities", "Ha Noi", "Ho Chi Minh", "Da Nang", "Others"].map((city, index) => (
                                        <li key={index}>
                                            <a 
                                                className="dropdowns-item search-dropdown-item text-dark" 
                                                href="#" 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSelectCity(city);
                                                }}
                                            >
                                                {city}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Enter Keyword skill (Java, iOs...), job title, company..."
                    />
                    <button className="btn btn-danger search-btn">
                        <i className="fa-solid fa-search"></i> Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
