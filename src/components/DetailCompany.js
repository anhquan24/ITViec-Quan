import React from 'react';
import '../styles/detailCompany.css';
const DetailCompany = () => {
    return (
        <div className="detail-company">
            <div className="card card-content">
                <div className="card-body">
                    <div className="job-header">
                        <img src="logo_tech.png" alt="ELCA" className="company-logo-in-content" />
                        <div className="job-info">
                            <h3 className="job-title">
                            Security Engineer (Python, SQL)
                                <a href="#" className="external-link"><i className="fa-solid fa-up-right-from-square"></i></a>
                            </h3>
                            <p className="company-name">Techcom Securities</p>
                            <p className="salary"><i className="fa-solid fa-dollar-sign"></i> <a href="#">Sign in to view salary</a></p>
                        </div>
                    </div>
                                    
                    <div className="job-footer">
                        <button className="apply-btn">Apply now</button>
                        <i className="fa-regular fa-heart favorite-icon"></i>
                    </div>

                    <div className="scrollable-section">
                        <p className="job-location">
                            <i className="fa-solid fa-location-dot"></i>  C5 Building Tower, D’Capitale Tower, 119 Tran Duy Hung, Cau Giay, Ha Noi <a href="#" className="external-link"><i className="fa-solid fa-up-right-from-square"></i></a><br /> 
                            <i className="fa-solid fa-building"></i> At office<br />   
                            <i className="fas fa-clock"></i>  9 hours ago
                        </p>
            
                        <div className="skills-job">
                            <div>Skills:</div>
                            <div className="job-tags">
                                <span className="badge-tag text-dark">Security</span>
                                <span className="badge-tag text-dark">Python</span>
                                <span className="badge-tag text-dark">SQL</span>
                            </div>
                        </div>

                        <hr className="dot-hr" />

                        <h3 className="title-top-in-content">Top 3 reasons to join us</h3>
                        <ul className="custom-list-in-content">
                            <li>Chance to grow up in your career path</li>
                            <li>Talented and enthusiastic colleagues.</li>
                            <li>Amazing new tech in Bigdata & AI</li>
                        </ul>  
                        
                        <hr className="dot-hr" />

                        <h3 className="title-top-in-content">Job description</h3>
                        <ul className="custom-list-in-content">
                            <li>Triển khai, vận hành và quản lý các hệ thống bảo mật: SIEM, SOAR, EDR/XDR, IPS/IDS, PAM/PIM, WAF, Antivirus, Vulnerability Management.</li>
                            <li>Giám sát, phát hiện và xử lý sự cố an toàn thông tin trong hệ thống CNTT của tổ chức.</li>
                            <li>Đánh giá và kiểm thử bảo mật (Security Assessment & Penetration Testing) cho hệ thống ứng dụng (Web, Mobile), hệ thống mạng và hệ thống máy chủ.</li>
                            <li>Xây dựng, duy trì và cải tiến hệ thống ISMS (Information Security Management System) theo các tiêu chuẩn quốc tế (ISO 27001, NIST, GDPR, PDPD).</li>
                            <li>Thực hiện kiểm tra tuân thủ về an toàn thông tin đối với các quy trình phát triển phần mềm, quản trị hệ thống và vận hành CNTT.</li>
                            <li>Tham gia điều tra, phân tích nguyên nhân sự cố bảo mật (Digital Forensics & Incident Response) và đề xuất giải pháp khắc phục.</li>
                            <li>Hỗ trợ đào tạo nâng cao nhận thức an toàn thông tin cho nhân viên trong tổ chức.</li>
                            
                        </ul>  

                        <hr className="dot-hr" />

                        <h3 className="title-top-in-content">Your skills and experience</h3>
                        <h4 className="title-top-in-content" style={{ fontSize: 'medium' }}>Trình độ học vấn:</h4> 
                        <ul className="custom-list-in-content">
                            <li>Tốt nghiệp Đại học chính quy các ngành Công nghệ Thông tin, An toàn thông tin, Khoa học máy tính hoặc lĩnh vực liên quan.</li>
                            
                        </ul>

                        <h4 className="title-top-in-content" style={{ fontSize: 'medium' }}>Kinh nghiệm:</h4> 
                        <ul className="custom-list-in-content">
                            <li>Tối thiểu 02 năm kinh nghiệm trong lĩnh vực An toàn thông tin hoặc CNTT với chuyên môn phù hợp.</li>
                            <li>Hiểu biết về các mô hình tấn công bảo mật (MITRE ATT&CK, Cyber Kill Chain) và cách thức phòng chống.</li>
                            <li>Kinh nghiệm thực tế với ít nhất một trong các nhóm công việc sau:</li>
                            <li>Đánh giá & kiểm thử bảo mật (Audit/Pentest): OWASP, Burp Suite, Metasploit, Kali Linux.</li>
                            <li>SOC & Incident Response: SIEM (Splunk, ELK), Threat Hunting, Malware Analysis.</li>
                            <li>Quản lý rủi ro & tuân thủ (GRC): ISO 27001, NIST, GDPR, PDPA</li>
                            <li>Có kỹ năng lập trình Python, NodeJS hoặc Bash scripting phục vụ tự động hóa bảo mật.</li>
                            <li>Hiểu biết về CSDL SQL Server, MySQL hoặc NoSQL.</li>
                        </ul>
                        <h4 className="title-top-in-content" style={{ fontSize: 'medium' }}>Kỹ năng & yêu cầu khác:</h4> 
                        <ul className="custom-list-in-content">
                            <li>Kỹ năng phân tích, xử lý sự cố và tư duy logic tốt..</li>
                            <li>Có khả năng đọc hiểu tài liệu tiếng Anh chuyên ngành; ưu tiên ứng viên có kỹ năng giao tiếp bằng tiếng Anh.</li>
                            <li>Ưu tiên ứng viên có các chứng chỉ bảo mật: CEH, OSCP, CISSP, CISA, Security+.</li>
                           
                        </ul>


                        <hr />
                        <div className="company-card">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h4 className="company-name">Techcom Securities</h4>
                                    <p className="company-description">Providing full financial solutions to our corporate and a new saving experience to customers</p>
                                </div>
                                <a href="#" className="view-company-link">View company <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCompany;