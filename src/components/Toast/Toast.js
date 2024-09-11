import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { dismissToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <Icon icon={ICONS_BY_VARIANT[variant]} size={24} />
      <p className={styles.content}>
        <VisuallyHidden>{`${variant} - `}</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
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
