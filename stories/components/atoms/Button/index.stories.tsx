import { Button } from '../../../../packages/core/index';
import React from 'react';

export default {
  title: '버튼',
  component: Button,
  parameters: {
    componentSubtitle: 'Button 컴포넌트',
  },
};

export const defaultButton = () => {
  return <Button theme="tertiary">default 버튼</Button>;
};

export const primaryButton = () => {
  return <Button theme={'primary'}>primary 버튼</Button>;
};
export const secondaryButton = () => {
  return <Button theme={'secondary'}>secondary 버튼</Button>;
};
