import { useEffect } from 'react';

export function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    if (delay === null) return;

    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
}
