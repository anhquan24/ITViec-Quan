import React, { useEffect, useState } from "react";
import '../styles/company.css';
import DetailCompany from './DetailCompany';

const Company = () => {
    const [jobs, setJobs] = useState([]);
    const [selectJob, setSelectJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://67a979706e9548e44fc3b713.mockapi.io/api/jobs'); 
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    const selectedJob = jobs.find((job) => job.id === selectJob);

    return (
        <div className="content-container">
            <div className="jobs-list">
                {jobs.map(job => (
                    <div 
                        className={`job-card ${job.status_hot ? 'job-card-superhot' : 'job-card-hot'} ${selectJob === job.id ? 'selected-job' : ''}`} 
                        key={job.id}
                        onClick={() => setSelectJob(job.id)}
                    >
                        {job.status_hot === true ? (
                            <div className="super-hot">
                                <svg fill="none" height="15" viewBox="0 0 12 15" width="12" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M8.35103 7.22088C8.77945 5.51855 9.97941 4.56322 11.074 4.45661C9.84457 6.98536 12.8712 8.79743 11.1649 11.8192C10.2049 13.5193 8.33941 14.4836 6.25533 14.4997C0.303047 14.5458 -0.829202 8.4487 1.27822 4.29598C0.712659 8.76776 4.77576 8.50349 3.49039 5.62166C2.56746 3.55246 4.57378 0.432578 7.73614 0.50111C5.5579 3.61357 8.78633 4.4127 8.35103 7.22088Z" fillRule="evenodd" fill="#FFDD85"></path>
                                </svg>
                                SUPER HOT
                            </div>
                        ) : (
                            <span className="hot-badge">HOT</span>
                        )}
                        <p className="posted-time">Posted {job.postedTime}</p>

                        <h2 className="job-title">{job.title}</h2>

                        <div className="company">
                            <img alt={`${job.company.name} Logo`} className="border-radius-normal box-shadow-normal" src={job.company.logo} height="48" width="48" />
                            <p className="company-name">{job.company.name}</p>
                        </div>

                        <div className="salary salary-cross">
                        <i className="fa-solid fa-dollar-sign"></i> <span>Sign in to view salary</span>
                        </div>
                        
                        <div className="location">
                        <i className="fa-solid fa-building"></i> {job.workplace} <br></br> <i className="fa-solid fa-location-dot"></i> {job.location}
                        

                        <div className="tags tags-cross">
                            {job.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                        </div>
                       

                        <ul className="benefits ">
                            {job.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="detail-company">
                {selectedJob && <DetailCompany job={selectedJob} />}
            </div>
        </div>
    );
};

export default Company;