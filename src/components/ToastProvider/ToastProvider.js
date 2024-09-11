import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // example toast:
  // {
  //   id: 1,
  //   message: "example",
  //   variant: "notice"
  // }
  const [toasts, setToasts] = React.useState([]);

  // const handleDismiss = React.useMemo((id) => {
  //   // generate new array w/o the current item ID
  //   const nextToasts = toasts.filter((toast) => toast.id !== id);
  //   setToasts(nextToasts);
  // }, [toasts]);

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

  React.useEffect(() => {
    function dismissAll(e) {
      if (e.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener('keyup', dismissAll);

    return () => {
      window.removeEventListener('keyup', dismissAll);
    }
  }, []);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
