import { useEffect, useState } from 'react';
import { BackgroundColor } from '../types/BackgroundColor.type';

interface Properties {
  backgroundColor?: BackgroundColor;
}

export const useCanvasClassNames = (properties?: Properties): string[] => {
  const [canvasClassNames, setCanvasClassNames] = useState<string[]>([
    'isometric-canvas',
  ]);

  useEffect(() => {
    const newClassNames = ['isometric-canvas'];

    switch (properties?.backgroundColor) {
      case BackgroundColor.BLUE:
        newClassNames.push('isometric-canvas__blue');
        break;
      case BackgroundColor.GREEN:
        newClassNames.push('isometric-canvas__green');
        break;
      case BackgroundColor.RED:
        newClassNames.push('isometric-canvas__red');
        break;
      default:
        newClassNames.push('isometric-canvas__blue');
        break;
    }

    setCanvasClassNames(newClassNames);
  }, [properties]);

  return canvasClassNames;
};
