import type {Meta, StoryObj} from '@storybook/react';
import Rating from './Rating';
import {useState} from 'react';

const meta: Meta<typeof Rating> = {
    title: 'Stories Rating',
    component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const EmptyRating: Story = {
    args: {
        value: 0,
        setRatingValue: () => {
        }
    },
};
export const Rating1: Story = {
    args: {
        value: 1,
        setRatingValue: () => {
        }
    },
};
export const Rating2: Story = {
    args: {
        value: 2,
        setRatingValue: () => {
        }
    },
};
export const Rating3: Story = {
    args: {
        value: 3,
        setRatingValue: () => {
        }
    },
};
export const Rating4: Story = {
    args: {
        value: 4,
        setRatingValue: () => {
        }
    },
};
export const Rating5: Story = {
    args: {
        value: 5,
        setRatingValue: () => {
        }
    },
};

const RatingWithHooks = () =>{
    const [value, setValue] = useState<number>(0);

    return <Rating value={value} setRatingValue={setValue}/>
}

export const ChangeRating: Story = {
   render:()=><RatingWithHooks/>
};

