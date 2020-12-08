/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { Icon } from '../../../../packages/core/index';

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
const iconWrapper = css`
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;

export const filledIcon = () => {
  return <Icon theme="primary" icon="symbol" />;
};
export const unfilledIcon = () => {
  return <Icon theme="secondary" icon="symbol" />;
};

export const simpleIcon = () => {
  return <Icon icon="symbol" />;
};

export const filledIcons = () => {
  return (
    <div css={iconWrapper}>
      <div>
        <Icon theme="primary" icon="symbol" />
      </div>
      <div>
        <Icon theme="disabled" icon="symbol" />
      </div>
    </div>
  );
};

export const sizes = () => {
  return (
    <div css={iconWrapper}>
      <div>
        <div className="description">Small</div>
        <Icon size="small" icon="symbol" />
      </div>
      <div>
        <div className="description">Medium</div>
        <Icon size="medium" icon="symbol" />
      </div>
      <div>
        <div className="description">Large</div>
        <Icon size="large" icon="symbol" />
      </div>
    </div>
  );
};

export const stars = () => {
  return (
    <div css={iconWrapper}>
      <div>
        <div className="description">Small</div>
        <Icon size="small" icon="star" />
      </div>
      <div>
        <div className="description">Medium</div>
        <Icon size="medium" icon="star" />
      </div>
      <div>
        <div className="description">Large</div>
        <Icon size="large" icon="star" />
      </div>
    </div>
  );
};
