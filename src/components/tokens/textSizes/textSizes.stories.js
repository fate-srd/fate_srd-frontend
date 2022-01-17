import React from 'react';
import { textString } from '../data';
import { TextSizes } from './textSizes';

export default {
  title: 'Tokens/Text Sizes',
};

const Template = (args) => <TextSizes {...args} />;

export const textSizeSmall = Template.bind({});
textSizeSmall.args = { textString, cssClasses: 'text-sm' };
export const textSizeBase = Template.bind({});
textSizeBase.args = { textString, cssClasses: 'text-base' };
export const textSizeLarge = Template.bind({});
textSizeLarge.args = { textString, cssClasses: 'text-lg' };
export const textSizeXL = Template.bind({});
textSizeXL.args = { textString, cssClasses: 'text-xl' };
export const textSize2XL = Template.bind({});
textSize2XL.args = { textString, cssClasses: 'text-2xl' };
