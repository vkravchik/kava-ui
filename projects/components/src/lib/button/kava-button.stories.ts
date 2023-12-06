import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonColors } from './types/button.colors';
import { ButtonSizes } from './types/button.sizes';
import { ButtonTypes } from './types/button.types';
import { KavaButtonComponent } from './kava-button.component';

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
    color: ButtonColors.primary,
    type: ButtonTypes.raised,
    size: ButtonSizes.normal,
  },
};
