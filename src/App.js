import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import JobDetails from './Pages/JobDetails';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Components/Header';


const jobData = [

  {
    job_id: "J1001",
    job_title: "UI/UX Designer",
    company: "Colorlib",
    company_logo: "/Assets/logo.jpg",
    location: "New York, NY, USA",
    salary: "$7,800 yearly",
    posted_date: "2025-01-05",
    number_of_vacancy: 2,
    job_nature: "Full Time",
    job_description: "Design intuitive and engaging user interfaces for web and mobile applications.",
    required_skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    education_experience: ["3+ years UI/UX experience", "Portfolio required"],
    application_deadline: "2025-02-15",
    company_info: {
      website: "https://colorlib.com",
      email: "careers@colorlib.com",
      about: "Creative digital design company.",
      description: "Colorlib creates high-quality UI templates and digital products for developers worldwide."
    }
  },

  {
    job_id: "J1002",
    job_title: "Front-End Developer",
    company: "TechGlobal",
    company_logo: "/Assets/logo1.jpg",
    location: "London, UK",
    salary: "$5,200 yearly",
    posted_date: "2025-01-07",
    number_of_vacancy: 3,
    job_nature: "Full Time",
    job_description: "Build responsive user interfaces and integrate APIs.",
    required_skills: ["HTML", "CSS", "JavaScript", "React"],
    education_experience: ["2+ years front-end development"],
    application_deadline: "2025-02-20",
    company_info: {
      website: "https://techglobal.io",
      email: "hr@techglobal.io",
      about: "Global software company.",
      description: "TechGlobal develops scalable web platforms for startups and enterprises."
    }
  },

  {
    job_id: "J1003",
    job_title: "Backend Developer",
    company: "CodeNest",
    company_logo: "/Assets/logo2.jpg",
    location: "Berlin, Germany",
    salary: "$6,500 yearly",
    posted_date: "2025-01-10",
    number_of_vacancy: 1,
    job_nature: "Full Time",
    job_description: "Develop APIs and manage server-side logic.",
    required_skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    education_experience: ["3+ years backend development"],
    application_deadline: "2025-02-25",
    company_info: {
      website: "https://codenest.dev",
      email: "jobs@codenest.dev",
      about: "Backend-focused dev studio.",
      description: "CodeNest specializes in backend systems, APIs, and cloud-native applications."
    }
  },

  {
    job_id: "J1004",
    job_title: "Laravel Developer",
    company: "WebCraft",
    company_logo: "/Assets/logo.jpg",
    location: "Dubai, UAE",
    salary: "$4,800 yearly",
    posted_date: "2025-01-12",
    number_of_vacancy: 2,
    job_nature: "Full Time",
    job_description: "Develop and maintain Laravel-based web applications.",
    required_skills: ["PHP", "Laravel", "MySQL", "REST APIs"],
    education_experience: ["2+ years Laravel experience"],
    application_deadline: "2025-03-01",
    company_info: {
      website: "https://webcraft.ae",
      email: "hr@webcraft.ae",
      about: "Web development agency.",
      description: "WebCraft delivers custom Laravel and PHP solutions for businesses."
    }
  },
  {
    job_id: "J1005",
    job_title: "Mobile App Developer",
    company: "Appify",
    company_logo: "/Assets/logo1.jpg",
    location: "Toronto, Canada",
    salary: "$6,000 yearly",
    posted_date: "2025-01-15",
    number_of_vacancy: 1,
    job_nature: "Contract",
    job_description: "Develop cross-platform mobile applications.",
    required_skills: ["Flutter", "Dart", "Firebase"],
    education_experience: ["Experience with iOS and Android apps"],
    application_deadline: "2025-03-05",
    company_info: {
      website: "https://appify.co",
      email: "careers@appify.co",
      about: "Mobile-first startup.",
      description: "Appify builds fast and scalable mobile apps for modern businesses."
    }
  },
  {
    job_id: "J1006",
    job_title: "DevOps Engineer",
    company: "CloudNine",
    company_logo: "/Assets/logo2.jpg",
    location: "Remote",
    salary: "$8,500 yearly",
    posted_date: "2025-01-18",
    number_of_vacancy: 1,
    job_nature: "Remote",
    job_description: "Maintain CI/CD pipelines and cloud infrastructure.",
    required_skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    education_experience: ["3+ years DevOps experience"],
    application_deadline: "2025-03-10",
    company_info: {
      website: "https://cloudnine.io",
      email: "jobs@cloudnine.io",
      about: "Cloud solutions provider.",
      description: "CloudNine helps companies scale infrastructure securely and efficiently."
    }
  },
  {
    job_id: "J1007",
    job_title: "Data Analyst",
    company: "InsightX",
    company_logo: "/Assets/logo.jpg",
    location: "Sydney, Australia",
    salary: "$5,900 yearly",
    posted_date: "2025-01-20",
    number_of_vacancy: 2,
    job_nature: "Full Time",
    job_description: "Analyze data and generate business insights.",
    required_skills: ["SQL", "Python", "Power BI", "Excel"],
    education_experience: ["Degree in Data Science or related field"],
    application_deadline: "2025-03-12",
    company_info: {
      website: "https://insightx.ai",
      email: "hr@insightx.ai",
      about: "Data analytics firm.",
      description: "InsightX provides actionable data insights for smarter decisions."
    }
  },
  {
    job_id: "J1008",
    job_title: "SEO Specialist",
    company: "RankUp",
    company_logo: "/Assets/logo2.jpg",
    location: "Singapore",
    salary: "$4,200 yearly",
    posted_date: "2025-01-22",
    number_of_vacancy: 1,
    job_nature: "Part Time",
    job_description: "Optimize website rankings and organic traffic.",
    required_skills: ["SEO", "Google Analytics", "Keyword Research"],
    education_experience: ["2+ years SEO experience"],
    application_deadline: "2025-03-15",
    company_info: {
      website: "https://rankup.sg",
      email: "jobs@rankup.sg",
      about: "Digital marketing agency.",
      description: "RankUp helps brands grow through SEO and performance marketing."
    }
  },
  {
    job_id: "J1009",
    job_title: "Project Manager",
    company: "Buildify",
    company_logo: "/Assets/logo1.jpg",
    location: "San Francisco, CA, USA",
    salary: "$9,200 yearly",
    posted_date: "2025-01-25",
    number_of_vacancy: 1,
    job_nature: "Full Time",
    job_description: "Manage software projects and cross-functional teams.",
    required_skills: ["Agile", "Scrum", "JIRA", "Communication"],
    education_experience: ["PMP or Scrum certification preferred"],
    application_deadline: "2025-03-20",
    company_info: {
      website: "https://buildify.com",
      email: "careers@buildify.com",
      about: "Product development company.",
      description: "Buildify creates scalable digital products for startups."
    }
  },
  {
    job_id: "J1010",
    job_title: "QA Engineer",
    company: "TestLab",
    company_logo: "/Assets/logo.jpg",
    location: "Bangalore, India",
    salary: "$4,000 yearly",
    posted_date: "2025-01-28",
    number_of_vacancy: 2,
    job_nature: "Full Time",
    job_description: "Test applications and ensure product quality.",
    required_skills: ["Manual Testing", "Automation", "Selenium"],
    education_experience: ["1–3 years QA experience"],
    application_deadline: "2025-03-25",
    company_info: {
      website: "https://testlab.io",
      email: "hr@testlab.io",
      about: "Quality assurance company.",
      description: "TestLab ensures software quality through modern testing practices."
    }
  }
]

