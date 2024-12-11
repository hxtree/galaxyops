import { useEffect } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'higher' | 'lower';

export const useArrowKeyMoveCamera = (
  setCameraCoordinates: React.Dispatch<
    React.SetStateAction<{ x: number; y: number; z: number }>
  >,
) => {
  useEffect(() => {
    const moveCamera = (direction: Direction) => {
      setCameraCoordinates(prevPosition => {
        const step = 10; // Define how much movement per step
        switch (direction) {
          case 'up':
            return { ...prevPosition, y: prevPosition.y + step };
          case 'down':
            return { ...prevPosition, y: prevPosition.y - step };
          case 'left':
            return { ...prevPosition, x: prevPosition.x + step };
          case 'right':
            return { ...prevPosition, x: prevPosition.x - step };
          case 'higher':
            return { ...prevPosition, z: prevPosition.z + step };
          case 'lower':
            return { ...prevPosition, z: prevPosition.z - step };
          default:
            return prevPosition;
        }
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          moveCamera('up');
          break;
        case 'ArrowDown':
          moveCamera('down');
          break;
        case 'ArrowLeft':
          moveCamera('left');
          break;
        case 'ArrowRight':
          moveCamera('right');
          break;
        case 'PageUp':
          moveCamera('higher');
          break;
        case 'PageDown':
          moveCamera('lower');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCameraCoordinates]);
};
