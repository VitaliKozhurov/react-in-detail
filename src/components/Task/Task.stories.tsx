import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Task} from './Task';

const meta: Meta<typeof Task> = {
    component: Task,

};
export default meta;
type Story = StoryObj<typeof Task>;

const changeTaskStatus = action('Status changed');
const changeTaskTitle = action('Status changed');
const removeTask = action('Task was removed');

export const Task_Examel: Story = {
    render: () => <>
        <Task
            task={{id: '1', isDone: false, title: 'React'}}
            todoListID={'todo_1'}
            changeTaskStatus={changeTaskStatus}
            changeTaskTitle={changeTaskTitle}
            removeTask={removeTask}
        />
        <Task
            task={{id: '2', isDone: true, title: 'JS'}}
            todoListID={'todo_1'}
            changeTaskStatus={changeTaskStatus}
            changeTaskTitle={changeTaskTitle}
            removeTask={removeTask}
        />
    </>
}