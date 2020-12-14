import React from 'react'
import styles from './InfoIcons.module.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Icon from '../Icon/Icon';

function InfoIcons() {
  const links = [
    {
      icon: faGithub,
      url: 'https://github.com/ShawnFrost23',
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/arth-patel23/',
    }
  ]
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <Icon 
          icon={link.icon}
          onClick={() => {
            window.open(link.url, '_blank');
          }}
          key={link.url}
        />
      ))}
    </div>
  )
}

export default InfoIcons
