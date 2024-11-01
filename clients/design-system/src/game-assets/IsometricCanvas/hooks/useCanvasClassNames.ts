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

    if (properties?.backgroundColor) {
      newClassNames.push(`isometric-canvas-${properties.backgroundColor}`);
    }

    setCanvasClassNames(newClassNames);
  }, [properties]);

  return canvasClassNames;
};
