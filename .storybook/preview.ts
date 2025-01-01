import type {Preview} from '@storybook/react';
import '../app/globals.css';
import './styles.css';
import '../setup';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [{name: 'app', value: '#FAFAFA'}],
    },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
  },
};

export default preview;
