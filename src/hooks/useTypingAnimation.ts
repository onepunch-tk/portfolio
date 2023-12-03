import { useEffect, useState } from "react";

export const useTypingAnimation = (paragraphLength: number) => {
  const [visiblePCount, setVisiblePCount] = useState(0);
  const [isLastPVisible, setIsLastPVisible] = useState(false);
  useEffect(() => {
    if (visiblePCount < paragraphLength) {
      const timer = setTimeout(() => setVisiblePCount(visiblePCount + 1), 1500);
      return () => clearTimeout(timer);
    } else {
      setIsLastPVisible(true); // 마지막 p 태그 애니메이션이 끝나면 상태를 업데이트
    }
  }, [visiblePCount, paragraphLength]);

  return [visiblePCount, isLastPVisible];
};
