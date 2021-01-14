import { ButtonComponent } from './button.component';
import { Story, Meta } from '@storybook/angular/types-6-0';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color', description: 'achtergrond kleur' },
  },
  parameters: {
    componentSubtitle: 'Component beschrijving',
    docs: {
      source: {
        code: '<nxplayground-button></nxplayground-button>',
      },
    }
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Test = Template.bind({});
Test.args = {
  label: 'Test',
};

export const Test2 = Template.bind({});
Test2.args = {
  label: 'Test2adsfdaf',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
