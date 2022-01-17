import React from 'react';
import { textString } from '../data';
import { Fonts } from './fonts';

export default {
  title: 'Tokens/Fonts',
};

const Template = (args) => <Fonts {...args} />;

export const Inter = Template.bind({});
Inter.args = { textString, cssClasses: 'font-inter' };

export const FateFont = Template.bind({});
FateFont.args = { textString: 'ocad e b.', cssClasses: 'font-fate text-xl' };
