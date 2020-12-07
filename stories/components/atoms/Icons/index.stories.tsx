/** @jsx jsx */
import { Icon } from '../../../../packages/core/index';
import { jsx } from '@emotion/react';

export default {
  title: '아이콘',
  component: Icon,
  parameters: {
    componentSubtitle: 'Icon 컴포넌트',
  },
};

export const icon = () => <Icon icon="symbol" />;
icon.story = {
  name: 'Default',
};
