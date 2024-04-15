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

    "interactivity": {
        "detectsOn": "window",
        "events": {
          "onClick": {
            "enable": true,
            "mode": "push"
          },
          "onDiv": {
            "selectors": [],
            "enable": false,
            "mode": [],
            "type": "circle"
          },
          "onHover": {
            "enable": true,
            "mode": "repulse",
            "parallax": {
              "enable": false,
              "force": 2,
              "smooth": 10
            }
          },
          "resize": {
            "delay": 0.5,
            "enable": true
          }
        },
        "modes": {
          "trail": {
            "delay": 1,
            "pauseOnStop": false,
            "quantity": 1
          },
          "attract": {
            "distance": 200,
            "duration": 0.4,
            "easing": "ease-out-quad",
            "factor": 1,
            "maxSpeed": 50,
            "speed": 1
          },
          "bounce": {
            "distance": 200
          },
          "bubble": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "mix": false,
              "selectors": []
            }
          },
          "connect": {
            "distance": 80,
            "links": {
              "opacity": 0.5
            },
            "radius": 60
          },
          "grab": {
            "distance": 100,
            "links": {
              "blink": false,
              "consent": false,
              "opacity": 1
            }
          },
          "push": {
            "default": true,
            "groups": [],
            "quantity": 4
          },
          "remove": {
            "quantity": 2
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "selectors": []
            }
          },
          "slow": {
            "factor": 3,
            "radius": 200
          },
          "light": {
            "area": {
              "gradient": {
                "start": {
                  "value": "#ffffff"
                },
                "stop": {
                  "value": "#000000"
                }
              },
              "radius": 1000
            },
            "shadow": {
              "color": {
                "value": "#000000"
              },
              "length": 2000
            }
          }
        }
    }
});
