import React from 'react';

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <div className="filters">
                <button className="btn filter-btn">Level <i className="fa-solid fa-chevron-down"></i></button>
                <button className="btn filter-btn">Working Model <i className="fa-solid fa-chevron-down"></i></button>
                <button className="btn filter-btn">Salary <i className="fa-solid fa-chevron-down"></i></button>
                <button className="btn filter-btn">Industry <i className="fa-solid fa-chevron-down"></i></button>
            </div>
            <button className="btn btn-light filter-control">
                <i className="fa-solid fa-filter"></i> Filter
            </button>
        </div>
    );
};

export default FilterBar;