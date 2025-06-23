// Service card interaction
document.addEventListener('DOMContentLoaded', function() {
  // Add click event to all Learn More buttons
  const learnMoreButtons = document.querySelectorAll('.btn-learn-more');
  
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const serviceTitle = this.closest('.service-card').querySelector('h3').textContent;
      console.log(`Learn more clicked for: ${serviceTitle}`);
      // In a real implementation, this would open a modal or navigate to a detailed page
      alert(`More information about ${serviceTitle} would be displayed here.`);
    });
  });
  
  // CTA button click handler
  const ctaButton = document.querySelector('.btn-cta');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      console.log('CTA button clicked');
      // In a real implementation, this would open a contact form
      alert('Contact form would open here.');
    });
  }
});