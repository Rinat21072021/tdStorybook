import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import {TaskPriorities, TaskStatuses} from "../api/TodoApi";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Task',
	component: Task,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsDoneStory.args = {
	changeTaskStatus: action('change status'),
	onChangeTitle: action('change status'),
	onClickHandlerRemove: action('change status'),
	task: {
		id: '1', title: 'JS', status: TaskStatuses.Completed,todoListId:'tododlist_1',
	startDate:'',deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low,description:''
	},

};
export const TaskNotDoneStory = Template.bind({});
TaskNotDoneStory.args={
	changeTaskStatus: action('change status'),
	onChangeTitle: action('change status'),
	onClickHandlerRemove: action('change status'),
	task: {
		id: '1', title: 'JS', status: TaskStatuses.New,todoListId:'tododlist_1',
	startDate:'',deadline:'',addedDate:'',order:0,priority:TaskPriorities.Low,description:''
	},

}


