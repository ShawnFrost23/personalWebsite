import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Icon.module.css';

const Icon = ({ icon, ...rest }) => (
  <FontAwesomeIcon {...rest} icon={icon} className={styles.Icon} />
);

export default Icon;