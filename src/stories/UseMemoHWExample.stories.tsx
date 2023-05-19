import type {Meta, StoryObj} from '@storybook/react';
import React, {useCallback, useMemo, useState} from 'react';
import {MySelect} from '../components/CustomSelect_ver2/MySelect';
import {log} from 'util';

const meta: Meta = {
    title: 'UseMemo',
};

export default meta;
type Story = StoryObj;

const initialState = [
    {value: '1', title: 'Belarus', city: 'Minsk', peopleCount: 2000000},
    {value: '2', title: 'Belarus', city: 'Vitebsk', peopleCount: 500000},
    {value: '3', title: 'Belarus', city: 'Brest', peopleCount: 600000},
    {value: '4', title: 'Russia', city: 'Moscow', peopleCount: 12000000},
    {value: '5', title: 'Russia', city: 'Rostov-na-Donu', peopleCount: 1000000},
    {value: '6', title: 'Russia', city: 'Ekaterinburg', peopleCount: 8000000},
    {value: '7', title: 'Ukraine', city: 'Kiev', peopleCount: 5000000},
    {value: '8', title: 'Ukraine', city: 'Odessa', peopleCount: 1500000},
    {value: '9', title: 'Ukraine', city: 'Chernigov', peopleCount: 2000000},
]

const SelectWithMemo = React.memo(MySelect);

const ParentComponent = () => {

    const [state, setState] = useState(initialState);
    const [count, setCount] = useState<number>(0);

    const countryFilter = useMemo(() => state.filter(country => country.title === 'Belarus'), [state]);
    const peopleCountFilter = useMemo(() => state.filter(country => country.peopleCount >= 8000000), [state]);
    const cityFilter = useMemo(() => state.filter(country => country.city.includes('e')), [state]);
    const onChange =  useCallback((value:string) => console.log(1),[state]);


    return (
        <>
            <div>Country filter:</div>

            <SelectWithMemo value={'1'} items={countryFilter} onChange={onChange} />
            <div>People Count Filter:</div>
            <SelectWithMemo value={'4'} items={peopleCountFilter} onChange={onChange} />
            <div>City title Filter:</div>
            <SelectWithMemo value={'7'} items={cityFilter} onChange={onChange} />
            <div>Count:</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
        </>
    )

}

export const CitiesSelects: Story = {
    render: () => <ParentComponent />
};