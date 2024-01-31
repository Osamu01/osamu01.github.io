<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Interactive Website</title>
    <link rel="stylesheet" href="styles.css"> <!-- Create this CSS file -->
</head>
<body>
    <!-- Navigation Bar -->
    <nav>
        <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#discord">Discord Servers</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
        <h1>Your Name</h1>
        <p>Welcome to my interactive website</p>
        <a href="#discord" class="cta-button">Join My Discord Servers</a>
    </header>
    
    <!-- About Me Section -->
    <section id="about" class="section">
        <h2>About Me</h2>
        <div class="about-content">
            <img src="profile.jpg" alt="Your Profile Picture">
            <p>A brief bio about yourself goes here.</p>
        </div>
    </section>
    
    <!-- Discord Servers Section -->
    <section id="discord" class="section">
        <h2>My Discord Servers</h2>
        <div class="discord-server">
            <!-- Embed Discord server widget or use Discord API here -->
        </div>
    </section>
    
    <!-- Portfolio Section -->
    <section id="portfolio" class="section">
        <h2>Portfolio</h2>
        <div class="portfolio-item">
            <!-- Showcase your projects or accolades here -->
        </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="section">
        <h2>Contact Me</h2>
        <div class="contact-form">
            <!-- Create a contact form here -->
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Your Name</p>
        <div class="social-icons">
            <!-- Add links to your social media profiles here -->
        </div>
    </footer>

    <script src="script.js"></script> <!-- Create this JavaScript file for interactions -->
</body>
</html>