function App() {

  useEffect(() => {
    if (!localStorage.getItem('jobs')) {
      localStorage.setItem('jobs', JSON.stringify(jobData));
    }
  }, []);

  return (

    <>
      <Router>

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job/:id" element={<JobDetails />} />

        </Routes>

      </Router>

      <footer className="bg-dark text-light py-4 mt-auto border-top border-secondary">
        <div className="container">
          <div className="row ">
            {/* Brand/Copyright Section */}
            <div className="col-md-3  text-start mb-4- mb-md-0">
              <h5 className="mb-3 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
                About Us
              </h5>
              <p className="large text-white mb-0">
                Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.
              </p>
            </div>


            <div className="col-md-3  text-start">
              <h5 className="mb-3 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
                Contact Info
              </h5>
              <p className="large text-white mb-2">
                ADDRESS: Your address goes here,
                <br />
                <span className="fw-bold">your demo address. </span>
              </p>

              <br></br>

              <p className="large text-white mb-0">
                <span className="fw-bold">Phone:</span> +012 345 6789
              </p>
              <br></br>

              <p className="large text-white mb-0">
                <span className="fw-bold">Email:</span> <a href="mailto:your_email_address">your_email_address</a>
              </p>
            </div>

            <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
              <h5 className="mb-1 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
                Important Link
              </h5>
              <ul className="list-unstyled mt-3">

                <li className=" fs-5" style={{ lineHeight: '1.6', cursor: 'pointer', hover: { color: "#ff1e6d" } }}>View Project</li>
                <li className="hover-light mt-2 fs-5">Contact Us</li>
                <li className="hover-light mt-2 fs-5">Testimonials</li>
                <li className="hover-light mt-2 fs-5">Properties</li>
                <li className="hover-light mt-2 fs-5">Support</li>

              </ul>
            </div>

            <div className="col-md-3  text-start">
              <h5 className="mb-3 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
                Newsletter
              </h5>
              <p className="large text-white mb-0 fs-5">
                Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.
              </p>

              <div className="input-group mt-4">
                <input type="text" className="form-control" placeholder="Email Address" />
                <button className="btn btn-light" style={{ backgroundColor: "#ff1e6d" }}>Subscribe</button>
              </div>

            </div>

            <hr className="my-4"></hr>

            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0 fs-5">
                  &copy; Copyright ©2026 All rights reserved | This web is made with love by "Akber Mirza"
                </p>
              </div>
            </div>



          </div>
        </div>


        <style>{`
        .hover-light:hover {
          color: #fff !important;
          transition: 0.3s;
        }
        footer {
          background: linear-gradient(180deg, #212529 0%, #1a1d20 100%);
        }
      `}</style>
      </footer>


    </>

  );
}

export default App;
