import type {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import Accordion from './Accordion';


const meta: Meta<typeof Accordion> = {
    title: 'Stories Accordion',
    component: Accordion,
    argTypes:{setCollapsedState:{action:'Call func to collapsed/unCollapsed accordion'}}
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Collapsed: Story = {
    args: {
        isCollapsed:true,
        titleValue:'It is collapsed accordion',
    }
};

export const UnCollapsed: Story = {
    args: {
        isCollapsed:false,
        titleValue:'It is unCollapsed accordion',
    }
};

const AccordionWithHooks = () => {
    const [value, setValue] = useState<boolean>(false);

    return <Accordion titleValue={'SuperAccordion'} isCollapsed={value} setCollapsedState={setValue}/>
}

export const ModeChanging: Story = {
    render: () => <AccordionWithHooks />
};