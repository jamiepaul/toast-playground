import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, handleDismiss }) {

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <Icon icon={ICONS_BY_VARIANT[variant]} size={24} />
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={handleDismiss}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

function Icon({ icon: IconTag }) {
  return (
    <div className={styles.iconContainer}>
      <IconTag size={24} />
    </div>
  );
}

export default Toast;
