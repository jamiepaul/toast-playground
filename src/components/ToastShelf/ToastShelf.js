import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  console.log(toasts);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((item) => (
        <li key={item.id} className={styles.toastWrapper}>
          <Toast id={item.id} variant={item.variant} handleDismiss={handleDismiss}>
            {item.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
