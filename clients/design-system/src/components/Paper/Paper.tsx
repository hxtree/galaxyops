import React from 'react';
import styles from './style.module.scss';

export type PaperProps = {
  className?: string; // Making className prop optional
  style?: React.CSSProperties; // Adding style prop
  children: React.ReactNode;
  elevation: string;
};

export const Paper = ({ className, style, elevation, children }: PaperProps): JSX.Element => {
  return (
    <div
      className={`${styles.paper} ${styles[`paper-elevation-${elevation}`]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
