import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [menuData, setMenuData] = useState([]);
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch('https://67a979706e9548e44fc3b713.mockapi.io/api/menu');
                const data = await response.json();
                setMenuData(data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData();
    }, []);

    const getColumnCount = (submenu) => {
        if (!submenu) return 1;
        const itemCount = submenu.length;
        return Math.ceil(itemCount / 8);
    };

    const renderMenu = (items) => {
        return items.map((item, index) => {
            if (typeof item === 'string') {
                return <li key={index}><a className="dropdown-item" href="#">{item}</a></li>;
            } else {
                return (
                    <li key={index} className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">{item.title}</a>
                        {item.subItems && (
                            <ul className="dropdown-menu">
                                {renderMenu(item.subItems)}
                            </ul>
                        )}
                    </li>
                );
            }
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt="Logo ITviec" height="40" />
                </a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Các mục bên trái */}
                    <ul className="navbar-nav me-auto left-menu">
                        {menuData.map((menu, index) => (
                            <li 
                                key={index} 
                                className="dropdown"
                                onMouseEnter={() => setActiveMenuIndex(index)}
                                onMouseLeave={() => {
                                    setActiveMenuIndex(null);
                                    setActiveSubmenuIndex(null);
                                }}
                            >
                                <a className={`nav-link dropdown-toggle ${activeMenuIndex === index ? "selected" : ""}`} href="/" role="button">
                                    {menu.title}
                                    {menu.subItems && Array.isArray(menu.subItems) && menu.subItems.length > 0 && (
                                        <span className="submenu-icon">
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                    )}
                                </a>
                                {activeMenuIndex === index && menu.subItems.length > 0 && (
                                    <ul className={`dropdown-menu ${activeSubmenuIndex !== null ? "active" : ""}`}>
                                        <div className="dropdown-left">
                                            {menu.subItems.map((sub, subIndex) => (
                                                <li 
                                                    key={subIndex} 
                                                    className={`dropdown-item ${activeSubmenuIndex === subIndex ? "active" : ""}`}
                                                    onMouseEnter={() => setActiveSubmenuIndex(subIndex)}
                                                >
                                                    {sub.title}
                                                    {sub.subItems && Array.isArray(sub.subItems) && sub.subItems.length > 0 && (
                                                        <span className="submenu-icon">
                                                            <i className="fas fa-chevron-right"></i>
                                                        </span>
                                                    )}
                                                </li>
                                            ))}
                                        </div>

                                        {activeSubmenuIndex !== null && 
                                            menu.subItems[activeSubmenuIndex]?.subItems &&
                                            Array.isArray(menu.subItems[activeSubmenuIndex].subItems) && (
                                                <div 
                                                    className="dropdown-right"
                                                    data-columns={getColumnCount(menu.subItems[activeSubmenuIndex].subItems)}
                                                >
                                                    {menu.subItems[activeSubmenuIndex].subItems.map((item, itemIndex) => (
                                                        <li key={itemIndex}>{item}</li>
                                                    ))}
                                                    {menu.subItems[activeSubmenuIndex].subItems.length > 8 && (
                                                        <li className="view-all">
                                                            <a href="/" className="view-all-link">View all</a>
                                                        </li>
                                                    )}
                                                </div>
                                            )}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Các mục bên phải */}
                    <ul className="navbar-nav right-menu">
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