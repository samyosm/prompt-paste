import type {Meta, StoryObj} from '@storybook/react';

import {Logo as Element} from './Logo';

const meta: Meta<typeof Element> = {
  component: Element,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Element>;

export const Basic: Story = {
  args: {},
};
