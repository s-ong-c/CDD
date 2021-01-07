/** @jsxRuntime classic /
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { Button } from '../../../../packages/core/index';

export default {
  title: '버튼',
  component: Button,
  parameters: {
    componentSubtitle: 'Button 컴포넌트',
  },
};

export const defaultButton = () => {
  return <Button>Button</Button>;
};

export const smallButton = () => {
  return (
    <Button size="small" theme="primary">
      Button
    </Button>
  );
};

export const primaryButton = () => {
  return <Button theme={'primary'}>Button</Button>;
};
export const unfilledButton = () => {
  return <Button theme={'secondary'}>Button</Button>;
};

export const textButton = () => {
  return <Button theme={'tertiary'}>Button</Button>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Large</div>
        <Button size="large">BUTTON</Button>
      </div>
    </div>
  );
};
