/** @jsx jsx */

import * as icons from './svg';

import { jsx } from '@emotion/react';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color?: string;
  /** 아이콘 크기 */
  size?: string | number;
  className?: string;
};

function Icon({ icon, color, size, className }: IconProps) {
  const SVGIcon = icons[icon];

  return (
    <SVGIcon
      css={{ fill: color || 'currentColor', width: size, height: 'auto' }}
      className={className}
    />
  );
}

export default Icon;
