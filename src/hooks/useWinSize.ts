import { useEffect, useState } from 'react';

function useWinSize() {
  const [winSize, setWinSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function getWinSize() {
      setWinSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    getWinSize();
    window.addEventListener('resize', getWinSize);
    return () => {
      window.removeEventListener('resize', getWinSize);
    };
  }, []);
  return winSize;
}

export default useWinSize;
