import { useEffect, useState } from "react";

export const useResponsiveBreakpoint = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  useEffect(() => {
    const updateResponsiveBreakpoint = () => {
      const body = document.querySelector("body");
      if (body) {
        setIsLargeScreen(body.offsetWidth >= 1024);
      }
    };

    window.addEventListener("resize", updateResponsiveBreakpoint);
    updateResponsiveBreakpoint();
    return () =>
      window.removeEventListener("resize", updateResponsiveBreakpoint);
  }, []);

  return isLargeScreen;
};
