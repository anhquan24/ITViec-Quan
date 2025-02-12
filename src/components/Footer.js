import React from 'react';
import '../styles/footer.css';
const Footer = () => {
    return (
        <div class="footer-background">
        <nav aria-label="breadcrumb" class="breadcrumb-container">
            <div class="container main-container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">Home</li>
                    <li class="breadcrumb-item active" aria-current="page">All IT jobs</li>
                </ol>
            </div>
        </nav>
    {/* Footer */}
        <footer className="footer mt-auto py-4 bg-dark text-white">
            <div className="container main-container">
                <div className="row d-flex flex-wrap justify-content-between">
                    <div className="col-md-2 col-sm-6">
                        <div className="footer-logo">
                            <img src="logo.png" alt="ITViec" className="img-fluid" />
                            <p className="footer-slogan">Ít nhưng mà chất</p>
                        </div>
                        <div className="social-icons">
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5>About Us</h5>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">AI Match Service</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">All Jobs</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5>Campaign</h5>
                        <ul className="footer-links">
                            <li><a href="#">IT Story</a></li>
                            <li><a href="#">Writing Contest</a></li>
                            <li><a href="#">Featured IT Jobs</a></li>
                            <li><a href="#">Annual Survey</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5>Terms & Conditions</h5>
                        <ul className="footer-links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Operating Regulation</a></li>
                            <li><a href="#">Complaint Handling</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Want to post a job? Contact us at:</h5>
                        <ul className="footer-contact">
                            <li><i className="fa-solid fa-phone"></i> Ho Chi Minh: (+84) 977 460 519</li>
                            <li><i className="fa-solid fa-phone"></i> Ha Noi: (+84) 983 131 351</li>
                            <li><i className="fa-solid fa-envelope"></i> Email: love@itviec.com</li>
                            <li><i className="fa-solid fa-paper-plane"></i> Submit contact information</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center pt-3">
                <p>Copyright © IT VIEC JSC | Tax code: 0312192258</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;