/** @jsx jsx */

import { css, jsx } from '@emotion/react';

import { IComponentProps } from '../../../model/commonProps';
import React from 'react';
import { palette } from '../../../palette';

export enum ButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const themes = {
  primary: css`
    background: ${palette.key0};
    color: white;
    &:hover {
      background: ${palette.key1};
    }
    &:active {
      background: ${palette.key2};
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:hover {
      background: #f1f3f5;
    }
    &:active {
      background: #dee2e6;
    }
  `,
  tertiary: css`
    background: none;
    color: #20c997;
    &:hover {
      background: #e6fcf5;
    }
    &:active {
      background: #c3fae8;
    }
  `,
};

interface IProps extends IComponentProps {
  isCapture?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  theme: string;
}

const Button: React.FC<IProps> = ({
  children,
  theme,
  isCapture = false,
  onClick,
}) => {
  const clickEvent = isCapture ? { onClickCapture: onClick } : { onClick };

  return (
    <button css={[style, themes[theme]]} {...clickEvent}>
      {children}
    </button>
  );
};

export default Button;
