window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#changing-text", {
        strings: ["CSE Undergraduate","Aspiring Web Developer","Machine Learning enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});



// CV Viewer Toggle Functionality
document.getElementById('viewCvBtn').addEventListener('click', function() {
    document.getElementById('cvViewer').style.display = 'block';
});

// Close Button to Hide the CV Viewer
document.getElementById('closeCvBtn').addEventListener('click', function() {
    document.getElementById('cvViewer').style.display = 'none';
});

// Close the CV viewer if the background is clicked
document.getElementById('cvViewer').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('cvViewer').style.display = 'none';
    }
});



const projects = [
    {
        title: "Online Art Gallery",
        description: "A web application built using Python Full Stack for showcasing and promoting artworks.",
        tech: "Tech Stack: Django, HTML, CSS",
        link: "https://github.com/sharmilashaik218/online_art_gallery-python-django",
        image: "images/artgallery.png",
    },
    {
        title: "Health Ease",
        description: "HealthEase is a web platform that simplifies healthcare appointment booking and provides instant health advice through an AI-driven chatbot.",
        tech: "Tech Stack: Django, HTML, CSS",
        link: "https://github.com/sharmilashaik218/frt_Project",
        image: "images/healthease.png",
    },

    {
        title: "Tic-Tac-Toe ",
        description: "A simple game built usin HTML,CSS, Java script which helped me learn and understand Javascripts DOM",
        tech: "Tech Stack:HTML, CSS , javaScript",
        link: "https://sharmilashaik218.github.io/tic-tac-toe-javaScriptProject/",
        image: "images/tic-tac-toe.png",
    },
    {
        title: "Rock-Paper-Scissors ",
        description: "A simple game built usin HTML,CSS, Java script which helped me learn and understand Javascripts DOM",
        tech: "Tech Stack:HTML, CSS , javaScript",
        link: "https://sharmilashaik218.github.io/rock-paper-scissors-JavaScript/",
        image: "images/rock-papers-scissors.png",
    },

    {
        title: "Digital Clock",
        description: "A Simple digital clock using Html and Java Script",
        tech: "Tech Stack:HTML ,JavaScript",
        link: "https://sharmilashaik218.github.io/digitalclock/",
        image: "images/digital-clock.png",
    },
];

const projectsList = document.getElementById("projects-list");




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




