import React from 'react';
import '../styles/detailCompany.css';

const DetailCompany = ({ job }) => {
    if (!job || !job.company) {
        return null;
    }
    return (
        <div className="detail-company">
            <div className="card card-content">
                <div className="card-body">
                    <div className="job-header">
                        <img src={job.company.logo} alt={job.company.logo} className="company-logo-in-content" />
                        <div className="job-info">
                            <h3 className="job-title">
                                {job.title}
                                <a href="#" className="external-link">  <i className="fa-solid fa-up-right-from-square"></i></a>
                            </h3>
                            <p className="company-name">{job.company.name}</p>
                            <p className="salary"><i className="fa-solid fa-dollar-sign"></i> <a href="#">Sign in to view salary</a></p>
                        </div>
                    </div>
                                    
                    <div className="job-footer">
                        <button className="apply-btn">Apply now</button>
                        <i className="fa-regular fa-heart favorite-icon"></i>
                    </div>

                    <div className="scrollable-section">
                        <p className="job-location">
                            <i className="fa-solid fa-location-dot"></i> {job.location} <a href="#" className="external-link"><i className="fa-solid fa-up-right-from-square"></i></a><br /> 
                            <i className="fa-solid fa-building"></i> {job.workplace}<br />   
                            <i className="fas fa-clock"></i> {job.postedTime}
                        </p>
            
                        <div className="skills-job">
                            <div>Skills:</div>
                            <div className="job-tags">
                                {job.tags.map((tag, index) => (
                                    <span key={index} className="badge-tag text-dark">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <hr className="dot-hr" />

                        <h3 className="title-top-in-content">Top 3 reasons to join us</h3>
                        <ul className="custom-list-in-content">
                            {job.reasons.map((reason, index) => (
                                <li key={index}>{reason}</li>
                            ))}
                        </ul>  
                        
                        <hr className="dot-hr" />

                        <h3 className="title-top-in-content">Job description</h3>
                        <ul className="custom-list-in-content">
                            {job.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>  

                        <hr className="dot-hr" />

                        <h3 className="title-top-in-content">Your skills and experience</h3>
                        <h4 className="title-top-in-content" style={{ fontSize: 'medium' }}>Trình độ học vấn:</h4> 
                        <ul className="custom-list-in-content">
                            {job.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>

                        <hr />
                        <div className="company-card">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h4 className="company-name">{job.company.name}</h4>
                                    <p className="company-description">{job.company.description}</p>
                                </div>
                                <a href="#" className="view-company-link">View company <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                            <div className="company-card">
                          
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <p className="company-label">Company type</p>
                                    <p className="company-value">IT Product</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="company-label">Company industry</p>
                                    <p className="company-value">Financial Services</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="company-label">Company size</p>
                                    <p className="company-value">151-300</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <p className="company-label">Country</p>
                                    <p className="company-value"><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VietNam Flag" className="country-flag" /> Vietnam</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="company-label">Working days</p>
                                    <p className="company-value">Monday - Saturday</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="company-label">Overtime policy</p>
                                    <p className="company-value">No OT</p>
                                </div>
                            </div>

                        </div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCompany;