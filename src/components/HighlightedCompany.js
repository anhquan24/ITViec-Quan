import React from 'react';  
import '../styles/highlightedCompany.css';  

const HighlightedCompany = () => {  
    return (  
        <div className="container-spotlight">  
            <div className="d-flex flex-column flex-xl-row align-items-center spotlight">  
                <div className="img-slide position-relative">  
                    <img src="logo_Thoughtworks.jpeg" alt="Company" width={300} height={200} />  
                    <span className="company-spotlight">Company Spotlight</span>  
                </div>  
                <div className="col-md-5">
                <div className="info-slide">  
                    <h5>Thoughtworks Vietnam</h5>  
                    <i className="fa fa-map-marker-alt me-2"></i><span>Ho Chi Minh</span>  
                    <p>A global tech consultancy that integrates strategy, design & engineering to drive digital innovation.</p>  
                    <a href="#" className="text-decoration-none">View 4 jobs <i className="fas fa-chevron-right ms-1"></i></a>  
                    <div className="logo">  
                        <a href="#">  
                            <img src="banner.png" alt="logo" width={100} />  
                        </a>  
                    </div>  
                    
                </div>  </div>
                <div className="col-md-3">
                <div className="job-list">
                        <p>
                            <i className="fa-solid fa-arrow-circle-right text-danger"></i>
                            <span> System Support Engineer (C#/Java/Ruby, DevOps)</span>
                        </p>
                        <p>
                            <i className="fa-solid fa-arrow-circle-right text-danger"></i>
                            <span> Lead Systems Support Engineer (Java, C#, DevOps)</span>
                        </p>
                        <p>
                            <i className="fa-solid fa-arrow-circle-right text-danger"></i>
                            <span> Lead Software Engineer (C#, .NET)</span>
                        </p>
                    </div></div>
                
            </div>  
        </div>  
    );  
};  

export default HighlightedCompany;