particlesJS('interactive-background', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.7, random: true, anim: { enable: false } },
        size: { value: 5, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.7, width: 1 },
        move: { enable: true, speed: 3, direction: "none", random: false, out_mode: "out" }
    },
    // interactivity: {
    //     events: {
    //         onhover: { enable: true, mode: "repulse" } 
    //     }
    // }

    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    }
});
