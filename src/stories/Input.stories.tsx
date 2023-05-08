import type {Meta, StoryObj} from '@storybook/react';
import {ChangeEvent, useRef, useState} from 'react';

const meta: Meta = {
    title: 'UncontrolledInput',
    argTypes: {onChange: {action: 'I want to change'}}
};

export default meta;
type Story = StoryObj;

const TrackValueComponent = () => {
    const [value, setValue] = useState('');
    return (
        <>
            <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} /> --
            {value}
        </>

    )
}

export const UncontrolledInput = {
    render: () => <input />
};

export const TrackValueUncontrolledInput = {
    render: () => <TrackValueComponent />
};

export const ControlledInputWithFixedValue = {
    render: () => <input value={'it-incubator.by'} />
};

const InputWithRef = () => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onButtonPressHandler = () => {
        const value = inputRef.current ? inputRef.current.value : '';
        setValue(value)
    }

    return <>
        <input ref={inputRef} />
        <button onClick={onButtonPressHandler}>Save input value</button>
        <div>Actual value: {value}</div>
    </>
}

export const GetValueUncontrolledInputByButtonPress = {
    render: () => <InputWithRef />
}

const ControlledInputExample = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue((e.currentTarget.value))
    }

    return <input value={inputValue} onChange={changeInputValueHandler} />
}

export const ControlledInput = {
    render: () => <ControlledInputExample />
}

const ControlledCheckBoxExample = () => {
    const [mode, setMode] = useState<boolean>(false);

    const setCheckBoxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMode(e.currentTarget.checked)
    }

    return <>
        CheckBoxStatus: <input type="checkbox" onChange={setCheckBoxValue} checked={mode} />
    </>
}

export const ControlledCheckBox = {
    render: () => <ControlledCheckBoxExample />
}

const ControlledSelectExample = () => {
    const [value,setValue] = useState<string|undefined>(undefined);

    const onChangeSelectHandler = (e:ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.currentTarget.value)
    }

    return <select onChange={onChangeSelectHandler} value={value}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}

export const ControlledSelect = {
    render:()=><ControlledSelectExample/>
}