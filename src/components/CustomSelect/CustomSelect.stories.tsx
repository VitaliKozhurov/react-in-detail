import type {Meta, StoryObj} from '@storybook/react';
import {CustomSelect} from './CustomSelect';
import {useState} from 'react';

const meta: Meta<typeof CustomSelect> = {
    title: 'Stories Custom Select',
    component: CustomSelect,
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;

export const Hidden: Story = {
    args: {
        title: 'Hidden',
        list:['1','2','3']
    }
};


/*
const OnOffWithHooks = () => {
    const [value, setValue] = useState<boolean>(false);
    return <OnOffComponent isOn={value} setIsOn={setValue} />
}

export const ModeChanging: Story = {
    render: () => <OnOffWithHooks />
};*/
