import React from 'react'
import Particles from 'react-particles-js';

const calculateNumParticles = () => {
  const numPixels = window.innerHeight * window.innerWidth;
  return Math.floor(numPixels / 10000);
};

const ParticlesCustom = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: calculateNumParticles(),
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    }}
    style={{
      position: 'absolute',
    }}
  />
);

export default ParticlesCustom;
