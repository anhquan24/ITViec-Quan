import React, { useEffect, useState } from "react";
import "../styles/jobSection.css";

const JobSection = () => {
    const [jobCount, setJobCount] = useState(0);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("https://67a979706e9548e44fc3b713.mockapi.io/api/jobs");
                const data = await response.json();
                setJobCount(data.length); 
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return <h2 className="job-section-title">{jobCount} IT jobs in Vietnam</h2>;
};

export default JobSection;
