import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  // example toast:
  // {
  //   id: 1,
  //   message: "example",
  //   variant: "notice"
  // }
  const [toasts, setToasts] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');

  function handleSubmit(e) {
    e.preventDefault();

    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ];
    setToasts(nextToasts);

    // clear inputs
    setMessage('');
    setVariant('notice');
  }

  function handleDismiss(id) {
    // generate new array w/o the current item ID
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((radio) => {
            const id = `variant-${radio}`;
            return (
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <label htmlFor={id}>
                <input
                  key={crypto.randomUUID()}
                  id={id}
                  type="radio"
                  name="variant"
                  value={radio}
                  checked={variant === radio}
                  onChange={(e) => setVariant(e.target.value)}
                />
                {radio}
              </label>
            </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
