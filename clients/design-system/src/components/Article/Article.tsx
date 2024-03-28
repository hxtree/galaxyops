import React from 'react';
import styles from './style.module.scss';

export type ArticleProps = {
  style?: React.CSSProperties; // Adding style prop
  className?: string; // Making className prop optional
  children: React.ReactNode;
};

export const Article = ({ style, className, children }: ArticleProps): JSX.Element => {
  const classNames = ['article'];

  if (className) {
    classNames.push(className);
  }

  return (
    <div
      className={classNames.join(' ')}
      style={style}
    >
      <div className={'container py-5 px-4'}>
        {children}
      </div>
    </div>
  );
};
