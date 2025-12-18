import React from 'react';
import { theme } from '../utils/theme';
import { classNames } from '../utils/classNames';

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  as?: keyof JSX.IntrinsicElements;
  weight?: 'regular' | 'medium' | 'bold';
};

const variantMap = {
  display: { as: 'h1', fontSize: theme.fonts.size.display, fontWeight: theme.fonts.weight.bold },
  h1: { as: 'h1', fontSize: theme.fonts.size.xxl, fontWeight: theme.fonts.weight.bold },
  h2: { as: 'h2', fontSize: theme.fonts.size.xl, fontWeight: theme.fonts.weight.bold },
  h3: { as: 'h3', fontSize: theme.fonts.size.lg, fontWeight: theme.fonts.weight.medium },
  h4: { as: 'h4', fontSize: theme.fonts.size.md, fontWeight: theme.fonts.weight.medium },
  body: { as: 'p', fontSize: theme.fonts.size.md, fontWeight: theme.fonts.weight.regular },
  caption: { as: 'span', fontSize: theme.fonts.size.sm, fontWeight: theme.fonts.weight.regular },
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  as,
  weight,
  className,
  style,
  ...props
}) => {
  const v = variantMap[variant];
  const Tag = as || v.as;
  return React.createElement(
    Tag,
    {
      className: classNames('ds-typography', className),
      style: {
        fontFamily: theme.fonts.family.sans,
        fontSize: v.fontSize,
        fontWeight: weight ? theme.fonts.weight[weight] : v.fontWeight,
        color: theme.colors.text,
        margin: 0,
        ...style,
      },
      ...props,
    },
    children
  );
};

export default Typography;
