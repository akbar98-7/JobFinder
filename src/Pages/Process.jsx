import React from 'react'

const Process = () => {
  return (
    <div>
      <div className="container-fluid py-5 bg-success bg-gradient" >
        <div className="container ">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#003366" }}>Apply Process</h2>
            <h1 className="text-white pt-3" style={{ color: "#e9edf0" }}>How It Works.</h1>
          </div>
          <div className="row ">
            {/* Step 1 */}
            <div className="col-md-4 text-center mb-4 ">
              <div className="p-4 bg-white rounded shadow-sm h-100 ">
                <div className="display-4 text-pink mb-3"><i className="bi bi-search"></i></div>
                <h4 className="fw-bold">1. Search a Job</h4>
                <p className="small text-muted">Browse through thousands of available listings in your niche.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <div className="display-4 text-pink mb-3"><i className="bi bi-file-earmark-text"></i></div>
                <h4 className="fw-bold">2. Apply for Job</h4>
                <p className="small text-muted">Submit your resume and portfolio directly to the hiring team.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="col-md-4 text-center mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <div className="display-4 text-pink mb-3"><i className="bi bi-briefcase"></i></div>
                <h4 className="fw-bold">3. Get Your Job</h4>
                <p className="small text-muted">Join the company and start your professional journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
