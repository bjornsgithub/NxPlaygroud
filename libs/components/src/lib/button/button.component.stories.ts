import { text, number, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ButtonComponent,
  props: {
    primary: boolean('primary', false),
    backgroundColor: text('backgroundColor', ''),
    size: text('size', 'medium'),
    label: text('label', 'Button'),
  }
})