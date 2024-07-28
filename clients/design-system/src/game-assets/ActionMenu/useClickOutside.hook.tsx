import { useEffect } from 'react';

export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handleClickOutside: () => void,
) => {
  useEffect(() => {
    const handleClickOutsideComponent = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutsideComponent);

    return () => {
      document.removeEventListener('click', handleClickOutsideComponent);
    };
  }, [ref, handleClickOutside]);
};
