import React, { useState } from 'react';
import '../styles/filterBar.css';

const FilterBar = () => {
    const [opendrop, setOpendrop] = useState(null);
    const [show, setShow] = useState(false);

    const levels = [
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
        
        { id: 4, name: 'Game' },
        { id: 5, name: 'Government' },
        { id: 6, name: 'IT Hardware and Computing' }

    ];

    const toggledrop = (dropName) => {
        setOpendrop(opendrop === dropName ? null : dropName);
    };

    const [salary, setSalary] = useState([500, 10000]);

    const handleChange = (e) => {
        const value = Number(e.target.value);
        setSalary([500, value]);
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
                            {levels.map(item => (
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
                        <div className="drop-salary d-flex justify-content-center flex-column">
                            <p className='mt-2 fw-bold mb-0'>300$ - 10000$</p>
                            <input type='range' className='mb-2' value={salary[1]} onChange={handleChange}></input>
                            <button type='submit' className='py-2 bg-white btn-salary'>Apply</button>
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
            <button className="btn btn-light filter-control" onClick={() => setShow(true)}>
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
                                        {levels.map(item => (
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
                                    <div className="d-flex align-items-center my-3">
                                        <span className="me-3 fw-bold">{salary[0]}$ - {salary[1]}$</span>
                                        <input
                                            type="range"
                                            className="form-range w-75 input-range"
                                            min="500"
                                            max="10000"
                                            value={salary[1]}
                                            onChange={handleChange}
                                        />
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