/** @jsxRuntime classic /
/** @jsx jsx */
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import React from 'react';
import { jsx } from '@emotion/react';
import palette from '../../../color';

interface IProps {
  text?: string;
  position?: 'right' | 'left';
  theme?: string;
  size?: 'small' | 'medium' | 'large';
}

function ButtonGroup({
  text,
  position = 'left',
  theme = 'primary',
  size,
}: IProps): React.ReactElement {
  const iconTheme = theme === 'primary' ? 'white' : `${palette.key0}`;

  return (
    <Button size={size} theme={theme}>
      {position === 'left' && (
        <Icon color={iconTheme} icon="symbol" size="medium" />
      )}
      {text}
      {position === 'right' && (
        <Icon color={iconTheme} icon="symbol" size="medium" />
      )}
    </Button>
  );
}

export default ButtonGroup;
