import { useEffect } from "react";

/**
 *
 * @param {string} action Action "above" || "below"
 * @param {number} breakpoint
 * @param {Function} onClose
 */
export default function useModalResize(action, breakpoint, onClose) {
  useEffect(() => {
    if (!(action === "above" || action === "below")) {
      return;
    }
    const windowResize = () => {
      if (action === "above") window.innerWidth >= breakpoint && onClose();
      if (action === "below") window.innerWidth <= breakpoint && onClose();
    };
    window.addEventListener("resize", windowResize);

    return () => window.removeEventListener("resize", windowResize);
  }, [action, breakpoint, onClose]);
}
