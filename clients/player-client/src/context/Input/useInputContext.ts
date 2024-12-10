import { useContext } from 'react';
import { InputContext } from './InputContext';

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInputContext must be used within an InputProvider');
  }
  return context;
};
