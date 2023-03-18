const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(function(anchorLink) {
  anchorLink.addEventListener('click', function(i) {
    i.preventDefault(); 
    const targetElement = document.querySelector(this.getAttribute('href'));
    targetElement.scrollIntoView({ behavior: 'smooth' }); 
  });
});