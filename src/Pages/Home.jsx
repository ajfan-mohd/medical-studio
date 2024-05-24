import React from "react";
import "./Home.css";
import logo from "../images/logo.png";

import people from "../images/people-working-call-center.jpg";
import imageone from "../images/attractive-female-doctor-standing-with-documents-hospital.jpg";
import imagetwo from "../images/team-young-specialist-doctors-standing-corridor-hospital.jpg";
import imagethree from "../images/beautiful-asian-doctor-lady-pointing-with-pointer-copy-space-studio-shot-isolated-gray-background-medical-student-general-practitioner.jpg";
import imagefour from "../images/smiling-touching-arms-crossed-room-hospital.jpg";
import imagefive from "../images/portrait-confident-asian-indian-medical-doctor-standing-hospital-building.jpg";
const Home = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-white bg-white w-100">
  <div className="container-fluid">
    <a className="navbar-brand ms-3 me-5" href="#">
      <img
        src={logo}
        alt="MyLogo"
        width="150"
        height="80"
        className="d-inline-block logo align-text-top me-2"
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse"
      id="navbarNav"
    >
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link text-dark m-2" href="">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark m-2" href="#about-us">
            AboutUs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark m-2" href="#Courses">
            Courses
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark m-2" href="#Testimonials">
            Testimonials
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark m-2" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNavAlt"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="btn btn-outline-primary btn-enquiry">
            Enquiry
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 first-text">
              <h1 className="text">Secure Your Admission Now!!</h1>
              <p className="paragraph text-white">
                Need guidance for MBBS admission in India? <br />
                Medical Studio offers expert advice from industry professionals
                for 2024. <br />
                Get personalized assistance for your medical education journey
              </p>
              <button className="btn btn-primary btn-consultation">
                Get Consultation
              </button>
            </div>
            <div className="col-md-6">
              <div className="form-container">
                <form className="form">
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label text-black">
                      Full Name
                    </label>
                    <input type="text" className="form-control" id="fullName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-black">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label text-black">
                      Phone Number
                    </label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="course" className="form-label text-black">
                      Course
                    </label>
                    <select className="form-select" id="course">
                      <option value="">Select Course</option>
                      <option value="mbbs">MBBS</option>
                      <option value="md">MD</option>
                      <option value="ms">MS</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us pt-5" id="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>About us</h1>
              <p className="custom-p-spacing textone">
                Get expert guidance for medical admissions in India or abroad.
                Our counselors assist with college selection, applications,
                exams, and visa procedures. Thousands of students have achieved
                their goals with our support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="specs pt-md-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 order-2 order-md-1">
              <div className="row">
                <div className="col-md-6 col-sm-12 mb-4 para">
                  <ul>
                    <li>
                      <h3 className="second-text pt-5">Expert Guidelines</h3>
                    </li>
                  </ul>
                  <p>
                    Our expert team is here to guide you through medical
                    admissions, from choosing your specialty to navigating
                    applications. Trust us to help you make informed decisions
                    every step of the way.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12 mb-4 para">
                  <ul>
                    <li>
                      <h3 className="second-text pt-5">Personalized Support</h3>
                    </li>
                  </ul>
                  <p>
                    Trust our expert team for personalized support at every
                    step, tailored to your needs and concerns. We're dedicated
                    to ensuring your journey to medical admissions is smooth and
                    successful.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12 mb-4 para">
                  <ul>
                    <li>
                      <h3 className="second-text pt-5">
                        Deep familiarity with Kerala's medical education.
                      </h3>
                    </li>
                  </ul>
                  <p>
                    Our team stays informed on Kerala's medical education
                    landscape, ensuring you receive the latest insights for
                    successful navigation.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12 mb-4 para">
                  <ul>
                    <li>
                      <h3 className="second-text pt-5">Expert Guidelines</h3>
                    </li>
                  </ul>
                  <p>
                    Our individualized support services cater to your unique
                    needs, providing tools, guidance, and mentorship to boost
                    your acceptance odds, especially in Kerala's top medical
                    colleges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 order-1 order-md-2">
              <img
                src={people}
                alt="MyLogo"
                className="d-inline-block align-text-top me-2 imgg img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="courses pt-5" id="Courses">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="courses">Courses We Offer</h2>
            </div>
          </div>
          <div className="row pt-5 justify-content-center">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="card custom-card custom-card-shadow m-3">
                <img
                  src={imageone}
                  className="card-img-top"
                  height={250}
                  alt="MBBS"
                />
                <div className="card-body">
                  <h5 className="card-title">MBBS</h5>
                  <p className="card-text">
                    Passionately pursuing medicine through MBBS studies.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Enquiry
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="card custom-card custom-card-shadow m-3">
                <img
                  src={imagetwo}
                  className="card-img-top"
                  height={250}
                  alt="MD"
                />
                <div className="card-body">
                  <h5 className="card-title">MD</h5>
                  <p className="card-text">
                    Pursuing excellence in medicine through MD studies.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Enquiry
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="card custom-card custom-card-shadow m-3">
                <img
                  src={imagethree}
                  className="card-img-top"
                  height={250}
                  alt="MDS"
                />
                <div className="card-body">
                  <h5 className="card-title">MDS</h5>
                  <p className="card-text">
                    Devoted to mastering dental surgery through MDS studies.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-5 justify-content-center">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="card custom-card custom-card-shadow m-3">
                <img
                  src={imagefour}
                  className="card-img-top"
                  height={250}
                  alt="BDS"
                />
                <div className="card-body">
                  <h5 className="card-title">BDS</h5>
                  <p className="card-text">
                    Committed to mastering dental science through BDS studies.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Enquiry
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="card custom-card custom-card-shadow m-3">
                <img
                  src={imagefive}
                  className="card-img-top"
                  height={250}
                  alt="MDS"
                />
                <div className="card-body">
                  <h5 className="card-title">MDS</h5>
                  <p className="card-text">
                    Dedicated to specialized dental surgery through MDS studies.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Enquiry
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mb-5">
              <div class="form-container mb-5 forms">
                <h1 className="form-title fs-bold">
                  Want to get a consultation? Talk to our experts Now
                </h1>
                <form className="form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="fullName"
                        className="form-label text-black"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label text-black">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="course" className="form-label text-black">
                        Course
                      </label>
                      <select className="form-select" id="course">
                        <option value="">Select Course</option>
                        <option value="mbbs">MBBS</option>
                        <option value="md">MD</option>
                        <option value="ms">MS</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label text-black">
                        Phone Number
                      </label>
                      <input type="tel" className="form-control" id="phone" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service" >
        <div className="container-fluid srvce">
          <h1 className="highlights text-center text-bold pt-5 service-title">
            Our Hightlights
          </h1>
          <section className="service">
            <div className="container-fluid justify-content-center scton">
              <div className="row text-white p-4">
                <div className="col-md-4 mb-4">
                  <div className="service-box p-4">
                    <h4 className="text-dark text-center service-title">
                      17 Years of experience
                    </h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="service-box p-4">
                    <h4 className="text-dark text-center service-title">
                      Well qualified Mentors
                    </h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="service-box p-4">
                    <h4 className="text-dark text-center service-title">
                      Guidance from experts
                    </h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="service-box p-4">
                    <h4 className="text-dark text-center service-title">
                      One to One counselling
                    </h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="service-box p-4">
                    <h4 className="text-dark text-center service-title">
                      Career Exposure from experts
                    </h4>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="service-box p-4">
                    <h4 className="text-dark text-center service-title">
                      24x7 Personalized Assistance
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="overlay"></div>
        </div>
      </section>

      <section class="testimonials container-fluid" id="testimonials">
        <h1 class="test text-black text-center mb-4">Testimonials</h1>
        <div class="row justify-content-center pt-4">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="testimonial">
              <p class="testimonial-quote">
                "Thanks to Medical Studio, I'm on my way to becoming a doctor!
                Their expert guidance and support made the admissions process a
                breeze. Highly recommend!"
              </p>
            
              <p class="testimonial-name">John Zakaria</p>
              <div class="testimonial-stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="testimonial">
              <p class="testimonial-quote">
                "Medical Studio helped me secure admission to my dream medical
                college. Their personalized assistance was invaluable. Thank
                you!"
              </p>
            
              <p class="testimonial-name">Jane Smith</p>
              <div class="testimonial-stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="testimonial">
              <p class="testimonial-quote">
                " Grateful for Medical Studio's support in navigating the
                medical school admissions process. Highly professional and
                reliable. 5 stars!"
              </p>
              <p class="testimonial-name">Maria Sheryk</p>
              <div class="testimonial-stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer" id="contact-us">
  <div class="container-fluid">
    <div class="row">
        <div className="col-lg-1"></div>
      <div class="col-md-3 mb-4 text-left">
        <div class="logo">
          <img src={logo} alt="Company Logo"/>
        </div>
        <p className="para-footer">Get expert guidance for medical admissions in India or abroad. Our counselors assist with college selection, applications, exams, and visa procedures. Thousands of students have achieved their goals with our support.</p>
      </div>
      <div class="col-md-3 mb-4 display  text-left">
        <h5 className="QuickLinks">Quick Links</h5>
        <ul class="list-unstyled">
          <li>
            <a href="#" class="pt-3 links">Home</a>
          </li>
          <li>
            <a href="#" class="pt-3 links">About</a>
          </li>
          <li>
            <a href="#" class="pt-3 links">Services</a>
          </li>
          <li>
            <a href="#" class="pt-3 links">Contact</a>
          </li>
        </ul>
      </div>
      <div class="col-md-3 mb-4 text-left">
        <h5>Office Timings</h5>
        <p className="para-footer">8 AM - 5 PM, Monday - Saturday</p>
        <p className="para-footer">Bora Service Station Complex, House No 1, 2nd Floor Bora Service byelane, GS Rd, Guwahati, Assam 781007</p>
        <a href="#" class="btn btn-primary btn-contact">Contact Us</a>
      </div>
      <div className="col-lg-1"></div>
    </div>
    
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="social-icons">
          <a href="#" aria-label="Facebook">
            <i class="fab fa-facebook-f m-2"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i class="fab fa-twitter m-2"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i class="fab fa-instagram m-2"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in m-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
