import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonTypes, KavaButtonComponent } from './kava-button.component';

const meta: Meta<KavaButtonComponent> = {
  title: 'Button',
  component: KavaButtonComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: KavaButtonComponent) => {
    return ({
      props: {
        ...args
      },
    })
  }
};

export default meta;
type Story = StoryObj<KavaButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Button',
    disabled: false,
    type: ButtonTypes.primary,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
    type: ButtonTypes.primary
  },
};
