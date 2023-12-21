import { FC, ElementType } from 'react';
import cl from 'classnames';
import style from './Typography.module.scss';

export interface TypographyProps {
  className?: string;
  children?: any;
  as?: ElementType;
  variant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3';
  fontWeight?: number | string;
}

export const Typography: FC<TypographyProps> = (props) => {
  const { className, children, as, variant = 'body1', fontWeight } = props;

  const classes = cl(className, style[variant]);
  let Component = null;

  if (
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) &&
    as === undefined
  ) {
    Component = variant as ElementType;
  } else if (as) {
    Component = as;
  } else {
    Component = 'p';
  }

  return (
    <Component className={classes} style={{ fontWeight }}>
      {children}
    </Component>
  );
};
