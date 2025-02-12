import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt="Logo ITviec" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="jobsDropdown" role="button" data-bs-toggle="dropdown" >
                                All Jobs
                            </a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item text-white-50 " href="#">Jobs by Skill</a></li>
                                <li><a className="dropdown-item" href="#">Jobs by Title</a></li>
                                <li><a className="dropdown-item" href="#">Jobs by Company</a></li>
                                <li><a className="dropdown-item" href="#">Jobs by City</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="companiesDropdown" role="button" data-bs-toggle="dropdown">
                                IT Companies
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Vietnam Best IT Companies</a></li>
                                <li><a className="dropdown-item" href="#">Company Reviews</a></li>
                            
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown">
                                Blog
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">IT Salary Report</a></li>
                                <li><a className="dropdown-item" href="#">IT Career</a></li>
                                <li><a className="dropdown-item" href="#">Applying & Career Up</a></li>
                                <li><a className="dropdown-item" href="#">IT Expertise</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#">For Employers</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Sign in/Sign up</a></li>
                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link p-0 px-1" href="#">EN</a>
                            <span className="text-white mx-1">|</span>
                            <a className="nav-link p-0 px-1" href="#">VI</a>
                        </li>
                    </ul>

                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;