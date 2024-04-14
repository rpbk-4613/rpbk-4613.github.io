particlesJS('interactive-background', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" }, // Particle color
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" } // No border  
        },
        opacity: { value: 0.4, random: true, anim: { enable: false } },
        size: { value: 2, random: true, anim: { enable: false } },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
        },
        move: { enable: true, speed: 2, direction: "none", random: false, out_mode: "out" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});
