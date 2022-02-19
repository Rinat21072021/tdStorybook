import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {InputWithButton} from "./InputWhithButton";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/InputWithButton',
	component: InputWithButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		callback: {
			description: 'Callback Clicked inside form'
		},
		isLabel: {
			description: 'If true | false, TODO | TASK is added'
		}
	}
} as ComponentMeta<typeof InputWithButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputWithButton> = (args) => <InputWithButton {...args} />;

export const InputWithButtonStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputWithButtonStory.args = {
	callback: action('Add todo'),
	isLabel: true
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
