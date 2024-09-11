import React from "react";

function useKeyUp(key, callback) {
  React.useEffect(() => {
    function handleKeyUp(e) {
      if (e.code === key) {
        callback();
      }
    }

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key, callback]);
}

export default useKeyUp;
