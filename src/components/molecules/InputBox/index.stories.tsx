import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputBox from '.';

export default {
  title: 'Input Box',
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args) => (
  <InputBox {...args} />
);

export const Username = Template.bind({});
Username.args = {
  fieldName: 'Username',
};

export const Password = Template.bind({});
Password.args = {
  fieldName: 'Password',
  readOnly: true,
};
