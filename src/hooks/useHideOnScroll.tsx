import { useState, useEffect } from "react";

const useHideOnScroll = () => {
  const [hide, setHide] = useState(false);
  let timeoutId: number | null | undefined = null; // To keep track of the timeout

  const controlNavbar = () => {
    if (timeoutId !== null) {
      // If there's an existing timeout, clear it
      clearTimeout(timeoutId);
      setHide(true); // Hide the navbar when scrolling
    }
    // Set a new timeout
    timeoutId = setTimeout(() => {
      setHide(false); // Show the navbar when scrolling stops
    }, 100); // Delay after which to show the navbar again (100ms)
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []); // Empty array ensures effect runs only once on mount and unmount

  return hide;
};

export default useHideOnScroll;
