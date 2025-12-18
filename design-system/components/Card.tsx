import React from 'react';
import { theme } from '../utils/theme';
import { classNames } from '../utils/classNames';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'elevated' | 'outlined' | 'flat';
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  className,
  style,
  ...props
}) => {
  const baseStyle: React.CSSProperties = {
    background: theme.colors.surface,
    borderRadius: theme.cornerRadius.lg,
    padding: theme.spacers.lg,
    boxSizing: 'border-box',
    boxShadow:
      variant === 'elevated'
        ? '0 2px 8px rgba(0,0,0,0.08)'
        : undefined,
    border:
      variant === 'outlined'
        ? `1px solid ${theme.colors.border}`
        : undefined,
  };

  return (
    <div className={classNames('ds-card', className)} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </div>
  );
};

export default Card;
