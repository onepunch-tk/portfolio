import { RefObject, useEffect, useState } from "react";

export const useNavbarPosition = (outletRef: RefObject<HTMLDivElement>) => {
  const [navbarPosition, setNavbarPosition] = useState(0);
  useEffect(() => {
    const updateNavbarPosition = () => {
      if (outletRef.current) {
        const outletWidth = outletRef.current.offsetLeft;
        setNavbarPosition(outletWidth + 20);
      }
    };

    window.addEventListener("resize", updateNavbarPosition);
    updateNavbarPosition(); // 초기 위치 설정

    return () => window.removeEventListener("resize", updateNavbarPosition);
  }, []);

  return navbarPosition;
};
