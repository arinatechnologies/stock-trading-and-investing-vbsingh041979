// Font Awesome initialization
document.addEventListener('DOMContentLoaded', function() {
  // Load Font Awesome if not already loaded
  if (!document.querySelector('#font-awesome')) {
    const faLink = document.createElement('link');
    faLink.id = 'font-awesome';
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(faLink);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animation for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.1 });

  timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transition = 'all 0.5s ease';
    if (item.classList.contains('timeline-item:nth-child(odd)') || item.classList.contains('timeline-item:nth-child(even)')) {
      item.style.transform = 'translateX(-50px)';
    } else {
      item.style.transform = 'translateX(50px)';
    }
    observer.observe(item);
  });
});