//import { addDecorator } from '@storybook/angular';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../../../documentation.json";
setCompodocJson(docJson);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
  }
//import { withKnobs } from '@storybook/addon-knobs';

//addDecorator(withKnobs);