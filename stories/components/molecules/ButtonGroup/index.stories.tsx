/** @jsxRuntime classic /
/** @jsx jsx */
import { ButtonGroup } from '../../../../packages/core/index';
import { jsx } from '@emotion/react';

export default {
  title: '아이콘버튼',
  component: ButtonGroup,
  parameters: {
    componentSubtitle: 'Icon 컴포넌트',
  },
};

export const buttonGroup = () => <ButtonGroup text="Button" />;
buttonGroup.story = {
  name: 'Default',
};
export const primaryButton = () => {
  return <ButtonGroup text="Button" theme={'primary'} />;
};
export const unfilledButton = () => {
  return <ButtonGroup text="Button" theme={'secondary'} />;
};

export const textButton = () => {
  return <ButtonGroup text="Button" theme={'tertiary'} />;
};
