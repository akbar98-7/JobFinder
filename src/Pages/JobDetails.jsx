import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const JobDetails = () => {

  const { id } = useParams(); // Gets the J1001, J1002 etc from URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    // 1. Get data from localStorage
    const allJobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // 2. Find the specific job by ID
    const selectedJob = allJobs.find(item => item.job_id === id);
    setJob(selectedJob);
  }, [id]);

  if (!job) return <div className="container mt-5">Loading job details...</div>;


  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {/* LEFT COLUMN: Job Description & Requirements */}
        <div className="col-lg-8">
          <div className="d-flex align-items-center mb-4">
            <img src={job.company_logo} alt={job.company} style={{ width: '200px' }} className="me-3" />
            <div>
              <h2 className="fw-bold">{job.job_title}</h2>
              <p className="text-muted">{job.company} | {job.location}</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold">Job Description</h4>
            <p>{job.job_description}</p>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold">Required Knowledge, Skills, and Abilities</h4>
            <ul>
              {job.required_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold">Education + Experience</h4>
            <ul>
              {job.education_experience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Job Summary Card */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 bg-light">
            <h5 className="fw-bold mb-4">Job Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Published on:</span>
              <span className="text-muted">{job.posted_date}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Vacancy:</span>
              <span className="text-muted">{job.number_of_vacancy}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Job Nature:</span>
              <span className="text-muted">{job.job_nature}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Salary:</span>
              <span className="text-muted">{job.salary}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Deadline:</span>
              <span className="text-muted">{job.application_deadline}</span>
            </div>
            <button className="btn btn-pink w-100 fw-bold py-3 text-white">Apply Now</button>
          </div>

          {/* Company Info */}
          <div className="mt-4 p-2">
            <h5 className="fw-bold">Company Information</h5>
            <p className="small mt-2"><strong>About:</strong> {job.company_info.about}</p>
            <p className="small"><strong>Web:</strong> <a href={job.company_info.website} target="_blank" rel="noreferrer">{job.company_info.website}</a></p>
            <p className="small"><strong>Email:</strong> {job.company_info.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
