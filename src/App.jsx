import "./App.css";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  const roles = [
    "CSE Undergraduate",
    "Aspiring Web Developer",
    "Machine Learning Enthusiast",
    "Data Analyst",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 120);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 60);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    setText(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <>
      {/* ✅ Navbar */}
      <header className="navbar">
        <div className="navbar-brand">Potharlanka Naga Keerthi</div>

        <ul className="navbar-nav">
          <li><a className="nav-link" href="#home">Home</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#resume">Resume</a></li>
          <li><a className="nav-link" href="#achievements">Achievements</a></li>
          <li><a className="nav-link" href="#projects">Projects</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
        
        <div className="social-icons">
          <a href="https://linkedin.com/in/potharlanka-naga-keerthi-b6b209257" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Keerthi9092" target="_blank">
            <FaGithub />
          </a>
        </div>
      </header>

      {/* ✅ Home Section */}
      <section id="home">
        <h3>HELLO!</h3>
        <h1>I'm <span className="highlight">Potharlanka Naga Keerthi</span></h1>
        <h2>{text}<span className="cursor">|</span></h2>
        <p>Pursuing my B.Tech Degree in CSE at KL University</p>

        <div className="buttons">
          <a href="https://linkedin.com/in/potharlanka-naga-keerthi-b6b209257" className="btn">LinkedIn</a>
          <a href="#projects" className="btn">My Works</a>
        </div>
      </section>
      <section id="about" className="about-container">
  <div className="about-image">
    <img src="/images/profile.jpg" alt="Potharlanka Naga Keerthi"/>
  </div>
  <div className="about-details">
    <h2>ABOUT ME</h2>
      <p>
        A Computer Science undergraduate with problem-solving skills and project experience, 
        looking forward to seeking an opportunity in the Software Engineering industry while 
        contributing to a dynamic team.
      </p>
      <p><strong>Name:</strong> Potharlanka Naga Keerthi</p>
      <p><strong>Age:</strong> 21</p>
      <p><strong>Email:</strong> <a href="mailto:nagakeerthi9092@gmail.com">nagakeerthi9092@gmail.com</a></p>
      <p><strong>Country:</strong> India</p>
      <p><strong>Role:</strong> Software Developer</p>
      <p><strong>Languages:</strong> English, Telugu, Hindi</p>
      <p><strong>Interests:</strong> Coding, Reading, Traveling</p>

      <div className="buttons">
        <a href="https://linkedin.com/in/potharlanka-naga-keerthi-b6b209257" className="btn">LinkedIn</a>
        <a href="#projects" className="btn">Projects Completed</a>
      </div>
    </div>
</section>


      {/* ✅ Resume Section */}
      <section id="resume">
        <h1 className="big-title">Resume</h1>
        <p className="subtitle">
          A CSE undergraduate with problem-solving skills, eager to contribute to a dynamic team.
        </p>

        <div className="resume-box">
          <h2>Education</h2>
          <p><b>K L University</b> — B.Tech in CSE (2022–2026)</p>
          <p>CGPA: 9.15</p>

          <h2>Certifications</h2>
          <ul>
            <li>Red Hat Enterprise Application Developer</li>
            <li>AWS Cloud Practitioner</li>
            <li>Salesforce AI Associate</li>
            <li>Linguaskills</li>
            <li>Hack2skill-Certificate</li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1DiogwivAHSb56lOcGP_Z7aVIohUs2IIF/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="cv-button"
          >
            View Resume
          </a>
        </div>
      </section>

<section id="achievements" className="achievements-section">
  <h2 className="section-title">Achievements</h2>
  <div className="underline"></div>

  <div className="achievements-grid">
    <div className="achievement-card">
      <p className="year">2024</p>
      <h3 className="achievement-title">AWS Certified Cloud Practitioner</h3>
      <img src="/images/aws.jpg" alt="AWS Certificate" className="achievement-img" />
    </div>

    <div className="achievement-card">
      <p className="year">2024</p>
      <h3 className="achievement-title">Red Hat Enterprise Application Developer Certification</h3>
      <img src="/images/red.jpg" alt="Red Hat Certificate" className="achievement-img" />
    </div>

    
    <div className="achievement-card">
      <p className="year">2024</p>
      <h3 className="achievement-title">Salceforce AI Associate</h3>
      <img src="/images/ai.jpg" alt="AWS Certificate" className="achievement-img" />
    </div>

    
    <div className="achievement-card">
      <p className="year">2024</p>
      <h3 className="achievement-title">Linguaskills</h3>
      <img src="/images/lingua.jpg" alt="AWS Certificate" className="achievement-img" />
    </div>

    
    <div className="achievement-card">
      <p className="year">2025</p>
      <h3 className="achievement-title">Hack2skill-Certificate</h3>
      <img src="/images/Hack2skill.png" alt="AWS Certificate" className="achievement-img" />
    </div>

    <div className="achievement-card">
      <p className="year">2024</p>
            <h3 className="achievement-title">AWS Certified Cloud Practitioner Badge</h3>
      <img src="/images/aws1.png" alt="AWS Certificate" className="achievement-img" />
    </div>


  </div>
</section>


  <section id="projects">
  <h2 className="section-title">Projects</h2>
  <div className="projects-grid">
    
    {/* ✅ Project 1 */}
    <div className="project-card">
      <img src="\images\food2.jpg" alt="Online Food" className="project-img" />
      <div className="project-info">
        <h3 className="project-title">Online Food Ordering System</h3>
        <p className="project-description">
A web application built using the MERN stack for ordering food online, managing restaurants, and delivering a seamless user experience.
        </p>
        <p className="project-tech">Tech Stack: MERN (MongoDB, Express.js, React, Node.js), HTML, CSS</p>
        <a href="https://github.com/Keerthi9092/Online-Food-Ordering-System" className="project-btn" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>

    {/* ✅ Project 2 */}
    <div className="project-card">
      <img src="\images\smart1.jpg" alt="SmartCalculator" className="project-img" />
      <div className="project-info">
        <h3 className="project-title">A Smart Calculator Controlled by Hand Gestures</h3>
        <p className="project-description">
GestureSmart is an intelligent calculator that allows users to perform mathematical operations using hand gestures, offering a touch-free and interactive computing experience.
        </p>
        <p className="project-tech">Tech Stack: Python, OpenCV, Mediapipe, NumPy, Tkinter</p>
        <a href="https://github.com/Keerthi9092/Smart-Calculator-controlled-entirely-by-hand-gestures" className="project-btn" target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>

  </div>
</section>

<section className="contact-section" id="contact">
  <h2>CONTACT ME</h2>
  <p>Feel free to reach out through any of the options below.</p>

  <div className="contact-container">
    <div className="contact-box">
      <span className="icon">📍</span>
      <h3>ADDRESS</h3>
      <p>VIJAYAWADA, India</p>
    </div>

    <div className="contact-box">
      <span className="icon">📞</span>
      <h3>CONTACT NUMBER</h3>
      <p>+91 8639419092</p>
    </div>

    <div className="contact-box">
      <span className="icon">📧</span>
      <h3>EMAIL ADDRESS</h3>
      <p>nagakeerthi9092@gmail.com</p>
    </div>

    <div className="contact-box">
      <span className="icon">🌐</span>
      <h3>DOWNLOAD RESUME</h3>
      <a 
        href="https://drive.google.com/file/d/1DiogwivAHSb56lOcGP_Z7aVIohUs2IIF/view"
        target="_blank"
        rel="noreferrer"
        className="resume-btn"
      >
        Click Here
      </a>
    </div>
  </div>

  <div className="question">
    <h3>Have a Question?</h3>
    <a 
      href="https://forms.office.com/r/pCNBw1nCcE?origin=lprLink"
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      Click Here
    </a>

    <p className="social">
      Find me on 
      <a 
        href="https://linkedin.com/in/potharlanka-naga-keerthi-b6b209257"
        className="linkedin"
      >
        {" "}LinkedIn
      </a>
    </p>
  </div>
</section>

{/* ✅ Footer */}
<footer>© 2025 Potharlanka Naga Keerthi | All Rights Reserved</footer>
</>
);
}

export default App;
