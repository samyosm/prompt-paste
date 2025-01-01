import type {Meta, StoryObj} from '@storybook/react';

import {PromptCard as Element} from './PromptCard';

const meta: Meta<typeof Element> = {
  title: 'Components/PromptCard',
  component: Element,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Element>;

export const Basic: Story = {
  args: {
    title: 'Long-tail, high-volume and low-difficulty keyword generation',
    author: '@BCM',
    date: new Date(2024, 3, 24),
  },
};
