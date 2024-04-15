particlesJS('interactive-background', {
    particles: {
        // number: { value: 80, density: { enable: true, value_area: 800 } },
        // color: { value: "#ffffff" },
        // shape: { type: "circle" },
        // opacity: { value: 0.7, random: true, anim: { enable: false } },
        // size: { value: 5, random: true, anim: { enable: false } },
        // line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.7, width: 1 },
        // move: { enable: true, speed: 3, direction: "none", random: false, out_mode: "out" }

        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.75,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "out",
            },
            random: true,
            speed: 2.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 1 },
        },
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
