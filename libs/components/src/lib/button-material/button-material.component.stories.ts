
import { ButtonMaterialComponent } from './button-material.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ComponentsComponent } from '../components.component';
import { MaterialModule } from '../material.module';

// function getComponentSelector(component: any) {
//   return component.__annotations__[0].selector;
// }

// function componentAsTemplate(component: any) {
//   const selector = getComponentSelector(component)
//   return `<${selector}></${selector}>`
// }


//template: `<div style="margin: 3em">${componentAsTemplate(story.component)}</div>`,

export default {
  title: 'Example/ButtonMaterial',
  component: ButtonMaterialComponent,
  decorators: [
    (storyFunc) => {
      const story = storyFunc();
      return {
        ...story,
        template: `
          <nxplayground-components></nxplayground-components>
          ${story.template}
        `,
      };
    },
  ],
  argTypes: {
    backgroundColor: { control: 'color', description: 'achtergrond kleur' },
  },
  parameters: {
    componentSubtitle: 'Component beschrijving'
  },
} as Meta;

const Template: Story<ButtonMaterialComponent> = (args: ButtonMaterialComponent) => ({
  component: ButtonMaterialComponent,
  moduleMetadata: ({
    imports: [MaterialModule],
    declarations: [ButtonMaterialComponent, ComponentsComponent],
  }),
  template: "<nxplayground-button-material></nxplayground-button-material>",
  props: args,
});

export const Test = Template.bind({});
//Test.template = "<div><nxplayground-button-material></nxplayground-button-material></div>"
Test.args = {
  label: 'Test',
};
