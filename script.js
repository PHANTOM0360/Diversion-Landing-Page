document.addEventListener('scroll', function() { // Make sure this class is correct
    const spinningMoon = document.querySelector('.circle');
    const logo = document.querySelector('.logo');

    // Get viewport height and scroll position
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Calculate scaling factor for the logo
    const logoScale = Math.min(2.5, 1 + (scrollPosition / viewportHeight));

    // Apply the scale transformation to the logo
    if (logo) {
        logo.style.transform = `scale(${logoScale})`;
    }

    // Calculate rotation angle for the moon
    const rotationAngle = (scrollPosition / 10) % 360;

    // Apply the rotation transformation to the moon
    if (spinningMoon) {
        spinningMoon.style.transform = `rotate(${rotationAngle}deg)`;
    }
});
