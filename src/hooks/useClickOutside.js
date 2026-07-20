import { useEffect } from "react";

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;