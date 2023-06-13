import type {Meta, StoryObj} from '@storybook/react';

import {AddItemForm} from './AddItemForm';

const meta: Meta<typeof AddItemForm> = {
    component: AddItemForm,
    argTypes: { addItem: { action: 'Clicked on button add item' } },
};
export default meta;
type Story = StoryObj<typeof AddItemForm>;


export const AddItemForm_1: Story = {
    render: (argTypes) => <AddItemForm title={'Add item'} addItem={argTypes.addItem} />,
};