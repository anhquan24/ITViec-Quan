import React, { useState } from 'react';
import '../styles/filterBar.css';
const FilterBar = () => {
    const [opendrop, setOpendrop] = useState(null);
    const [show, setShow] = useState(false);

    const level = [
        { id: 1, name: 'Fresher' },
        { id: 2, name: 'Junior' },
        { id: 3, name: 'Senior' },
        { id: 4, name: 'Manager' }
    ];

    const models = [
        { id: 1, name: 'At office' },
        { id: 2, name: 'Remote' },
        { id: 3, name: 'Hybrid' }
    ];

    const industry = [
        { id: 1, name: 'Consumer Goods' },
        { id: 2, name: 'E-commerce' },
        { id: 3, name: 'Education and Training' },
        { id: 4, name: 'Banking' },
        { id: 5, name: 'Food & Beverage' },
        { id: 6, name: 'Game' },
        { id: 7, name: 'Government' },
        { id: 8, name: 'IT Hardware and Computing' },
        { id: 9, name: 'Non-Profit and Social Services' },
        { id: 10, name: 'Manufacturing and Engineering' },
        { id: 11, name: 'Media, Advertising and Entertainment' },
        { id: 12, name: 'Environment' },
        { id: 13, name: 'Pharmaceuticals' },
        { id: 14, name: 'Real Estate, Property and Construction' },
        { id: 15, name: 'Retail and Wholesale' },
        { id: 16, name: 'IT Services and IT Consulting' },
        { id: 17, name: 'Telecommunication' },
        { id: 18, name: 'Tourism & Hospitality Services' },
        { id: 19, name: 'Transportation, Logistics and Warehouse' },
        { id: 20, name: 'Cyber Security' },
        { id: 21, name: 'Trading and Commercial' },
        { id: 22, name: 'Network and Infrastructure' },
        { id: 23, name: 'Software Development Outsourcing' },
        { id: 24, name: 'Software Products and Web Services' },
        { id: 25, name: 'Agriculture' },
        { id: 26, name: 'Sports and Fitness' },
        { id: 27, name: 'Apparel and Fashion' },
        { id: 28, name: 'Creative and Design' },
        { id: 29, name: 'Staffing and Recruiting' },
        { id: 30, name: 'Publishing and Printing' },
        { id: 31, name: 'Facility Management' },
        { id: 32, name: 'AI, Blockchain and Deep Tech Services' },
        { id: 33, name: 'Research Services' },
        { id: 34, name: 'Financial Services' },
        { id: 35, name: 'Healthcare' },
        { id: 36, name: 'Materials and Mining' },
        { id: 37, name: 'Utilities' },
        { id: 38, name: 'Professional Services' }
    ];
    const companyType=[ 
        { id: 1, name: 'IT Outsourcing' },
        { id: 2, name: 'IT Product' },
        { id: 3, name: 'Headhunt' },
        { id: 4, name: 'IT Service and IT Consulting' },
        { id: 5, name: 'Non-IT' },

    ]
    const [minSalary, setMinSalary] = useState(500);
    const [maxSalary, setMaxSalary] = useState(10000);
    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        if (value < maxSalary - 100) setMinSalary(value);
    };

    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > minSalary + 100) setMaxSalary(value);
    };
    
    const toggledrop = (dropName) => {
        setOpendrop(opendrop === dropName ? null : dropName);
    };

    


    return (
        <div className="filter-bar">
            <div className="filters">
                <div className="filter-item">
                    <button className="btn filter-btn" onClick={() => toggledrop("level")}>
                        Level <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {opendrop === "level" && (
                        <div className="drop-level">
                            {level.map(item => (
                                <a key={item.id} href="#" className="drop-item">
                                    <input type='checkbox' name='level' className="checkbox-level me-2"></input>{item.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="filter-item">
                    <button className="btn filter-btn" onClick={() => toggledrop("models")}>
                        Working Model <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {opendrop === "models" && (
                        <div className="drop-working-models">
                            {models.map(item => (
                                <a key={item.id} href="#" className="drop-item">
                                    <input type='checkbox' name='level' className="checkbox-level me-2"></input>{item.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="filter-item">
                    <button className="btn filter-btn" onClick={() => toggledrop("salary")}>
                        Salary <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {opendrop === "salary" && (
                        <div className="drop-salary d-flex flex-column">
                            <p className='fw-bold mb-0 text-left'>
                                {minSalary.toLocaleString()}$ - {maxSalary.toLocaleString()}$
                            </p>
                            <div className="position-relative mt-2">
                                <input
                                    type="range"
                                    min="500"
                                    max="10000"
                                    step="500"
                                    value={minSalary}
                                    onChange={handleMinChange}
                                    className="range-slider"
                                />
                                <input
                                    type="range"
                                    min="500"
                                    max="10000"
                                    step="500"
                                    value={maxSalary}
                                    onChange={handleMaxChange}
                                    className="range-slider"
                                />
                            </div>
                            <button type='submit' className='btn-salary mt-3'>Apply</button>
                        </div>
                    )}
                </div>
                <div className="filter-item">
                    <button className="btn filter-btn" onClick={() => toggledrop("industry")}>
                        Industry <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {opendrop === "industry" && (
                        <div className="drop-industry">
                            <div className="drop-header">
                                <input type='text' placeholder='Search Industry' className="drop-search" />
                            </div>
                            <div className="drop-list">
                                {industry.map(item => (
                                    <a key={item.id} href="#" className="drop-item">
                                        <input type='checkbox' name='level' className="checkbox-level me-2" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button className=" btn btn-light filter-control" onClick={() => setShow(true)}>
                <i className="fa-solid fa-filter"></i> Filter
            </button>

            {show && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header ms-3">
                                <h5 className="modal-title fw-bold">Filter</h5>
                                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                            </div>
                            <div className="modal-body">
                                {/* Filter content */}
                                <div className="mb-3 ms-3">
                                    <span className='fw-bold'>Level</span>
                                    <div>
                                        {level.map(item => (
                                            <button key={item.id} className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>
                                                {item.name} <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-3 ms-3">
                                    <span className='fw-bold'>Working Model</span>
                                    <div>
                                        {models.map(item => (
                                            <button key={item.id} className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>
                                                {item.name} <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-5 ms-3">
                                    <span className="fw-bold">Salary</span>
                                    <div className="d-flex flex-column mt-3">
                                        <p className='fw-bold mb-0 text-left'>
                                            {minSalary.toLocaleString()}$ - {maxSalary.toLocaleString()}$
                                        </p>
                                        <div className="position-relative mt-2">
                                            <input
                                                type="range"
                                                min="500"
                                                max="10000"
                                                step="500"
                                                value={minSalary}
                                                onChange={handleMinChange}
                                                className="range-slider"
                                            />
                                            <input
                                                type="range"
                                                min="500"
                                                max="10000"
                                                step="500"
                                                value={maxSalary}
                                                onChange={handleMaxChange}
                                                className="range-slider"
                                            />
                            </div>
                                    </div>
                                    <style>
                                        {`.input-range {
                                            accent-color: green;
                                        }`}
                                    </style>
                                </div>
                                <div className='mb-3 ms-3'>
                                    <span className='fw-bold'>Industry</span>
                                    <div className='filter-industry mt-3'>
                                        <div className="filter-header">
                                            <input type='text' placeholder='Search Industry' className="filter-search" />
                                        </div>
                                        <div className="filter-list">
                                            {industry.map(item => (
                                                <a key={item.id} href="#" className="filter-item">
                                                    <input type='checkbox' name='level' className="checkbox-level me-2" />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 ms-3">
                                    <span className='fw-bold'>Company Type</span>
                                    <div>
                                        {companyType.map((item, index) => (
                                            <React.Fragment key={item.id}>
                                                {index % 3 === 0 && index !== 0 && <br />}
                                                <button className='btn-filter-skill ms-1 m-3 pe-3 py-1 ps-3'>
                                                    {item.name} <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-between mx-4">
                                <button className="btn-reset-filter" onClick={() => setShow(false)}>Reset filter</button>
                                <button className="btn-apply-filter">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {show && <div className="modal-backdrop fade show" onClick={() => setShow(false)}></div>}
        </div>
    );
};

export default FilterBar;