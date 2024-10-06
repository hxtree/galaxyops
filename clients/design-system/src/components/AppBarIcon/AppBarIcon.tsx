import React from 'react';
import './style.module.scss';

export type AppBarIconProps = {
  collapsed: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  testId?: string;
};

export const AppBarIcon: React.FC<AppBarIconProps> = ({
  collapsed,
  className = '',
  onClick,
  testId,
}) => {
  return (
    <button
      className={`app-bar-icon ${className}`}
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded={!collapsed}
      aria-label="Toggle navigation"
      onClick={onClick}
      data-testid={testId}
    >
      <div
        className={`navbar-toggler ${collapsed ? 'collapsed' : ''} d-flex flex-column justify-content-around`}
      >
        <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
      </div>
      <span className="toggler-description">{collapsed ? 'Menu' : ''}</span>
    </button>
  );
};
