particlesJS.load('container', 'particles.json');

const background = document.getElementById('interactive-background');

window.addEventListener('mousemove', (event) => {
    // You'll add code to create interactive effects here based on mouse position (event.clientX, event.clientY)
});

particlesJS('interactive-background', {
    "particles": { /* Customization options for the particles go here */ },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" /* Example - particles are repelled by the cursor*/
            }
        }
    }
});