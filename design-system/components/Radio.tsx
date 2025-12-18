import React from 'react';
import { theme } from '../utils/theme';
import { classNames } from '../utils/classNames';

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Radio: React.FC<RadioProps> = ({ label, className, style, ...props }) => {
  return (
    <label className={classNames('ds-radio-label', className)} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', ...style }}>
      <input
        type="radio"
        className="ds-radio"
        style={{
          width: theme.sizes.sm,
          height: theme.sizes.sm,
          borderRadius: '50%',
          border: `1.5px solid ${theme.colors.border}`,
          accentColor: theme.colors.primary,
          marginRight: theme.spacers.sm,
        }}
        {...props}
      />
      {label && <span style={{ fontFamily: theme.fonts.family.sans, fontSize: theme.fonts.size.md, color: theme.colors.text }}>{label}</span>}
    </label>
  );
};

export default Radio;
