import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {
  TbCaretRightFilled as RightIcon,
  TbCaretLeftFilled as LeftIcon,
} from 'react-icons/tb';

import {Button} from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    onClick: fn(),
    RightIcon: () => (
      <RightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
    ),
    LeftIcon: () => (
      <LeftIcon className="transition-transform duration-200 group-hover:-translate-x-1" />
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Button',
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'filled',
    label: 'Button',
    disabled: true,
  },
};
