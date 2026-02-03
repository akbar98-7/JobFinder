import React from 'react'
import jobImg from '../Assets/jobs.jpg'
import { useState } from 'react'; // Add useState
import { useNavigate } from 'react-router-dom'; // Add useNavigate
import Categories from './Categories';
import FeatureJob from './FeatureJob';
import Process from './Process';

const Home = () => {

  const navigate = useNavigate();
                                                                                                                                                                                                                                                                                                                                                                                                                
  // States to capture what the user types
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // This sends the user to /jobs and "carries" the search data with it
    navigate('/jobs', {
      state: {
        searchKeyword: keyword,
        searchLocation: location
      }
    });
  };

  return (

    <>
      <div>
        <div
          className="position-absolute top-50 start-50 translate-middle px-3 w-100 text-center"
          style={{ color: "#003366" }}
        >
          <h1 className="display-1 fw-bold">Find The</h1>
          <span className='display-1 fw-bold'>Most Exciting</span>
          <br></br>                                                                                                                                                                     
          <span className='display-1 fw-bold'>Startup Jobs</span>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-md-9"> {/* Adjusted width to hold the group */}
                <div className="input-group input-group-lg shadow-sm">

                  {/* Keyword Input */}
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Job Title or keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    style={{ minWidth: '200px' }}
                  />

                  {/* Vertical Divider */}
                  <div className="vr my-2" style={{ width: '1px', backgroundColor: '#040405' }}></div>

                  {/* Location Input */}
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Location "
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                  />

                  {/* Search Button */}
                  <button
                    className="btn btn-pink px-5 fw-bold text-white"
                    type="button"
                    onClick={handleSearch}
                    style={{ backgroundColor: '#ff1e6d', border: 'none' }}
                  >
                    Find Job
                  </button>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={jobImg} alt="" width={2100} />

      <Categories />
      <FeatureJob />
      <br />
      <Process />




    </>

  )
}

export default Home
