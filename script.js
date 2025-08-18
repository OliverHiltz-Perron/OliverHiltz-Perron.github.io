// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const backToTop = document.querySelector('.back-to-top');
const header = document.querySelector('header');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close navigation when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Project Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filter = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll to top
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (placeholder - would need backend implementation)
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, just show an alert
        alert(`Thanks for your message, ${name}! This is a demo form and doesn't actually send emails yet.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .contact-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .contact-item');
    
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger once on load
    animateOnScroll();
});

// Trigger animation on scroll
window.addEventListener('scroll', animateOnScroll);

// GitHub Projects Integration
async function fetchGitHubProjects() {
    const username = 'OliverHiltz-Perron'; // Replace with your GitHub username
    const projectsContainer = document.getElementById('projects-container');
    
    try {
        // Fetch user's repositories
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        // Filter out forked repositories, private ones, and specific repos to exclude
        const excludedRepos = ['Qdrant-Hybrid-Search-Implementation-Workflow', 'OliverHiltz-Perron.github.io'];
        const publicRepos = repos.filter(repo => 
            !repo.fork && 
            !repo.private && 
            !excludedRepos.includes(repo.name)
        );
        
        // Create project cards for GitHub repositories
        publicRepos.forEach(repo => {
            const projectCard = createGitHubProjectCard(repo);
            projectsContainer.insertAdjacentHTML('afterbegin', projectCard);
        });
        
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
    }
}

function createGitHubProjectCard(repo) {
    const language = repo.language || 'Various';
    const description = repo.description || 'No description available';
    const stars = repo.stargazers_count;
    const forks = repo.forks_count;
    
    return `
        <div class="project-card github-project" data-category="github">
            <div class="project-image">
                <div class="github-repo-preview">
                    <i class="fab fa-github"></i>
                    <div class="repo-stats">
                        <span><i class="fas fa-star"></i> ${stars}</span>
                        <span><i class="fas fa-code-branch"></i> ${forks}</span>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3>${repo.name}</h3>
                <p>${description}</p>
                <div class="project-tags">
                    <span>${language}</span>
                    ${repo.topics ? repo.topics.slice(0, 2).map(topic => `<span>${topic}</span>`).join('') : ''}
                </div>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank"><i class="fab fa-github"></i> Code</a>
                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Load GitHub projects when page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProjects();
});

// Add styles for GitHub project preview
const style = document.createElement('style');
style.textContent = `
    .github-repo-preview {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #24292e 0%, #40454a 100%);
        color: white;
        position: relative;
    }
    
    .github-repo-preview i {
        font-size: 4rem;
        margin-bottom: 20px;
    }
    
    .repo-stats {
        display: flex;
        gap: 20px;
        font-size: 0.9rem;
    }
    
    .repo-stats span {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .github-project {
        animation: fadeInUp 0.5s ease;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);