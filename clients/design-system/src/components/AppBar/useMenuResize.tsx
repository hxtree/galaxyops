import { useEffect } from 'react';

export const useMenuResize = (
  menuRef: React.RefObject<HTMLElement>,
  closeMenu: () => void,
  threshold: number,
) => {
  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current) {
        const menuWidth = menuRef.current.getBoundingClientRect().width;
        if (menuWidth > threshold) {
          closeMenu();
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check the initial width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuRef, closeMenu, threshold]);
};
