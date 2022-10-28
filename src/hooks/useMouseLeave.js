import { useEffect } from "react";

function useMouseLeave(ref, onClose) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      onClose();
    };
    document.addEventListener("mouseenter", listener);
    return () => document.removeEventListener("mouseenter", listener);
  }, [ref, onClose]);
}

export default useMouseLeave;
