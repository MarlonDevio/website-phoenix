import { useState, useEffect } from "react";

const useHideOnScroll = () => {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // Check the current scroll position compared to the last scroll position
      if (window.scrollY > lastScrollY) {
        // If user is scrolling down, hide the navbar
        setHide(true);
      } else {
        // If user is scrolling up, show the navbar
        setHide(false);
      }
      // Update the last scroll position to the current scroll position
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Add the event listener when the component mounts
      window.addEventListener("scroll", controlNavbar);
      // Remove the event listener when the component unmounts
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]); // Only re-run the effect if the lastScrollY changes

  return hide;
};

export default useHideOnScroll;
