import React from 'react';

import useKeyUp from '../../hooks/use-key-up';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissAll = React.useCallback(() => {
    setToasts([]);
  }, []);
  useKeyUp('Escape', dismissAll);

  const value = React.useMemo(() => {
    function createToast(message, variant) {
      const nextToasts = [
        ...toasts,
        {
          id: crypto.randomUUID(),
          message,
          variant
        }
      ];
      setToasts(nextToasts);
    }

    function dismissToast(id) {
      // generate new array w/o the current item ID
      const nextToasts = toasts.filter((toast) => toast.id !== id);
      setToasts(nextToasts);
    }

    return { toasts, createToast, dismissToast };
  }, [toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
