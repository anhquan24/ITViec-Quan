import React from 'react';

const HighlightedEmployer = () => {
    return (
        
        <div className="highlighted-employer">
            <div className="row">
                <div className="col-md-4">
                    <div className="highlighted-image">
                        <img src="banner.png" alt="Nhà Tuyển Dụng Nổi Bật" className="img-fluid" />
                        <span className="highlighted-label">Company Spotlight</span>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="highlighted-info">
                        <h4>Thoughtworks Vietnam</h4>
                        <p><i className="fa-solid fa-location-dot"></i> Ho Chi Minh</p>
                        <p className="highlighted-description">
                            A global tech consultancy that integrates strategy, design & engineering to drive digital innovation.
                        </p>
                        <a href="#" className="highlighted-link">View 4 jobs {'>'}</a>
                    </div>
                </div>
                <div className="col-md-3">
                    <ul className="job-list">
                        <li><i className="fa-solid fa-arrow-circle-right text-danger"></i> System Support Engineer (C#/Java/Ruby, DevOps)</li>
                        <li><i className="fa-solid fa-arrow-circle-right text-danger"></i> Lead Systems Support Engineer (Java, C#, DevOps)</li>
                        <li><i className="fa-solid fa-arrow-circle-right text-danger"></i> Lead Software Engineer (C#, .NET)</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default HighlightedEmployer;