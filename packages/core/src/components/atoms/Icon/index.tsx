/** @jsxRuntime classic /
/** @jsx jsx */

import * as icons from './svg';

import { SerializedStyles, css, jsx } from '@emotion/react';

import palette from '../../../color';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 Theme  */
  theme?: string;
  /** 아이콘 크기 */
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const themes: { [key: string]: SerializedStyles } = {
  disabled: css`
    background: ${palette.gray5};
    fill: ${palette.tyop0};
  `,
  primary: css`
    background: ${palette.key0};
    fill: white !important;
    &:hover {
      background: ${palette.key1};
    }
    &:active {
      background: ${palette.key3};
    }
  `,
  secondary: css`
    color: ${palette.key0};
    border: 1px solid ${palette.key0};
    background: none;
    &:hover {
      color: ${palette.key1};
      border: 1px solid ${palette.key1};
    }
    &:active {
      color: ${palette.key3};
      border: 1px solid ${palette.key3};
    }
  `,
  tertiary: css`
    background: none;
    &:hover {
      color: ${palette.key1};
    }
    &:active {
      color: ${palette.key3};
      background: rgba(233, 137, 48, 0.08);
    }
  `,
};
const sizeStyle = {
  small: css`
    height: 2rem;
    width: 1.125rem;
    padding: 0 0.375rem;
  `,
  medium: css`
    height: 2.5rem;
    width: 1.5rem;
    padding: 0 0.5rem;
  `,
  large: css`
    height: 3rem;
    width: 2rem;
    padding: 0 0.5rem;
  `,
};

function Icon({
  icon,
  color,
  theme = 'tertiary',
  className,
  size = 'large',
}: IconProps) {
  const SVGIcon = icons[icon];
  const colors = themes[theme];

  return (
    <SVGIcon
      css={[{ fill: color || 'currentColor' }, colors, sizeStyle[size]]}
      className={className}
    />
  );
}

Icon.defaultProps = {
  color: `${palette.key0}`,
  sizes: 'medium',
};

export default Icon;
