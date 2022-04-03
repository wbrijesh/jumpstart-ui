// import React from 'react';
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../src/Button';

export default {
  title: 'Action/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Large = Template.bind({});
export const Small = Template.bind({});

Primary.args = { primary: true, label: 'Button' };
Secondary.args = { secondary: true, label: 'Button' };
Large.args = { size: 'large', label: 'Button' };
Small.args = { size: 'small', label: 'Button' };
