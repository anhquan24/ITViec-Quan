import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/highlightedCompany.css';

const HighlightedCompany = () => {
    const [companyData, setCompanyData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                const response = await axios.get('https://67b5b25e07ba6e59083e0cac.mockapi.io/companyspotlight');
                setCompanyData(response.data[0]); 
                setLoading(false); 
            } catch (err) {
                setError(err.message); 
                setLoading(false); 
            }
        };

        fetchCompanyData();
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }


    if (error) {
        return <div>Error: {error}</div>;
    }

 
    if (!companyData) {
        return <div>No data available</div>;
    }

    return (
        <div className="container-spotlight d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column flex-xl-row align-items-center spotlight">
           
                <div className="img-slide  ">
                    <img src={companyData.imgcompany} alt="Company" width={300} height={200} />
                    <span className="company-spotlight">Company Spotlight</span>
                </div>

            
                <div className="col-md-5">
                    <div className="info-slide">
                        <h5>{companyData.namecompany}</h5>
                        <i className="fa fa-map-marker-alt me-2"></i>
                        <span>{companyData.location}</span>
                        <p>{companyData.description}</p>
                        <a href="#" className="text-decoration-none text-primary">
                            View {companyData.joblist.length} jobs <i className="fas fa-chevron-right ms-1"></i>
                        </a>
                        <div className="logo mt-2 mb-4">
                            <a href="#">
                                <img src={companyData.logocompany} alt="logo" width={100} />
                            </a>
                        </div>
                    </div>
                </div>

         <div className='cross pr-5'></div>
                <div className="col-md-4-pr-3">
                    <div className="job-list">
                        {companyData.joblist.map((job, index) => (
                            <p key={index}>
                                <i className="fa-solid fa-arrow-circle-right text-danger"></i>
                                <span>{job}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightedCompany;