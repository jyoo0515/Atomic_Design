import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from '.';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Hello',
};
