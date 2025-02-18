import React, { useState, useRef, useEffect } from 'react';
import '../styles/searchBar.css';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            // Khóa cuộn toàn bộ trang
            document.body.style.overflow = 'hidden';
            
        } else {
            // Khôi phục cuộn
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
                            <i className="fa-solid fa-location-dot"></i> All Cities
                        </button>
                        {isOpen && (
                            <>
                              
                                <div className="overlay" onClick={toggleDropdown}></div>
                                <ul className="dropdowns-menu search-dropdown-menu">
                                    <li><a className="dropdowns-item search-dropdown-item text-dark " href="#">All Cities</a></li>
                                    <li><a className="dropdowns-item search-dropdown-item text-dark" href="#">Ha Noi</a></li>
                                    <li><a className="dropdowns-item search-dropdown-item text-dark" href="#">Ho Chi Minh</a></li>
                                    <li><a className="dropdowns-item search-dropdown-item text-dark" href="#">Da Nang</a></li>
                                    <li><a className="dropdowns-item search-dropdown-item text-dark" href="#">Others</a></li>
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