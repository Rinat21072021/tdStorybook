import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {InputWithButton} from "./InputWhithButton";
import {action} from "@storybook/addon-actions";
import {EditSpan} from "./EditSpan";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/EditSpan',
	component: EditSpan,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {

	}
} as ComponentMeta<typeof EditSpan>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditSpan> = (args) => <EditSpan {...args} />;

export const EditSpanStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EditSpanStory.args = {
	title: "JS",
	onChangeTitle: action('change Title')
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
