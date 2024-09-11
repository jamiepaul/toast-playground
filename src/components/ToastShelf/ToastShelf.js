import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
      <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast id={item.id} variant={item.variant}>
            {item.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
