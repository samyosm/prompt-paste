import type {Meta, StoryObj} from '@storybook/react';

import {Input as Element} from './Input';

import {HiAtSymbol as EmailIcon} from 'react-icons/hi2';
import {HiOutlineExclamationCircle as RequiredIcon} from 'react-icons/hi2';

const meta: Meta<typeof Element> = {
  component: Element,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Element>;

export const Email: Story = {
  args: {
    IconLeft: EmailIcon,
    IconRight: RequiredIcon,
    required: true,
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Please enter in your email',
    message: <p className="text-red-500">Wrong email</p>,
  },
};
