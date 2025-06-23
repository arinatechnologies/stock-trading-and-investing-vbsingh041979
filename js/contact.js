// js/contact.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('customForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the form data to your server
            // For demonstration, we'll just show a success message
            alert('Thank you for your message! Our team will get back to you soon.');
            contactForm.reset();
            
            // In a real implementation, you would use the data-form-handler
            // or make an AJAX request to your form processing endpoint
        });
    }
    
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});