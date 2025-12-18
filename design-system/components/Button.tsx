import React from 'react';
import { theme } from '../utils/theme';
import { classNames } from '../utils/classNames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
};

const sizeStyles = {
  sm: {
    padding: `${theme.spacers.sm}px ${theme.spacers.md}px`,
    fontSize: theme.fonts.size.sm,
  },
  md: {
    padding: `${theme.spacers.md}px ${theme.spacers.lg}px`,
    fontSize: theme.fonts.size.md,
  },
  lg: {
    padding: `${theme.spacers.lg}px ${theme.spacers.xl}px`,
    fontSize: theme.fonts.size.lg,
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  style,
  ...props
}) => {
  const baseStyle: React.CSSProperties = {
    borderRadius: theme.cornerRadius.md,
    fontFamily: theme.fonts.family.sans,
    fontWeight: theme.fonts.weight.medium,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    width: fullWidth ? '100%' : undefined,
    ...sizeStyles[size],
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: theme.colors.primary,
      color: '#fff',
    },
    secondary: {
      background: theme.colors.secondary,
      color: '#fff',
    },
    outline: {
      background: 'transparent',
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.primary}`,
    },
    ghost: {
      background: 'transparent',
      color: theme.colors.primary,
    },
  };

  return (
    <button
      className={classNames('ds-btn', className)}
      style={{ ...baseStyle, ...variants[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
