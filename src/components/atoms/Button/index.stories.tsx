import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'button',
};

export const Reset = Template.bind({});
Reset.args = {
  type: 'reset',
};

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit',
};
