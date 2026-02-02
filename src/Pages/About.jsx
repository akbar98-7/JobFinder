import React from 'react'

const About = () => {
  return (
    <div>
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: '#003366',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="text-center">
          <h1 className="display-3 fw-bold text-white mt-5">About Us</h1>

        </div>

      </div>

      <div className="container my-5 py-5">

        <div className="row justify-content-center">

          <div className="col-md-8 text-center">

            <h2 className="fw-bold mb-4">Our Mission</h2>
            <p className="lead ">
              We are dedicated to connecting the world's most talented professionals with
              the most exciting startup opportunities.
            </p>

          </div>

        </div>

        <div className="container py-5 mt-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">

            </div>
            <div className="col-lg-6 ps-lg-5">
              <h6 className="text-pink fw-bold text-uppercase">What We Do</h6>
              <h2 className="display-5 fw-bold mb-4" style={{ color: "#003366" }}>
                2k+ Talented People are getting Jobs
              </h2>

            </div>

            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-pink me-2"></i> Design and build high-quality web apps.</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-pink me-2"></i> Connect top talent with global startups.</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-pink me-2"></i> Provide 24/7 support for career growth.</li>
            </ul>


            <div className="container py-5 text-center">
              <div className="row">
                <div className="col-md-3 col-6 mb-4">
                  <h2 className="fw-bold" style={{ color: "#e71ac8" }}>5k+</h2>
                  <p className="text-muted">Total Jobs</p>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <h2 className="fw-bold " style={{ color: "#e71ac8" }}>2k+</h2>
                  <p className="text-muted">Startups</p>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <h2 className="fw-bold " style={{ color: "#e71ac8" }}>1k+</h2>
                  <p className="text-muted">Talents</p>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <h2 className="fw-bold " style={{ color: "#e71ac8" }}>500+</h2>
                  <p className="text-muted">Reviews</p>
                </div>
              </div>
            </div>

          </div>

          <div className="container-fluid py-5 bg-light">
            <div className="container">
              <div className="text-center mb-5">
                <h2 className="fw-bold" style={{ color: "#003366" }}>How It Works</h2>
                <p className="text-muted">Follow these simple steps to land your dream job.</p>
              </div>
              <div className="row">
                {/* Step 1 */}
                <div className="col-md-4 text-center mb-4">
                  <div className="p-4 bg-white rounded shadow-sm h-100">
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

      </div>

    </div>

  )
}

export default About
