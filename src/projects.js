// src/projects.js

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Text Animation (Dynamic Role Display)
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#changing-text", {
        strings: [
            "CSE Undergraduate",
            "Machine Learning Enthusiast",
            "Aspiring Software Developer"
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});

// === PROJECTS SECTION ===

const projects = [
    {
        title: "Online Food Ordering System",
        description: "A responsive MERN full-stack web app that allows users to browse menus, place orders, and make secure payments.",
        tech: "Tech Stack: MongoDB, Express.js, React, Node.js",
        link: "https://github.com/keerthipotharlanka/online-food-ordering-system",
        image: "images/food-ordering.png",
    },
    {
        title: "Event Management System",
        description: "Developed using Python and MySQL, this project automates campus event scheduling and notifications.",
        tech: "Tech Stack: Python, MySQL, Tkinter",
        link: "https://github.com/keerthipotharlanka/event-management-system",
        image: "images/event-management.png",
    },
    {
        title: "Weather Forecast Application",
        description: "A weather visualization app that displays real-time weather updates using API integration.",
        tech: "Tech Stack: HTML, CSS, JavaScript, OpenWeather API",
        link: "https://github.com/keerthipotharlanka/weather-app",
        image: "images/weather-app.png",
    },
    {
        title: "Student Admission Management System",
        description: "A Java-based desktop application for managing university admission processes efficiently.",
        tech: "Tech Stack: Java, MySQL, CodeReady Studio",
        link: "https://github.com/keerthipotharlanka/student-admit-management",
        image: "images/admission-system.png",
    }
];

// Targeting the container where project cards will be added
const projectsList = document.getElementById("projects-list");

// Loop through and create project cards dynamically
projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <p class="project-tech">${project.tech}</p>
            <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        </div>
    `;

    projectsList.appendChild(projectCard);
});
