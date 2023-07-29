import type { Meta, StoryObj } from '@storybook/angular';
import { KavaButtonComponent } from './kava-button.component';

const meta: Meta<KavaButtonComponent> = {
  title: 'Button',
  component: KavaButtonComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: KavaButtonComponent) => ({
    props: {
      ...args
    },
  }),
};

export default meta;
type Story = StoryObj<KavaButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Button',
    disabled: false
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true
  },
};
