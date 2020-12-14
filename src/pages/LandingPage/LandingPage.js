import React from 'react';
import ParticlesCustom from '../../Components/Particles/Particles';
import Display from '../../Components/Display/Display';
import styles from './LandingPage.module.css';

const LandingPage = () => (
  <div className={styles.LandingPage}>
    <ParticlesCustom />
    <Display />
  </div>
);

export default LandingPage;