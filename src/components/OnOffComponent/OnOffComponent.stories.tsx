import type {Meta, StoryObj} from '@storybook/react';
import {OnOffComponent} from './OnOffComponent';
import {useState} from 'react';


const meta: Meta<typeof OnOffComponent> = {
    title: 'Stories OnOff',
    component: OnOffComponent,
    argTypes: {setIsOn:{action:'Click on btn On/Off'}}
};

export default meta;
type Story = StoryObj<typeof OnOffComponent>;



export const OffMode: Story = {
    args: {
        isOn: false,
    }
};

export const OnMode: Story = {
    args: {
        isOn: true,
    }
};

const OnOffWithHooks = () => {
    const [value, setValue] = useState<boolean>(false);

    return <OnOffComponent isOn={value} setIsOn={setValue} />
}

export const ModeChanging: Story = {
    render: () => <OnOffWithHooks />
};