import type {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import {ItemType, MySelect} from './MySelect';


const meta: Meta<typeof MySelect> = {
    title: 'Stories MySelect',
    component: MySelect,
};

export default meta;
type Story = StoryObj<typeof MySelect>;

const items: Array<ItemType> = [
    {value: '1', title: 'First Item'},
    {value: '2', title: 'Second Item'},
    {value: '3', title: 'Third Item'},
    {value: '4', title: 'Fourth Item'},
    {value: '5', title: 'Fifth Item'},
]

const SelectWithValue = () => {
    const [value, setValue] = useState('1');

    const changeValue = (value: string) => {
        setValue(value);
    }

    return <MySelect value={value} items={items} onChange={changeValue}/>
}

export const HOCWithValue: Story = {
    render: () => <SelectWithValue />
};


