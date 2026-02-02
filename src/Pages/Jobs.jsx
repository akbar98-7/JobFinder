import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Job.css'

const Jobs = () => {

  const locationState = useLocation();

  // Check if the user arrived here from a search
  const initialKeyword = locationState.state?.searchKeyword || "";
  const initialLoc = locationState.state?.searchLocation || "";

  // Set the  filter states to these initial values

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Filter States
  const [search, setSearch] = useState(initialKeyword);
  const [location, setLocation] = useState(initialLoc);
  const [nature, setNature] = useState("All");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(data);
    setFilteredJobs(data);
  }, []);

  // Filter Logic
  useEffect(() => {
    let tempJobs = jobs.filter(job => {
      const matchesSearch = job.job_title.toLowerCase().includes(search.toLowerCase()) ||
        job.job_description.toLowerCase().includes(search.toLowerCase());
      const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
      const matchesNature = nature === "All" || job.job_nature === nature;

      return matchesSearch && matchesLocation && matchesNature;
    });
    setFilteredJobs(tempJobs.slice(0, 10));
  }, [search, location, nature, jobs]);



  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {/* SIDEBAR FILTERS */}
        <div className="col-md-3">
          <div className="card p-3 shadow-sm border-0">
            <h5 className="fw-bold mb-3">Filter Jobs</h5>

            <label className="small fw-bold">Job Nature</label>
            <select className="form-select mb-3" onChange={(e) => setNature(e.target.value)}>
              <option value="All">All Nature</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
              <option value="Contract">Contract</option>
            </select>

            <label className="small fw-bold">Search Keywords</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="e.g. Designer"
              onChange={(e) => setSearch(e.target.value)}
            />

            <label className="small fw-bold">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. New York"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        {/* JOB LISTINGS */}
        <div className=" col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold">{filteredJobs.length} Jobs Found</h4>
          </div>

          {filteredJobs.map(job => (
            <div key={job.job_id} className=" job card mb-3 p-3 shadow-sm border-0 job-card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="me-3" style={{ width: '80px', height: '80px' }}>
                    <img
                      src={job.company_logo}
                      alt={job.company}
                      className="img-fluid rounded"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/80'; }} // Fallback if image is missing
                    />
                  </div>

                  <div>
                    <h5 className="mb-1 fw-bold">{job.job_title}</h5>
                    <p className="text-muted small mb-0">
                      <span className="me-3">{job.company}</span>
                      <i className="bi bi-geo-alt me-1"></i> {job.location}
                    </p>
                  </div>
                </div>
                <div className="text-end">
                  <span className="badge bg-light text-primary border border-primary mb-2 d-block">
                    {job.job_nature}
                  </span>
                  <Link to={`/job/${job.job_id}`} className="btn btn-sm btn-outline-pink">View Details</Link>
                </div>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center mt-5">
              <p className="text-muted">No jobs match your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default Jobs
