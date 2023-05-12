import type {Meta, StoryObj} from '@storybook/react';
import {CustomSelect} from './CustomSelect';
import {useState} from 'react';
import Accordion from '../Accordion/Accordion';

const meta: Meta<typeof CustomSelect> = {
    title: 'Stories Custom Select',
    component: CustomSelect,
    argTypes: {onChange: {action: 'clicked'}},
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;

const CustomSelectWithValue = () => {
    const [value, setValue] = useState<string>('2');
    const changeSelectValue = (newValue: string) => {
        setValue(newValue)
    }
    return <CustomSelect
        value={value}
        items={[
            {
                value: '1',
                title: 'Minsk'
            },
            {
                value: '2',
                title: 'Moscow'
            },
            {
                value: '3',
                title: 'Kiev'
            }
        ]}
        onChange={changeSelectValue}
    />
}

const CustomSelectWithOutValue = () => {
    const [value, setValue] = useState<string | null>(null);
    const changeSelectValue = (newValue: string) => {
        setValue(newValue)
    }
    return <CustomSelect
        value={value}
        items={[
            {
                value: '1',
                title: 'Minsk'
            },
            {
                value: '2',
                title: 'Moscow'
            },
            {
                value: '3',
                title: 'Kiev'
            }
        ]}
        onChange={changeSelectValue}
    />
}

export const WithValue: Story = {
    render: () => <CustomSelectWithValue />
};


export const WithoutValue: Story = {
    render: () => <CustomSelectWithOutValue />
};
