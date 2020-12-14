import React from 'react'
import Particles from 'react-particles-js';

const calculateNumParticles = () => {
  const numPixels = window.innerHeight * window.innerWidth;
  return Math.floor(numPixels / 15000);
};

const ParticlesCustom = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: calculateNumParticles(),
        },
        density: {
          enable: false,
          value_area: 1000
        },
        line_linked: {
          color: '#789',
          width: 1,
          opacity: 1,
          distance: 200,
        }
      },
      color: {
        value: "#FFFFFF"
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
            mode: 'push',
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true,
        },
      },
      "retina_detect": true
    }}
    style={{
      position: 'absolute',
    }}
  />
);

export default ParticlesCustom;
