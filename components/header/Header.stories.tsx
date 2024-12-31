import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Header} from './Header';
import {Button} from '../button/Button';
import {HiOutlinePlus as PlusIcon} from 'react-icons/hi2';

const meta: Meta<typeof Header> = {
  component: Header,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Plain: Story = {
  args: {
    children: (
      <Button
        RightIcon={PlusIcon}
        variant="filled"
        onClick={fn}
        label="New Prompt"
      />
    ),
  },
};
