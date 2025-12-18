import React from 'react';
import { theme } from '../utils/theme';
import { classNames } from '../utils/classNames';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, className, style, ...props }) => {
  return (
    <label className={classNames('ds-checkbox-label', className)} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', ...style }}>
      <input
        type="checkbox"
        className="ds-checkbox"
        style={{
          width: theme.sizes.sm,
          height: theme.sizes.sm,
          borderRadius: theme.cornerRadius.sm,
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

export default Checkbox;
